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

    addLast(data) {
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

    addFirst(data) {
        let node = new Node(data);
        if (!this.head) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
    }

    print() {
        let current = this.head
        while (current) {
            console.log(current.next)
            current = current.next
        }
    }

    size() {
        let count = 0;
        let current = this.head;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }

    addAtIndex(index, data) {
        if (index < 0 || index > this.size()) {
            console.log('Invalid index');
            return;
        }

        const node = new Node(data);
        if (index == 0) {
            node.next = this.head;
            this.head = node;
            return;
        }

        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next
        }

        node.next = current.next;
        current.next = node;

    }

    removeLast() {
        let current = this.head;
        while (current.next.next) {
            current = current.next;
        }
        current.next = null;
    }

    removeAtIndex(index) {
        if (index < 0 || index > this.size()) {
            console.log('Invalid index');
            return;
        }
        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        current.next = current.next.next;
    }


}

const ll = new LinkedList();
ll.addLast(10);
ll.addLast(15);
ll.addLast(40);
ll.addLast(20);

ll.addFirst(5);
ll.addFirst(3);

ll.addAtIndex(2, 555)

ll.removeLast()  // remove 20
ll.removeAtIndex(3); // remove 10

ll.print();
