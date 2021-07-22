用stack做queue
要两个stack

用queue做stack的话
就一个queue
就是在 implement stack的push function 的时候

push(element) {
    let rotations = this.size();
    this.queue.enqueue(element);
    while(rotations > 0){
      this.queue.enqueue(this.queue.dequeue());
      rotations--;
    }
  }

  要while这里头加到尾来保证顺序。


  class Stack {
    constructor() {
     this.queue = new Queue();
    }
    push(element) {
      let rotations = this.size();
      this.queue.enqueue(element);
      while(rotations > 0){
        this.queue.enqueue(this.queue.dequeue());
        rotations--;
      }
    }
    peek() { 
       return this.queue.peek();
    }
    pop() { 
       return this.queue.dequeue();
    }
    size() { 
       return this.queue.size();
    }
  }

