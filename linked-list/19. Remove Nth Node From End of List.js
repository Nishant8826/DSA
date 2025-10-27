

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
        if (this.head == null) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = node;
        }
    }

    removeNthFromEnd(n) {
        /** BRUTE FORCE * */
        // let count = 0;
        // let current = this.head;
        // while (current != null) {
        //     count++;
        //     current = current.next;
        // };
        // if (count == n) {
        //     let newHead = this.head.next;
        //     return newHead;
        // }
        // let ress = count - n;
        // current = this.head;
        // while (current != null) {
        //     ress--;
        //     if (ress == 0) break;
        //     current = current.next;
        // }
        // current.next = current.next.next;


        //--------------OPTIMIZE----------------

        let fast = this.head;
        for (let i = 0; i < n; i++) {
            fast = fast.next
        }
        if (!fast) return this.head.next
        let slow = this.head;
        while (fast.next) {
            slow = slow.next;
            fast = fast.next;
        }
        slow.next = slow.next.next;

        //printing head after removing
        let temp = this.head;

        while (temp != null) {
            console.log(temp.data)
            temp = temp.next;
        }
    };


}

const ll = new LinkedList();

ll.addLast(1);
ll.addLast(2);
ll.addLast(4);
ll.addLast(6);
ll.addLast(8);
ll.addLast(9);


ll.removeNthFromEnd(5)
