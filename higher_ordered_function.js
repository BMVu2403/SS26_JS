const greet = (name, callback) => {
    callback();
  
    console.log(`Hello ${name}`);
  };
  
  const sayHello = () => {
    console.log("Say hello");
  };
  
  const readNumber = () => {
    for (let i = 0; i <= 10; i++) {
      console.log(i);
    }
  };
  
  const renderNumber = (callback) => {
    callback();
  };
  
  renderNumber(readNumber);