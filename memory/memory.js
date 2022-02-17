    
let animals = [
    'bear',
    'corgi',
    'crab',
    'fish',
    'panda',
    'parrot',
    'pig',
    'rabbit',
    'rhinoceros',
    'shark',
    'snail',
    'turtle
]

let animalPairs = [...animals, ...animals]
let cards = shuffle(animalPairs)

function shuffle(array) {
    return array.sort(() => 0.5 - Math.random())
}
