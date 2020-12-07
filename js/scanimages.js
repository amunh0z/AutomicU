function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}
function myFunction() {
 
    
       
    var urlxx = 'http://52.59.172.11:8090/analytics/api/v1/events/';
     var urLL = urlxx + urlx
 var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
         if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("POST", urLL, true); // true for asynchronous 
    xmlHttp.send(null);

        wait(8000);
      alert("Thank you! Payment was Successful!");
}