 class Queue{
    constructor(){
        this.items=[];
    }

    enqueue(value){
        this.items.push(value)
    }

    dequeue(){
        if(this.isEmpty())
        {
            return undefined
        }
        return this.items.shift();
    }

    size(){
        return this.items.length;
    }

    peak(){
        if(this.isEmpty())
        {
            return undefined;
        }
        return this.items[0];
    }

    isEmpty(){
        return this.items.length===0;
    }
    print()
    {
        console.log(this.items.join("->"));
    }
}

const queue =new Queue ();
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
console.log(queue.peak());
queue.print()
queue.dequeue()
queue.print()