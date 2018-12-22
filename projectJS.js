document.getElementById("output").style.visibility = "hidden";
document.getElementById("weight").addEventListener("input",function(){document.getElementById("inputnum").placeholder = "Enter in pounds";})
document.getElementById("length").addEventListener("input",function(){document.getElementById("inputnum").placeholder = "Enter in miles";})
document.getElementById("inputnum").addEventListener("input", 
	function(e) 
	{
		
		var weight=document.getElementById("weight").checked;
		var length=document.getElementById("length").checked;
		var i;
		document.getElementById("output").style.visibility = "visible";
		
			
		if (weight==true){
			
			let mi = e.target.value;
			document.getElementById("d").innerHTML ="Centegram:" ;
			document.getElementById("cm").innerHTML = mi*160934;
			document.getElementById("e").innerHTML ="Kilogram:" ;
			document.getElementById("km").innerHTML = mi*1.60934;
			document.getElementById("o").innerHTML ="Gram:" ;
			document.getElementById("m").innerHTML = mi * 1609.34;
		}
		
		if (length==true){
			
			let mi = e.target.value;
			document.getElementById("d").innerHTML ="Centemeter:" ;
			document.getElementById("cm").innerHTML = mi*160934;
			document.getElementById("e").innerHTML ="Kilometer:" ;
			document.getElementById("km").innerHTML = mi*1.60934;
			document.getElementById("o").innerHTML ="Meter:" ;
			document.getElementById("m").innerHTML = mi * 1609.34;
			
		}
		if (weight==false && length==false){
			document.getElementById("d").innerHTML ="Select Weight or Length" ;
			
			document.getElementById("e").innerHTML ="Select Weight or Length" ;
			
			document.getElementById("o").innerHTML ="Meter:" ;
			
		}
		
	}
);
