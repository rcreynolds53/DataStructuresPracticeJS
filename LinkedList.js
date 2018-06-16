function Node(data, next) {
    this.data = data;
    this.next = next;
}

var n1 = new Node("Hello", null);
var n2 = new Node("21", n1);
var n3 = new Node("Green", n2);
var n4 = new Node("Blue", n3);
var n5 = new Node("Black", n4);
// ------slow solution 

// var head = n3;
// var count = 1;
// do {
//     count++;
//     head = head.next;
// }
// while (head.next !== null)
// count;
// head = n3;
// var middle = count / 2;
// count = 1;
// do {
//     count++;
//     head = head.next;
// }
// while (count < middle)

// head;

//faster solutionß
var head = n5;
var middlePointer = head;
var fastPointer = head;

do {
    fastPointer = fastPointer.next.next;
    middlePointer = middlePointer.next;
}
while (middlePointer.next !== null && fastPointer.next !== null)
middlePointer;