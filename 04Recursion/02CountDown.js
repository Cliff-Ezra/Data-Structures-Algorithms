Recursive 
function countDown(num){
    if(num <= 0) {
        console.log("All done!");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}
countDown2(5);


//Iterative
// function countDown2(num) {
//     for (let i = num; i > 0; i--) {
//         console.log(i);
//     }
//     console.log('All done!');
// }
// countDown2(5);