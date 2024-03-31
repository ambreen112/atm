#! /usr/bin/env node

import inquirer from "inquirer";


let myBalance = 11000; //Dolllar

let myPin = 5678;

let pinAnswer = await inquirer.prompt([{
    name:"userid",
    message:"enter your pin",
    type:"number"
}]);
    
if(pinAnswer.userid === myPin){
    console.log("correct pin code! ! !");

    let amountAnswer=await inquirer.prompt([{
        name: "operation",
        message:"please select operation",
        type:"list",
        choices:["withdraw","check balance","fastcash"]
    }])

    if(amountAnswer.operation==="withdraw"){
        let withdrawmoney=await inquirer.prompt([{
            name:"amount",
            message:"enter your amount",
            type:"number"
        }]);
    
        myBalance-=withdrawmoney.amount;
        console.log(`your remaning balance is:${myBalance}`);
    

   if(withdrawmoney.amount>myBalance){
    console.log("insufficient balance");
   
   };
    }

        if(amountAnswer.operation==="check balance"){
            console.log(`your remaining balance is: ${myBalance}` );
        
        }

     else if (amountAnswer.operation==="fast cash"){
        console.log("choose fast cash amount for with draw.");
       
       }
            let fastcashamount=await inquirer.prompt([{
                name:"fast cash",
                message:"select your amount",
                type:"list",
                choices:["500","1000","2000"]
            }]);
        
            myBalance-=fastcashamount.fastcash;

         if(fastcashamount.fastcash === "500"){
            console.log(`your remaining balance is:${myBalance}`);
         }
        
         if(fastcashamount.fastcash==="1000"){
            console.log(`your remaining balance is:${myBalance}`);
         }
         
         if(fastcashamount.fastcash ==="2000"){
            console.log(`your remaining balance is:${myBalance}`);
         }
        }
         
         else  {
            console.log("incorrect pin code");
         }
        

    
     
    





    
    
