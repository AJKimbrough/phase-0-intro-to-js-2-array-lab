// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    return cats.push(`${name}`)
}

function destructivelyPrependCat(name) {
    return cats.unshift(`${name}`)
}

function destructivelyRemoveLastCat(name) {
    return cats.pop()
}

function destructivelyRemoveFirstCat(name) {
    return cats.shift()
}

function appendCat(name) {
    const copyCats = [...cats, `${name}`]
    return copyCats

}

function prependCat(name) {
    const copyCats = [`${name}`, ...cats]
    return copyCats
}

function removeLastCat() {
    const copyCats = [...cats]
    copyCats.pop()
    return copyCats
}

function removeFirstCat() {
    const copyCats = [...cats]
    copyCats.shift()
    return copyCats
}