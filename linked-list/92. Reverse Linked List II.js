

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addAtLast(data) {
        let node = new Node(data);
        if (!this.head) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
    }

    print() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }


    reverse() {
        let current = this.head;
        let prev = null;
        while (current) {
            let temp = current.next;
            current.next = prev;
            prev = current;
            current = temp;
        }
        console.log(prev);
    }

    reverse2(left, right) {
        
    }

}

const ll = new LinkedList();

ll.addAtLast(1);
ll.addAtLast(2);
ll.addAtLast(4);
ll.addAtLast(6);
ll.addAtLast(8);
ll.addAtLast(10);

// ll.print()
// ll.reverse()
ll.reverse2(2, 4)
