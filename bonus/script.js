let arrayOne = ["apple","dog","cat","food","kite","elephant","lunch","book","laptop"]
let arrayTwo = ["dog","goose","kite","meal","laptop"]

function compare(string) {
    arrayTwo.forEach(i => {
        if (i === string) {
            console.log(i)
        }
    })
}

arrayOne.forEach(i => compare(i))