function IncrementByOne(arr:number[]){
    return arr.map(a=>a+1)
}

var arr: number[]
arr =[1,2,3,4,5,6]
console.log("Original array "+ arr)
arr = IncrementByOne(arr)
console.log("incremented array "+ arr)