const global = 'true'
{
    const firstScope = 'true'
    console.log(`first scope global ${global}`)
    console.log(`first scope firstScope ${firstScope}`)
    
    console.log(`first scope secondScope ${secondScope}`)
    {
        var secondScope = 'true'
        console.log(`second scope global ${global}`)
        console.log(`second scope firstScope ${firstScope}`)
        console.log(`second scope secondScope ${secondScope}`)   
    }
}
console.log(`global ${global}`)

console.log(`global second${secondScope}`)// var is global variable

//console.log(`global ${firstScope}`) Error variable not defined
// console.log(`global ${secondScope}`)

// function first (){
//     const funScope = 'function scope'
//     console.log(funScope + secondFunScope)
//     function second (){
//         const secondFunScope = funScope + 123
//         console.log(secondFunScope)
//     }
// }
// first()
// // console.log(`global ${funScope}`)
// firstCall()
// function firstCall(){
//     return
// }
// secondCall() 
// const secondCall = function(){
//     return
// }