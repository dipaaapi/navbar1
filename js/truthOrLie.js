function game() {
	const sub 	= document.getElementById("submit");
	const text	= document.getElementById("display");
	if (text == "blue" || "BLUE") {
		document.getElementById("ans").innerHTML = "true my favorite color is BLUE";
	}else {
		document.getElementById("ans").innerHTML = "lie my favorite color is RED";
	}
}