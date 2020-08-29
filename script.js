const a = document.querySelector("#qty");
var b = document.querySelector("#rate");
const c = document.querySelector("#price");

b.addEventListener("keyup", alt);
function alt(){
  c.value = b.value * a.value;
  // alert("good");
}
function test(){
  a.value="";
  b.value="";
  c.value="";
}

var myName = document.getElementById("name");
var qty = document.getElementById("qty");
var rate = document.getElementById("rate");
var price = document.getElementById("price");
var table = document.getElementById("myTableData");




function addRow() {
    
  var q = qty.value;
  var r = rate.value;
    if (q == ""){
      alert("Please Enter Valid Input");
      return false;
    }
  
    else if (r == ""){
      alert("Please Enter Valid Input");
      return false;
    }
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    

  row.insertCell(0).innerHTML= rowCount;  
  row.insertCell(1).innerHTML= myName.value;
  var x = row.insertCell(2).innerHTML= qty.value;
  var y = row.insertCell(3).innerHTML= rate.value;
  row.insertCell(4).innerHTML= x * y;
  row.insertCell(5).innerHTML= '<i class="fa fa-times" type="icon" value = "Delete" onClick="Javacsript:deleteRow(this)" aria-hidden="true"></i>';

  console.log(x);
//   var qtytotal;
//   var z = x.value;
//   for(z=0; z < x.length; z++){
//     qtytotal+=x[z],qtytotal=qtytotal+z;
//   }
//   console.log(qtytotal);

  //To Clear Data
  myName="";
  qty.value="";
  rate.value="";
  price.value="";

}


function deleteRow(obj) {
    
  var index = obj.parentNode.parentNode.rowIndex;
  var table = document.getElementById("myTableData");
  table.deleteRow(index);
  
}
var secwindow;
function closebut(){
  document.getElementById("modal").style.display = "none";
}
