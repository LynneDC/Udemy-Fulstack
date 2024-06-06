var output = [];
var count = 1;

function add(){
    var value;
    
    if (count % 3 === 0 && count % 5 === 0) {
        value = "FizzBuzz";
    } else if (count % 3 === 0) {
        value = "Fizz";
    } else if (count % 5 === 0) {
        value = "Buzz";
    } else {
        value = count;
    }

    output.push(value);    
    console.log(output);   
    count++;               
}
add(); 
add();
add(); 
add();
add(); 
add();
add(); 
add();
add(); 
add();
add(); 
add();
add(); 
add();
add(); 
add();
add(); 
add();
add(); 
add();
add(); 
add();
add(); 
add();
add(); 
add();
add(); 
add();
add(); 
add();
add(); 
add();
add(); 
add();
add(); 
add();

