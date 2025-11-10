class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(value) {

        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    remove(idx)
    {
        if(idx<0 || idx>=this.length)
        {
            console.log("Index out of bound")
            return
        }

        if(idx==0)
        {
            this.head=this.head.next;
            this.length--;
            if(this.length==0)
            {
                this.tail=null;
                return;
            }
        }

        let temp=this.head;
        for(let i=0;i<idx-1;i++)
        {
            temp=temp.next;
        }
        const deleteNode=temp.next;
        temp.next=deleteNode.next;
        if(idx==this.length-1)
        {
            this.tail=temp;
        }
        this.length--;
    }

    print(){
        let temp=this.head;
        while(temp!=null)
        {
            console.log(temp.value);
            temp=temp.next;
        }
    }
}

const list=new LinkedList()
list.append(10)
list.append(20)
list.append(30)
list.append(40)
list.append(50)
list.print()
list.remove(3);
list.print()

