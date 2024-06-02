// Immediately Invoked Function Expressions {IIFE}

(function IIFE(){
    //do something which we don't want to be effected by the global/window context/scope 
    const viewport = 'sw'
    console.log(`${viewport}`)
})(); // always add semi-colon : ; to mark end of IIFE
((num1)=>{
    console.log(num1++);
})(7);