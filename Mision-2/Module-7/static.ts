
class Counter {
    static count: number = 0;

    increment() {
        return Counter.count += 1;
    }

    decrement() {
        return Counter.count -=1;
    }
}


const value = new Counter()
console.log(value.increment())
console.log(value.increment())
console.log(value.increment())
console.log(value.increment())

const value2 =new Counter();
console.log(value.decrement())