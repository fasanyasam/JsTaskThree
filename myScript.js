 //Accepts user input a sample value indicated 
 let userInput = prompt("Enter any number", "30");
        
        let userNo = parseInt(userInput);
        let check = [];
        //A for loop to iterate over the number from 1 to the figure input
        for (let i = 1; i < (userNo+1); i++) {
           //check the division of the numbers above against 2,3,5 and prints an output 
           if (i == 2) {
                let a = "yu";
                check.push(a)
            }else if (i == 3) {
                let a = "gi";
                check.push(a);
            }else if (i == 5) {
                let a = "oh";
                check.push(a);
            }else if (i%2 == 0 && i%3==0 && i%5==0) {
                let a = "yu-gi-oh"
                check.push(a);
            }else if (i%2 == 0 && i%5==0) {
                let a = "yu-oh"
                check.push(a);
            }else if (i%3 == 0 && i%5==0) {
                let a = "gi-oh"
                check.push(a);
            }else if (i%2 == 0 && i%3==0) {
                let a = "yu-gi"
                check.push(a);
            }else{
                check.push(i);
            }
        }
        console.log(check);
        

     
