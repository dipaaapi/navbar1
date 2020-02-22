<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Calculator</title>
	<style>
		body {
			background: skyblue;
		}
		* {
			box-sizing: border-box;
			-webkit-box-sizing: border-box;
			-moz-box-sizing: border-box;
		}
		.wrap {
			width: 400px;
			margin: auto;
			height: auto;
			background: black;
			padding: 15px;
			border-radius: 5px;
		}
		input[type=text] {
			width: 100%;
			padding: 10px;
			font-size: 22px;
			font-weight: bold;
			margin-top: 20px;
			border-radius: 5px;
		}
		input[type=button] {
			width: 89px;
			padding: 10px;
			font-size: 22px;
			font-weight: bold;
			border-radius: 5px;
			cursor: pointer;
		}
		input[type=button]:hover {
			box-shadow: 0px 0px 7px white;
			background: skyblue;
			border: 2px solid skyblue;
			transition: .5s;
		}
		h1 {
			text-align: center;
			text-transform: uppercase;
			color: black;
		}
		h1:hover {
			text-shadow: 0px 0px 7px white;
			color: white;
			transition: .5s;
		}
		button {
			padding: 5px;
			background-color: white;
			color: black;
			border-radius: 5px;
			border: 0;
			cursor: pointer;
			margin: 0 2vw;
			font-size: 3rem;
		    text-transform: uppercase;
    		font-family: impact, san-serif;
		}
		button:hover {
			box-shadow: 0px 0px 7px white;
			color: white;
			transition: .5s;
		}
		button[name=submit]:hover {
			background-color: skyblue;
		}
		.btn {
			text-align: center;
		}
		label {
			color: white;
			font-size: 3rem;
		}
		#ask, #ans {
			color: white;
			text-align: center;
		}
	</style>
</head>
<body>
	<h1>Truth or Lie</h1>
	<div class="wrap">
		<form action="" name="form">
			<input type="text" name="display" id="display">
			<p id="ask">Is your favorite color is blue or red?</p>
			<br><br>
			<div class="btn">
				<button name="submit" id="submit" value="submit" onclick="game()">SUBMIT</button>
			</div>
		</form>
	</div>
	<p id="ans"></p>
	<script type="text/javascript" src="js/truthOrLie.js"></script>
</body>
</html>