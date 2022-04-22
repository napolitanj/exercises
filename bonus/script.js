let arrayOne = ["apple","dog","cat","food","kite","elephant","lunch","book","laptop"]
let arrayTwo = ["dog","goose","kite","meal","laptop"]

arrayOne.forEach(i => compare(i))

function compare(string) {
    arrayTwo.forEach(i => {
        if (i === string) {
            console.log(i)
        }
    })
}