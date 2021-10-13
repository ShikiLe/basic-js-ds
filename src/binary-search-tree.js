const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
module.exports = class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    let newNode = new Node(data);

    if (this._root === null) {
      this._root = newNode;
    } else {
      this.insertNode(this._root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  has(data) {
    if (!this._root) {
      return false;
    }

    let current = this._root;
    let found = false;
    while (current && !found) {
      if (data < current.data) {
        current = current.left;
      } else if (data > current.data) {
        current = current.right;
      } else {
        found = true;
      }
    }
    return found;
  }

  find(data) {
    if (!this._root) {
      return false;
    }

    let current = this._root;
    let found = false;
    while (current && !found) {
      if (data < current.data) {
        current = current.left;
      } else if (data > current.data) {
        current = current.right;
      } else {
        found = current;
      }
    }
    if (!found) {
      return null;
    }
    return found;
  }

  remove(data) {
    return !(deleteNodeHelper(this._root, data) === false);
  }

  findMinNode(node) {
    if (node.left === null) {
      return node.data;
    } else {
      return this.findMinNode(node.left);
    }
  }

  min() {
    return this.findMinNode(this._root);
  }

  findMaxNode(node) {
    if (node.right === null) {
      return node.data;
    } else {
      return this.findMaxNode(node.right);
    }
  }
  max() {
    return this.findMaxNode(this._root);
  }
};
function deleteNodeHelper(root, key) {
  if (root === null) {
  }
  if (key < root.data) {
    root.left = deleteNodeHelper(root.left, key);
    return root;
  } else if (key > root.data) {
    root.right = deleteNodeHelper(root.right, key);
    return root;
  } else {
    if (root.left === null && root.right === null) {
      root = null;
      return root;
    }
    if (root.left === null) return root.right;
    if (root.right === null) return root.left;

    let currNode = root.right;
    while (currNode.left !== null) {
      currNode = currNode.left;
    }
    root.data = currNode.data;
    root.right = deleteNodeHelper(root.right, currNode.data);
    return root;
  }
}
