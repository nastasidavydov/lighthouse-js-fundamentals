const sayHello  = function (name) {
  console.log("Hello, " + name);
}

const sayHelloInput = process.argv[2];
sayHello(sayHelloInput)