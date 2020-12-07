//edited by guj - dynamic hostname and port detection
//@date: 2015-10-23
var parser = location;

console.log("host: " + parser.host);
//console.log("hostname: " + parser.hostname);
//console.log("port: " + parser.port);
console.log("pathname:" + parser.pathname);
function loadGetVersionServletTitle () {
	var xmlHttp = null;
    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", parser.protocol + "//" + parser.host + parser.pathname + "GetVersionServlet", false );
    xmlHttp.send( null );
    document.title = "TradingAppTC "+xmlHttp.responseText;
}

function loadGetVersionServlet (htmlID) {
    var xmlHttp = null;

    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", parser.protocol + "//" + parser.host + parser.pathname + "GetVersionServlet", false );
    xmlHttp.send( null );
    document.getElementById(htmlID).innerHTML = xmlHttp.responseText;
}