//*****************************************SEA IMAGE CONTROLLER******************************************//
for (var i=0; i<document.getElementsByClassName('thumb').length;i++){
	document.getElementsByClassName('thumb')[i].addEventListener('mouseover', thumbRollover);
}

document.getElementsByClassName('thumb')[0].classList.add('rollover');
var currentlyHighlighted = document.getElementsByClassName('thumb')[0];

function thumbClicked(thumb){
	console.log(thumb.id);
	thumb.classList.add('clicked');
	document.getElementById('mainImage').src = thumb.id+'.jpg';
}

//*****************************************LAND IMAGE CONTROLLER*****************************************//

for (var i=0; i<document.getElementsByClassName('thumb2').length;i++){
	document.getElementsByClassName('thumb2')[i].addEventListener('mouseover', thumbRollover);
}

document.getElementsByClassName('thumb2')[0].classList.add('rollover');
var currentlyHighlighted = document.getElementsByClassName('thumb2')[0];

function thumbClicked2(thumb2){
	console.log(thumb2.id);
	thumb2.classList.add('clicked');
	document.getElementById('mainImage2').src = thumb2.id+'.jpg';
}

//*****************************************SKY IMAGE CONTROLLER******************************************//

for (var i=0; i<document.getElementsByClassName('thumb3').length;i++){
	document.getElementsByClassName('thumb3')[i].addEventListener('mouseover', thumbRollover);
}

document.getElementsByClassName('thumb3')[0].classList.add('rollover');
var currentlyHighlighted = document.getElementsByClassName('thumb3')[0];

function thumbClicked3(thumb3){
	console.log(thumb3.id);
	thumb3.classList.add('clicked');
	document.getElementById('mainImage3').src = thumb3.id+'.jpg';
}

//*****************************************WHALE CONTROLLER******************************************//

var strobe=setInterval("moveWhale()", 50);
var whaleX = -500;
var whaleY = 100;
var yChange = 2;

function moveWhale(){
	if (whaleY>530){
		yChange = -2;
	} else if (whaleY<100){
		yChange = 2;
	}

	if (whaleX>2500) {
		whaleX=10;
	};

	whaleX = whaleX+2;
	whaleY = whaleY+yChange;

	document.getElementById('whale').style.position = 'absolute';
	document.getElementById('whale').style.top = whaleY + 'px'
	document.getElementById('whale').style.left = whaleX + 'px';
	document.getElementById('whale').src='images/Whale.gif';
};

moveWhale();

//*****************************************LEAF CONTROLLER******************************************//

var strobe=setInterval("moveLeaf()", 50);
var leafX = -500;
var leafY = 1100;
var yChange = 2;

function moveLeaf(){

	if (leafY>1630){
		yChange = -2;
	} else if (leafY<1100){
		yChange = 2;
	}

	if (leafX>2500) {
		leafX=10;
	};

	leafX = leafX+2;
	leafY = leafY+yChange;

	document.getElementById('leaf').style.position = 'absolute';
	document.getElementById('leaf').style.top = leafY + 'px'
	document.getElementById('leaf').style.left = leafX + 'px';
	document.getElementById('leaf').src='images/Leaf.gif';
};

moveLeaf();

//*****************************************CLOUD CONTROLLER******************************************//

var strobe=setInterval("moveCloud()", 50);
var cloudX = -500;
var cloudY = 2100;
var yChange = 2;

function moveCloud(){
	if (cloudY>2700){
		yChange = -2;
	} else if (cloudY<2100){
		yChange = 2;
	}

	if (cloudX>2500) {
		cloudX=10;
	};

	cloudX = cloudX+2;
	cloudY = cloudY+yChange;

	document.getElementById('cloud').style.position = 'absolute';
	document.getElementById('cloud').style.top = cloudY + 'px'
	document.getElementById('cloud').style.left = cloudX + 'px';
	document.getElementById('cloud').src='images/Cloud.gif';
};

moveCloud();

//******************************************ROLLOVER FUNCTIONS*******************************************//

function thumbRollover(e){
	currentlyHighlighted.classList.remove('rollover');
	console.log(e.currentTarget)
	e.target.classList.add('rollover')
	currentlyHighlighted = e.currentTarget;
}




/*     lvw/.     */