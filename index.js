function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(wrapper){
    return function(adjective){
       return `You are ${wrapper}${adjective}${wrapper}!`
    }
}

// To call the function in one line
console.log(wrapAdjective('*')("a hard worker")); // Outputs: "You are *a hard worker*!"

// To call in two lines
let wrapWithStar = wrapAdjective('*');
console.log(wrapWithStar("a hard worker")); // Outputs: "You are *a hard worker*!"