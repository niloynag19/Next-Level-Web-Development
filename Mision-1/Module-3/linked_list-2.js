class Node{
    constructor(value)
    {
        this.value=value;
        this.next=null;
    }
}


class LinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }


    append(value){

        const newNode=new Node(value);
        if(this.head===null)
        {
            this.head=newNode;
            this.tail=newNode;
        }
        else
        {
            this.tail.next=newNode;
            this.tail=newNode;
        }
        this.length++;
    }

    prepend(value){
        const temp=new Node (value);
        if(this.head===null){
            this.head=temp;
            this.tail=temp;
        }
        temp.next=this.head;
        this.head=temp
        this.length++;
    }

    insert(idx,value)
    {
        const newNode=new Node(value);
        if(idx<0 || idx>this.length)
        {
            console.error("index out of bound")
            return undefined;
        }
        if(idx==0)
        {
           return  this.prepend(value);
        }

        if(idx==this.length)
        {
            return this.append(value);
        }

        let temp=this.head;
        for(let i=0;i<idx-1;i++)
        {
            temp=temp.next;
        }
        newNode.next=temp.next;
        temp.next=newNode;
        this.length++;
        
    }

    remove(idx)
    {
        if(idx<0 || idx>=this.length)
        {
            console.error("Index out of bound");
            return undefined
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

        if(idx===this.length-1)
        {
            this.tail=temp;
        }
        this.length--;
    }
    print(){
        let temp=this.head;
        while(temp!=null)
        {
            console.log(temp.value)
            temp=temp.next;
        }
    }
}

const value=new LinkedList();
value.append(10)
value.append(20)
value.append(30)
value.append(40)
// value.prepend(100);
value.insert(3,200);
value.print();
value.remove(1);
value.print()