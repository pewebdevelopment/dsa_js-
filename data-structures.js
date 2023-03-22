const ages = [12, false, true, "Zenith"];

ages[0] // O(1)
ages.push(3); // O(1)
ages.shift()

// fixed size
// same data type

function printStatements(first, second, third) {
    console.log(first);
    console.log(second)
    console.log(third)
} // O(1)

printStatements("Hi", "Zenith", 'Athang')

// Big-O -- worst case
// Big-omega -- Best case
// Big-thetha -- Average case

// Linked List 

// 1. value 2. pointer to next value

// __

class LinkedList {
    head;
    tail;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const newNode = { value: value, next: null };

        if(!this.head) {
            this.head = newNode;
        }

        if(this.tail) {
            this.tail.next = newNode;
        }
        this.tail = newNode;
    }
    prepend(value) {
        const newNode = { value: value, next: null };

        if(this.head) {
            newNode.next = this.head;
        }
        this.head = newNode;

        if(!this.tail) {
            this.tail = newNode;
        }
    }
    toArray() {
        let currentNode = this.head;
        let result = []
        while(currentNode) {
            result.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return result;
    }
}

const linkedList1 = new LinkedList();

linkedList1.append("First append");
linkedList1.append("second append");
linkedList1.prepend("first prepend")

console.log(linkedList1.toArray())