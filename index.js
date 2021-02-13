

const saturdayFun = (parameter = 'roller-skate') => {
    return "This Saturday, I want to " + parameter + "!"
}

const mondayWork = (parameter = 'go to the office') => { 
    return `This Monday, I will ${parameter}.`
}

function wrapAdjective (flair = '*'){
    
    function inner (param = 'special'){
        return `You are ${flair}${param}${flair}!`
    }
    return inner
}

const Calculator = {
    add: function (num1, num2){return (num1 + num2)},
    subtract: function (num1, num2){return (num1 - num2)},
    multiply: function (num1, num2){return (num1 * num2)},
    divide: function (num1, num2){return (num1 / num2)}
}

function actionApplyer(int, array) {
    if (array.length === 0){
        return int
    } else {
        return ((int * array[0])+(array[1]))%(array[2])
    }
}