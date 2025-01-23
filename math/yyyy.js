class Node {
    constructor(data) {
        // 노드 값
        this.data = data;
        // 다음 노드에 대한 참조를 저장
        this.next = null;
    }
}

class Queue {
    constructor() {
        // 큐의 첫 번째 노드
        this.head = null;
        // 큐의 마지막 노드
        this.tail = null;
        // 큐의 길이
        this.size = 0;
    }

    enqueue(data) {
        // 새로운 노드 생성
        const newNode = new Node(data);

        // 큐가 비어있을 경우 head와 tail을 모두 새 노드로 설정
        // 그렇지 않으면 현재 tail의 next 속성을 새 노드로 설정하고 tail이 새 노드를 가리키도록 업데이트
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.size++;
    }

    dequeue() {
        // 큐가 비어있을 경우 null 반환
        // 그렇지 않으면 head를 큐의 두 번째 요소로 설정하고 제거된 노드의 data를 반환
        if (!this.head) {
            return null;
        }

        const removeNode = this.head;
        this.head = this.head.next;
        if (!this.head) {
            this.tail = null;
        }

        this.size--;

        return removeNode.data;
    }
    // 큐가 비어있을 경우 true 반환, 그렇지 않으면 false 반환 
    isEmpty() {
        return this.size === 0;
    }
}

const Q = new Queue();
Q.enqueue(1);
Q.enqueue(2);
Q.enqueue(3);
Q.enqueue(4);
console.log(Q);