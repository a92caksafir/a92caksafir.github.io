console.log('Hello! bosku');
const userAction = async () => {
  const response = await fetch(
    'https://a92caksafir.000webhostapp.com/mydataapi.php?action=read&table=movies&id=8',
    { mode: 'no-cors' }
  );
  const myJson = await response.json(); //extract JSON from the http response
  console.log(myJson);
};
//userAction();
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = callbackFunction(xmlhttp);
xmlhttp.open('GET', 'https://reqbin.com/echo/get/json', false);
xmlhttp.setRequestHeader('Content-Type', 'application/json');
//xmlhttp.setRequestHeader('Authorization', 'Basic ' + window.btoa('apiusername:apiuserpassword')); //in prod, you should encrypt user name and password and provide encrypted keys here instead
xmlhttp.onreadystatechange = callbackFunction(xmlhttp);
xmlhttp.send();
let lsResult = xmlhttp.responseText;
console.log(lsResult);
function callbackFunction(xmlhttp) {
  console.log(xmlhttp.responseText);
}
