//Node for the deque

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

//Double ended queue - could add and remove from both ends.

class Deque {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    //add to the beginning of the queue
    appendleft(val) {
        let newNode = new Node(val);

        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let curr = this.first;
            this.first = newNode;
            this.first.next = curr;
        }
        this.size++;
    }

    //add to the end of the queue
    appendright(val) {
        let newNode = new Node(val);

        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size++
    }

    //remove & return the item from the beginning
    popleft() {
        if (!this.first) throw new Error("The list is empty, nothing to remove.");

        let curr = this.first;

        if (this.first == this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return curr.val;
    }

    //remove & return the item from the end
    popright() {
        if (!this.first) throw new Error("The list is empty, nothing to remove.");

        let curr = this.first;

        if (this.first == this.last) {
            this.first = null;
        }
        this.size--;
        return curr.val
    }

    //return the item from the beginning (don't remove it just peek)
    peekleft() {
        return this.first.val;
    }

    //return item from end (don't remove it just peek)
    peekright() {
        return this.last.val;
    }

    //Check is there's any items left in the queue
    isEmpty() {
        return this.size === 0;
    }

}

module.exports = Deque;