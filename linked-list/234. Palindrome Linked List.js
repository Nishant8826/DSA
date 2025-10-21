

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

    isPal() {
        let str = '';
        let rev = '';
        let current = this.head;
        while (current) {
            str = str + current.data;
            rev = current.data + rev;
            current = current.next;
        }
        console.log(rev === str)
        return;
    }

}

const ll = new LinkedList();

ll.addFirst(1);
ll.addFirst(2);
ll.addFirst(2);
ll.addFirst(1);


ll.print()

ll.isPal();