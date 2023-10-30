function foo(){
    const getApi=fetch("https://v6.exchangerate-api.com/v6/1857298dfd1ec03d86310ce2/latest/USD"); //fetch datafrom api and it return as promise
    getApi.then((data)=>data.json()).then((data1)=> {                                  //JSON used to convert readable stream to object
   
   
        let conversion=data1.conversion_rates;                                        //get needed object
         let countryName=Object.keys(conversion);                                     //get keys or countries seperately
      
       let countIp = parseFloat(document.getElementsByClassName("inputs")[0].value);  //get value of input currency value
       let ex1 = document.getElementsByClassName("countryName")[0].value;             //get value of input from which country amount need to change
      let ex2 = document.getElementsByClassName("exchangeName")[0].value;             //get value of exchange currency country code 
            
             ex1= ex1.toUpperCase();                                                  //suppose input value is lowercase here to convert it as uppercase
             ex2= ex2.toUpperCase();
            
            

             if (countryName.includes(ex1)&&countryName.includes(ex2)){               //checking countryName contains the specified string and if true it will go to the following code
            
               if((ex2)!=("USD")){                                                    //checking source country to code is usd because for usd we can easliy convert if it is not usd need to convert them
                  
                  var ipvalue= conversion[ex1];                                       // conversion takes eg: USD--> BBD 
              
                  var opvalue= conversion[ex2];                                       //conversion takes eg: USD--> INR
                
                  var optforOneUnit = ipvalue*opvalue;                                

                  var dispOp=optforOneUnit*countIp;                                   //convert the amount here
                  document.getElementById("result").innerHTML=(`Converted amount:  ${dispOp}`);}    //result to be displayed
               
               else {
                   var opvalue= conversion[ex2];                                      // DIRECT USD--> INR
                  var optforOneUnit = opvalue;
                  var dispOp=optforOneUnit*countIp;                                   //straight conversion
                  document.getElementById("result").innerHTML=(`Converted amount:  ${dispOp}`);    //display result
             }}

            else{
               if(countryName.includes(ex2)){                                          //if wrong details gave as input it will show alert
               alert(`please enter valid source currencies details`);}                 
               else if(countryName.includes(ex1)){
                  alert(`please enter valid target currencies details`);}
                  
                  else{
                     alert(`please enter valid currencies details in source and target`);}
                     
            
                  } })
 
      .catch((error) => {
           document.getElementById("result").innerHTML=("Error fetching exchange rate data:", error);
    
    
   })
}



















































