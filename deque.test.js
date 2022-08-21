const Deque = require("./deque");

let deque;

beforeEach(() => {
    deque = new Deque();
});

describe("appendleft", () => {
    it("Places value to the beginning of the deque", () => {
        deque.appendleft(10);
        expect(deque.first.val).toBe(10);
        expect(deque.last.val).toBe(10);
        deque.appendleft(20);
        expect(deque.first.val).toBe(20);
        expect(deque.last.val).toBe(10);
        deque.appendleft(30);
        expect(deque.first.val).toBe(30);
        expect(deque.last.val).toBe(10);
    });
});

describe("appendright", () => {
    it("Places value to the end of the deque", () => {
        deque.appendright(10);
        expect(deque.first.val).toBe(10);
        expect(deque.last.val).toBe(10);
        deque.appendright(20);
        expect(deque.first.val).toBe(10);
        expect(deque.last.val).toBe(20);
        deque.appendright(30);
        expect(deque.first.val).toBe(10);
        expect(deque.last.val).toBe(30);
    });
});

describe("popleft", () => {
    it("Removes item from the beginning of the deque", () => {
        deque.appendleft(10);
        deque.appendleft(20);
        deque.appendleft(30);
        let removed = deque.popleft();
        expect(removed).toBe(30);
        expect(deque.size).toBe(2);
        deque.popleft();
        deque.popleft();
        expect(deque.size).toBe(0);
    })
    it("Throws an error if the deque is empty", () => {
        expect(() => deque.popleft()).toThrow(Error);
    });
});

describe("popright", () => {
    it("Removes item from the end of the deque", () => {
        deque.appendleft(10);
        deque.appendleft(20);
        deque.appendleft(30);
        let removed = deque.popright();
        expect(removed).toBe(30);
        expect(deque.size).toBe(2);
        deque.popright();
        deque.popright();
        expect(deque.size).toBe(0);
    })
    it("Throws an error if the deque is empty", () => {
        expect(() => deque.popright()).toThrow(Error);
    });
});

describe("peekleft", () => {
    it("Returns the item on the left (the start) of the deque", () => {
        deque.appendleft(1);
        expect(deque.peekleft()).toBe(1);
        deque.appendleft(2);
        expect(deque.peekleft()).toBe(2);
    });
});

describe("peekright", () => {
    it("Returns the item on the right (the end) of the deque", () => {
        deque.appendleft(1);
        expect(deque.peekright()).toBe(1);
        deque.appendleft(2);
        expect(deque.peekright()).toBe(1);
    });
});

describe("isEmpty", () => {
    it("returns true for empty deque", () => {
        expect(deque.isEmpty()).toBe(true);
    });

    it("returns false for nonempty deque", () => {
        deque.appendleft(1);
        expect(deque.isEmpty()).toBe(false);
    });
});

