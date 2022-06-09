// `.toString() - method used to have an overview of our list`;

function LinkedListFactory() {
  // var to hold the very first element
  let head = null;
  let length = 0;
  // control var to hold the list size
  return {
    append,
    indexOf,
    insertAt,
    removeAt,
    remove,
    toString,
  };

  // append or add to your list
  function append(element) {
    const node = {
      element,
      next: null,
    };
    if (head === null) {
      head = node;
    } else {
      let currentNode = head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    length++;
  }
  // index of
  function indexOf(element) {
    // First, we'll need two controller variables: nodeIndex and currentElement.
    let nodeIndex = 0;
    let currentNode = head;
    while (currentNode) {
      if (element === currentNode.element) {
        return nodeIndex;
      }
      nodeIndex++;
      currentNode = currentNode.next;
    }
    return -1;
  }
  // insertAt
  function insertAt(position, element) {
    const isPositionInTheRange = position > -1 && position < length;
    if (!isPositionInTheRange) {
      return false;
    }
    // Our brand new node
    const node = {
      element,
      next: null,
    };
    // Controllert to iterate over the list
    let currentNode = head;
    const isHeadPosition = position === 0;
    if (isHeadPosition) {
      node.next = currentNode;
      head = node;
    } else {
      let prevousNode = null;
      let index = 0;
      while (index++ < position) {
        prevousNode = currentNode;
        currentNode = currentNode.next;
      }
      prevousNode.next = node;
      node.next = currentNode;
    }
    length++;
    return true;
  }
  // remove
  function removeAt(position) {
    const isPositionInTheRange = position > -1 && position < length;
    if (isPositionInTheRange) {
      return null;
    }
    let currentNode = head;
    if (position === 0) {
      head = currentNode.next;
    } else {
      let index = 0;
      let previousNode = null;

      while (index++ < position) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }
    length--;
    return currentNode.element;
  }
  // remove
  function remove(element) {
    const elementIndex = indexOf(element);
    return removeAt(elementIndex);
  }

  // toString or to view the entire string
  function toString() {
    let result = "";
    let current = head;

    while (current) {
      result += `${current.element} $ {current.next ? ", " : ""}`;
      current = current.next;
    }
    return result;
  }
}

const linkedList = LinkedListFactory();

linkedList.append(1);
linkedList.append(10);
linkedList.append(-1);
linkedList.append(40);
linkedList.append(-123);

console.log(linkedList.toString()); // 1, 10, -1, 40, -123

console.log(linkedList.removeAt(3)); // 40

console.log(linkedList.toString()); // 1, 10, -1, -123

console.log(linkedList.indexOf(1)); // 0

console.log(linkedList.remove(1)); // 1

console.log(linkedList.toString()); // 10, -1, -123
