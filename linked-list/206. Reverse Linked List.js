

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

    push(data) {
        const node = new Node(data);
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

    reverseList() {
        let current = this.head;
        let prev = null;
        while (current) {
            let temp = current.next;
            current.next = prev;
            prev = current;
            current = temp;
        }
        return prev;
    }

    print() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const ll = new LinkedList();

ll.push(2);
ll.push(4);
ll.push(6);
ll.push(7);
ll.push(9);
ll.push(10);

ll.print();

ll.reverseList();

