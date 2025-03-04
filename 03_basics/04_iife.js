// Immediatel Invoked Function Expressions (IIFE)


// Named iffe
(function chai() {

    console.log("DB Connected");
})();

// 
(() => {
    console.log(`DB Connected Two`);
})();


((user) => {
    console.log(`DB Connected Three  ${user}`);
})("mohan");

// An IIFE (Immediately Invoked Function Expression) is a JavaScript function 
// that runs as soon as it is defined. It helps in creating a private scope to avoid polluting the global scope.