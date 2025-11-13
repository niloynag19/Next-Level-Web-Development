

const arrayOfNum: number[] = [1, 3, 4];
const arrayOfStringUsingMap: string[] = arrayOfNum.map((num) => num.toString())

console.log(arrayOfStringUsingMap);


type AreaOfNum = {
    height: string,
    width: string,
}

type height = AreaOfNum["height"];

type Area<T> = {
    [key in keyof T]: T[key];
}

const area1 : Area < { height: string, width: number } >= {
    height: '50',
    width: 123,
}
type AreaOfString = {
    [key in "height" | "width"]: string
}