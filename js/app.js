window.onload = function(){
	var username = document.getElementById('username');
	var password = document.getElementById('password');
	var form = document.getElementById('form');
	var mask = document.getElementById('form-mask');
	form.onsubmit = function(){
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

	function postItCreate(){		
		var noteContainer = document.getElementById('note-container');
		var cords = document.createElement('p');
		noteContainer.appendChild(cords)
		let x;
		let y;
		noteContainer.addEventListener('mousemove', function(){
			x = event.clientX;
			y = event.clientY;
			cords.innerHTML = 'x: ' + x + ' y: ' + y;
		});
		
		noteContainer.addEventListener('click', function(){
			var sticky = document.createElement('div');
			sticky.setAttribute('class', 'sticky location');
			var stickInput = document.createElement('input');
			stickInput.setAttribute('class', 'stickyInput location');

			sticky.style.left = x + 'px';
			stickInput.style.left = x + 'px';
			sticky.style.top = y + 'px';
			stickInput.style.top = y + 'px';

			sticky.appendChild(stickInput);
			noteContainer.appendChild(sticky)
		}, false)
	}
}