const greet = (name) => {
    console.log(`Hello${name}`);

    callback();
}

const sayHello = () => {
    console.log("Say hello");
};

const readNumber = () => {
    for(let i=0; i<=10; i++){
        console.log(i);
    }
}

const renderNumber = (callBack) => {
    callBack();
};

renderNumber(readNumber);