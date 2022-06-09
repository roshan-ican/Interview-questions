function LinkedList() {
  this.head = null;
  this.tail = null;
}
// function nodes
function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}
// but if has the nodes to add new node there will be this.head
LinkedList.prototype.addToHead = function (value) {
  var newNode = new Node(value, this.head, null);
  if (this.head) this.head.prev = newNode;
  else this.tail = newNode;
  this.head = newNode;
};
LinkedList.prototype.addToTail = function (value) {
  var newNode = new Node(value, null, this.tail);
  if (this.tail) this.tail.next = newNode;
  else this.head = newNode;
  this.tail = newNode;
};

// var myLL = new LinkedList();
// myLL.addToTail(10);
// console.log(myLL);
// removing the node
LinkedList.prototype.removeHead = function () {
  if (!this.head) return null;
  var val = this.head.value;
  this.head = this.head.next;
  if (this.head) this.head.prev = null;
  else this.tail = null;
  return val;
};

var llr = new LinkedList();
llr.addToHead(1000);
llr.addToHead(2000);
llr.addToTail(3000);
llr.removeHead();
console.log(llr.removeHead());

LinkedList.prototype.removeTail = function () {
  if (this.tail) return null;
  var val = this.tail.value;
  this.tail = this.tail.prev;
  if (this.tail) this.tail.next = null;
  else this.head = null;
  return val;
};
// Search method
LinkedList.prototype.search = function (searchValue) {
  var currentNode = this.head;
  // var counter = 0;
  while (currentNode) {
    // console.log(counter);
    // counter++;
    if (currentNode.value === searchValue) return currentNode.value;
    currentNode = currentNode.next;
  }
  return null;
};

// indexOf
LinkedList.prototype.indexOf = function (value) {
  var indexes = [];
  var currentIndex = 0; //starting point
  var currentNode = this.head;
  while (currentNode) {
    if (currentNode.value === value) {
      indexes.push(currentIndex);
    }
    currentNode = currentNode.next;
    currentIndex++;
  }
  return indexes;

  // we first define the first and last index
  // then if the value is there we wanna return
  // the index number
};

var myLL = new LinkedList();
myLL.addToTail(1);
myLL.addToTail(5);
myLL.addToTail(7);
myLL.addToTail(9);
myLL.addToTail(4);
myLL.addToTail(5);

console.log(myLL.indexOf(9));
console.log(myLL.indexOf(5));
