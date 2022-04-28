


//----------using ajax in php------------

<!DOCTYPE html>
<html>
<body>

<h2>The XMLHttpRequest Object</h2>
<h3>Start typing a name in the input field below:</h3>

<p>Suggestions: <span id="txtHint"></span></p> 
<p>First name: <input type="text" id="txt1" onkeyup="showHint(this.value)"></p>

<script>
function showHint(str) {
  if (str.length == 0) { 
    document.getElementById("txtHint").innerHTML = "";
    return;
  }
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("txtHint").innerHTML =
    this.responseText;
  }
  xhttp.open("GET", "gethint.php?q="+str);
  xhttp.send();   
}
</script>




//-----info to code-----
//First check if the input field is empty (str.length == 0). If so, clear the contents of the txtHint placeholder and exit the function.

//But if the input field is not empty, do the following:

//Create an XMLHttpRequest object
//Create the function to be executed when the server response is ready
//Send the request to a PHP file (gethint.php) on the server
//Notice that the q parameter is added gethint.php?q="+str.
//The str variable holds the contents of the input field


//------------------------using ajax in database -----------


<h2>The XMLHttpRequest Object</h2>

<form action=""> 
  <select name="customers" onchange="showCustomer(this.value)">
    <option value="">Select a customer:</option>
    <option value="ALFKI">Alfreds Futterkiste</option>
    <option value="NORTS ">North/South</option>
    <option value="WOLZA">Wolski Zajazd</option>
  </select>
</form>
<br>
<div id="txtHint">Customer info will be listed here...</div>

<script>
function showCustomer(str) {
  if (str == "") {
    document.getElementById("txtHint").innerHTML = "";
    return;
  }
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("txtHint").innerHTML = this.responseText;
  }
  xhttp.open("GET", "getcustomer.php?q="+str);
  xhttp.send();
}
</script>
</body>
</html>


