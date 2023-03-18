function s3()
{
	var image1 = document.getElementById('a1');
	var image2 = document.getElementById('b1');
	var image3 = document.getElementById('c1');
	var image4 = document.getElementById('d1');
	var image5 = document.getElementById('e1');
	var image7 = document.getElementById('f1');
	var image6 = document.getElementById('g1');
	var image8 = document.getElementById('h1');
	var image9 = document.getElementById('i1');
	var imaget = document.getElementById('j1');
if(image1.src.match("green") && image3.src.match("green") &&  image9.src.match("green") && image2.src.match("red") && image4.src.match("red") && imaget.src.match("red"))
{
	document.getElementById("con").style.display="none";
	if (image5.src.match("green") && image6.src.match("green"))
		document.getElementById("off").src="on.jpg";
	else if (image7.src.match("green") && image8.src.match("green"))
		document.getElementById("off").src="on.jpg";
	else if (image6.src.match("green") && image7.src.match("green") && image8.src.match("green"))
		document.getElementById("off").src="on.jpg";
	else if (image6.src.match("green") && image7.src.match("green"))
		document.getElementById("off").src="on.jpg";
	else if (image5.src.match("green") && image8.src.match("green"))
		document.getElementById("off").src="on.jpg";
	else if (image5.src.match("green") && image7.src.match("green") && image8.src.match("green"))
		document.getElementById("off").src="on.jpg";
	else if (image6.src.match("green") && image5.src.match("green") && image8.src.match("green"))
		document.getElementById("off").src="on.jpg";
	else if (image6.src.match("green") && image7.src.match("green") && image5.src.match("green"))
		document.getElementById("off").src="on.jpg";
	else if (image5.src.match("green") && image6.src.match("green") && image7.src.match("green") && image8.src.match("green"))
		document.getElementById("off").src="on.jpg";
	else
		document.getElementById("off").src="off.jpg";
}
else if (image1.src.match("red") || image3.src.match("red") ||  image9.src.match("red") || image2.src.match("green") || image4.src.match("green") || imaget.src.match("green")){
	document.getElementById("con").style.display="block";
	document.getElementById("off").src="off.jpg";
}
}
function a() {
    var image = document.getElementById('a1');
    if (image.src.match("red")) {
        image.src = "green.jpg";
	
    } else {
        image.src = "red.jpg";
    }
s3();
}
function b() {
    var image = document.getElementById('b1');
    if (image.src.match("red")) {
        image.src = "green.jpg";
	
    } else {
        image.src = "red.jpg";
    }
s3();
}
function c() {
    var image = document.getElementById('c1');
    if (image.src.match("red")) {
        image.src = "green.jpg";
	
    } else {
        image.src = "red.jpg";
    }
s3();
}
function d() {
    var image = document.getElementById('d1');
    if (image.src.match("red")) {
        image.src = "green.jpg";
	
    } else {
        image.src = "red.jpg";
    }
s3();
}
function e() {
    var image = document.getElementById('e1');
    if (image.src.match("red")) {
        image.src = "green.jpg";
	
    } else {
        image.src = "red.jpg";
    }
s3();
}
function f() {
    var image = document.getElementById('f1');
    if (image.src.match("red")) {
        image.src = "green.jpg";
	
    } else {
        image.src = "red.jpg";
    }
s3();
}
function g() {
    var image = document.getElementById('g1');
    if (image.src.match("red")) {
        image.src = "green.jpg";
	
    } else {
        image.src = "red.jpg";
    }
s3();
}
function h() {
    var image = document.getElementById('h1');
    if (image.src.match("red")) {
        image.src = "green.jpg";
	
    } else {
        image.src = "red.jpg";
    }
s3();
}
function i() {
    var image = document.getElementById('i1');
    if (image.src.match("red")) {
        image.src = "green.jpg";
	
    } else {
        image.src = "red.jpg";
    }
s3();
}
function j() {
    var image = document.getElementById('j1');
    if (image.src.match("red")) {
        image.src = "green.jpg";
    } else {
        image.src = "red.jpg";
    }
s3();
}