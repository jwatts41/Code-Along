const snakeNames = require('snake-names')

let namePicked = snakeNames.random()

console.log('The name of the snake is', namePicked)

let femaleSnakeNames = snakeNames.female

let randomIndex = Math.floor(Math.random() * femaleSnakeNames.length)
console.log("A great female snake name is:", femaleSnakeNames[randomIndex])