function myfunction() {
	document.getElementById('demo').innerHTML = "Paragraph changed"
}

function greet() {

    var time = new Date().getHours();
    var greeting;
    if (time < 12){
    	greeting = "Good Morning!" ;
    }
    else if (time < 18) {
    	greeting = "Good Evening!"
    }
    else {
    	greeting = "Good Night!"
    }
    document.getElementById("greet").innerHTML = greeting
}

function week() {
	var day = new Date().getDay();
	var weekend;
	switch (day) {
		case 4:
		case 5:
		weekend = "Soon there is weekend."
		break;
		case 6:
		case 0:
		weekend = "It is weekend."
		break;
		default:
		weekend = "Weekend is far...."
	}
	document.getElementById("week").innerHTML = weekend
}

function car_array() {
	var cars = ["Audi", "BMW", "Fiat"];
	var display_array = "";
	var i;
	for (i = 0; i < cars.length; i++) {
		display_array += cars[i] + "<br>"
	}
	document.getElementById("car").innerHTML = display_array;
}
function car_while() {
	var cars = ["Audi", "BMW", "Fiat"];
	var text_car = "";
	var i = 0;
	while (cars[i]) {
		text_car += cars[i] + "<br>";
		i++;
	}
	document.getElementById('car_while').innerHTML = text_car;
}

function error(){
	var x, message;
	message = document.getElementById("output_err");
	x = document.getElementById("input_no").value;
	try {
		if (x == "") { throw "is Empty."}
		if (isNaN(x)) { throw "is not a Number."}
		x = Number(x);
	    if (x > 10) { throw "is too High."}
	    if (x < 5) { throw "is too Low."}
	}
    catch(err) {
    	message.innerHTML = "Input" + err;
    }
    finally {
    	document.getElementById("input_no").value = "";
    }
}