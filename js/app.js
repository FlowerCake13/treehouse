var noteContainer = document.getElementById('note-container');
var cords = document.createElement('p');
let x;
let y;
noteContainer.addEventListener('mousemove', function(){
	x = event.clientX;
	y = event.clientY;
	cords.innerHTML = 'x: ' + x + ' y: ' + y;
	console.log('x: ' + x + ' y: ' + y)
});

function drag(e) {
	e.dataTransfer.setData('text', e.target.id);
}

function allowDrop(e){
	e.preventDefault();
}

function drop(e) {
	var data = e.dataTransfer.getData('text');
	var item = document.getElementById(data);
	console.log(item)
	console.log(y)
	e.target.appendChild(item);
	console.log(item.style.top)
	item.style.left = x + 'px';
	item.style.top = y + 'px';
	console.log(y)
	console.log(item.style.top)
}

window.onload = function(){
	var username = document.getElementById('username');
	var password = document.getElementById('password');
	var form = document.getElementById('form');
	var mask = document.getElementById('form-mask');
	form.onsubmit = function(){
		console.log('stuff')
		if (username.value == 'test' && password.value == 'test') {
			form.style.display = 'none';
			mask.style.display = 'none';
			treehousesRCool()
		}

		return false;
	}

	function treehousesRCool(){
		toDoCreate()
		postItCreate()
	}

	function toDoCreate(){
		var list = document.getElementById('list');
		var add = document.getElementById('addToDo');
		add.addEventListener('click', function(){
			var newInput = document.createElement('input');
			newInput.setAttribute('class', 'thing-toDo');
			var newDiv = document.createElement('div');
			newDiv.setAttribute('class', 'toDo-div');
			var anotherNewDiv = document.createElement('div');
			anotherNewDiv.setAttribute('class', 'another-toDo-div');
			var xButton = document.createElement('button');
			xButton.setAttribute('class', 'xButton');

			anotherNewDiv.appendChild(newInput);
			newDiv.appendChild(xButton);
			newDiv.appendChild(anotherNewDiv)
			list.appendChild(newDiv);

			document.addEventListener('keydown', function(e){
				if (e.keyCode == 13) {
					console.log('Enter! >_<');
					newInput.style.display = 'none';
					anotherNewDiv.innerHTML = newInput.value;	
				}
			})

			xButton.addEventListener('click', function(){
				console.log('I was clicked!')
				newDiv.style.display = 'none'
			})
		}, false)	
	}

	var counter = 0;

	function postItCreate(){		
		noteContainer.appendChild(cords)
		noteContainer.addEventListener('click', function(){
			var sticky = document.createElement('div');
			sticky.setAttribute('class', 'sticky location');
			var stickInput = document.createElement('input');
			stickInput.setAttribute('class', 'location');
			sticky.setAttribute('id', counter);
			counter++;
			sticky.setAttribute('draggable', 'true');
			sticky.setAttribute('ondragstart', 'drag(event)');

			sticky.style.left = x + 'px';
			//stickInput.style.left = x + 'px';
			sticky.style.top = y + 'px';
			//stickInput.style.top = y + 'px';

			sticky.appendChild(stickInput);
			noteContainer.appendChild(sticky)
		}, false)
	}
}