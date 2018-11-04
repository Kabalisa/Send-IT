
function ondis(){
var x = document.getElementsByTagName('input');
for(i=0; i<13; i++){	
 x[i].disabled=false;
}


}

function onenable(){
var x = document.getElementsByTagName('input');
for(i=0; i<13; i++){	
 x[i].disabled=true;
}

}

function onenable1(){
    var height =document.getElementById("disp").style.height= "100px";
	var cont = document.getElementById('hidee').innerHTML="<h1> Your Order Has Been Canceled </h1>";
	document.getElementById('hidee').style.color = "#256188"
}