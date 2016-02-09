'use strict';

class BinaryTree {
	constructor() {
		this.root = null;
	}

	insert(data) {
		if(this.root == null) {
			this.root = new Node(data, null, null)
		} else {
			var currentNode = this.root
			while(true) {
				if (currentNode.data < data) {
					if (currentNode.right) {
						currentNode = currentNode.right
					} else {
						currentNode.right = new Node(data, null, null)
						break
					}
				} else {
					if (currentNode.left) {
						currentNode = currentNode.left
					} else {
						currentNode.left = new Node(data, null, null)
						break
					}
				}
			}
		}
	}

	contains(data) {
		if(this.root == null) {
			return false
		} else {
			var currentNode = this.root
			while(true) {
				if (currentNode.data == data) {
					return true
				} else if (currentNode.data < data) {
					if (currentNode.right) {
						currentNode = currentNode.right
					} else {
						return false
					}
				} else if (currentNode.left) {
					currentNode = currentNode.left
				} else {
					return false
				}
			}
		}
	}


	remove(data) {


		function _remove(data, parent, curent) {
			if (data < curent.data) {
				if (curent.left != null) {
					_remove(data, curent, curent.left)
				}
			}
			else if (data > curent.data) {
				if (curent.right != null) {
					_remove(data, curent, curent.right)
				}
			} else if (curent.left != null && curent.right != null) {
				curent.data = minValue(curent.right);
				_remove(curent.data, curent, curent.right);
			} else if (parent.left == curent) {
				parent.left = (curent.left != null) ? curent.left : curent.right;
			} else if (parent.right == curent) {
				parent.right = (curent.left != null) ? curent.left : curent.right;
			}
		}
		if(data != null) {
			if(this.root != null) {
				if(this.root.data == data) {
					var newRoot = new Node(null, this.root, null);
					_remove(data, newRoot, this.root)
					this.root = newRoot.left
				} else { _remove(data, null, this.root)}
			}
		}
		function minValue(current) {
			if (current.left == null) {
				return current.data;
			} else {
				return minValue(current.left);
			}
		};
	}

	size() {
		function _size(currentNode) {
			var count = 0;
			if(currentNode.right !=null) { count += _size(currentNode.right)}
			if(currentNode.left != null) { count += _size(currentNode.left)}

			return ++count;
		}

		if(this.root != null) { return _size(this.root) }
		else { return 0 }

	}

	isEmpty() {
		return this.root == null
	}

}