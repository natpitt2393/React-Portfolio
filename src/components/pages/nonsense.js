// maps copy and transform an array

let arr = [10, 9, 8, 7]
let newArrWithSquares = [...arr]

for (let i = 0; i < arr.length; i++) {
    newArrWithSquares[i] = newArrWithSquares[i] * newArrWithSquares[i]
}
console.log(newArrWithSquares)


let arrOfSqs = arr.map(function (currentIteration) {
    return currentIteration * currentIteration
})

let nomeros = [5, 7, 9, 1, 5];
let fakeJSX = `
    <>
        <ul>
            <li>{nomeros[0]}</li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    <>
`

let fakeJSX2 = `
<>
        <ul>
            {nomeros.map((num) => <li>{num}</li>)}
        </ul>
    <>

`

