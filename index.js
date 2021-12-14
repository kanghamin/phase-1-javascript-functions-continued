function saturdayFun(arg) {
    if (arg) {
        return `This Saturday, I want to ${arg}!`
    } else {
        return "This Saturday, I want to roller-skate!"
    }
}

function mondayWork(arg) {
    if (arg) {
        return `This Monday, I will ${arg}.`
    } else {
        return "This Monday, I will go to the office."
    }
}

function wrapAdjective(symbol) {
   return function result(word) {
        if (symbol === "*") {
            return `You are ${symbol}${word}${symbol}!`
        } else {
            return `You are ${symbol}${word}${symbol}!`
        }
    }
}

