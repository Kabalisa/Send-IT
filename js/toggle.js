function toggle1(){
	var y= document.getElementById("hi");
    var x= document.getElementById("ta");
    y.style.zIndex = "1";
    x.style.zIndex = "0";
}

function toggle2(){
	var y= document.getElementById("hi");
    var x= document.getElementById("ta");
    y.style.zIndex = "0";
    x.style.zIndex = "1";
}

function regular4(){
	document.getElementById("14").style.color = '#FF9800';
    document.getElementById("14").style.backgroundColor = '#256188';
}

function regular5(){
	document.getElementById("15").style.color = '#FF9800';
    document.getElementById("15").style.backgroundColor = '#256188';
}

function bac(){
	document.getElementById("14").style.color = '#256188';
	document.getElementById("15").style.color = '#256188';
	document.getElementById("14").style.backgroundColor = '#DDDDDD';
    document.getElementById("15").style.backgroundColor = '#DDDDDD';
}