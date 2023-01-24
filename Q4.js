// A tree is a data structure that simulates a hierarchical tree structure, with a root value and subtrees of children, represented as a set of linked nodes. Each node of a tree holds its own data and a reference to its children.

// There are several types of tree data structures, the most common ones are:

// Binary Tree: a tree data structure in which each node has at most two children, which are referred to as the left child and the right child.

// Binary Search Tree (BST): a tree data structure in which each node has at most two children, left and right, and satisfies the binary search tree property, where for each node, all elements in its left subtree are less than the node, and all elements in its right subtree are greater than the node.

// AVL Tree: a self-balancing binary search tree, where the difference in height of the left and right subtrees of any node is at most one.

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  // Depth First Search(DFS)
  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }
}

const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);

bst.inOrder(bst.root);
//Print => left -> data -> right
bst.preOrder(bst.root);
//print => root -> left -> right
