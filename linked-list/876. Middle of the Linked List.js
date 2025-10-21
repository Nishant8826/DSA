

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

    addFirst(data) {
        const node = new Node(data);
        node.next = this.head;
        this.head = node;
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

ll.addFirst(1);
ll.addFirst(2);
ll.addFirst(4);
ll.addFirst(6);
ll.addFirst(8);
ll.addFirst(9);


ll.print()
