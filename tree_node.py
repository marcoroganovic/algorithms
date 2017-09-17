class TreeNode:
  def __init__(self, val, left = None, right = None):
    self.value = val
    self.leftChild = left
    self.rightChild = right


  def search(value, node):
    """
    Base case: If the node is nonexistent
    or we've found the value we're looking for:
    """
    if node is None or node.value == value:
      return node

    """
    if the value is less than the current node, perform
    search on the left child:
    """
    elif value < node.value:
      return search(value, node.leftChild)
    else:
      return search(value, node.rightChild)

  def insert(value, node):
    if value < node.value
      """
      if the left child does not exist, we want to insert
      the value as the left child:
      """
      if node.leftChild is None:
        node.leftChild = TreeNode(value)
      else:
        insert(value, node.leftChild)
    
    elif value > node.value:
      """
      if the right child does not exist, we want to insert
      the value as the right child:
      """
      if node.rightChild is None:
        node.rightChild = TreeNode(value)
      else:
        insert(value, node.rightChild)

  def delete(value, node):
    """
    The base case is when we've hit the bottom of the tree,
    and the parent node has no children:
    """

    if node is None:
      return None

    """
    If the value we're deleting is less or greater than the current node,
    we set the left or righ child respectively to be 
    the return value of a recursive call of this very method on the current
    node's left or right subtree.
    """
    elif value < node.value:
      node.leftChild = delete(value, node.leftChild)
    """
    We return the current node (and its subtree if existent) to
    be used as the new value of its parent''s left or right child:
    """
      return node
  
    elif value > node.value:
      node.rightChild = delete(value, node.rightChild)
      return node

    """
    if the current node is the one we want to delete:
    """
    elif value == node.value:

    """
    If the current node has no left child, we delete it by
    returning its right child (and its subtree if existent)
    to be its parent's new subtree:
    """
      if node.leftChild is None:
        return node.rightChild

      """
      (If the current node has no left OR righy child, this ends up
      being None as per the first line of code in this function.)
      """

      elif node.rightChild is None:
        return node.leftChild
      
      """
      If the current node has two children, we delete the current node
      by calling the lift function (below), which changes the current node's
      value to the value of its successor node:
      """
      else:
        node.rightChild = lift(node.rightChild, node)
        retur node

  def lift(node, nodeToDelete):
    """
    If the current node of this function has a left child,
    we recursively call this fnction to continue down
    the left subtree to find the successor node
    """

    if node.leftChild:
      node.leftChild = lift(node.leftChild, nodeToDelete)
      return node
    
    """
    If the current node has no left child, that means the current node
    of this function is the successor node, and we take its value
    and make it the new value of the node that we're deleting:
    """
    else:
      nodeToDelete.value = node.value
      """
      We return the successor node's right child to be now used
      as its parent's left child:
      """
      return node.rightChild

node = TreeNode(1)
node_two = TreeNode(10)
root = TreeNode(5, node, node_two)
