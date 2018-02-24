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
		var list = document.getElementById('list');
		var add = document.getElementById('addToDo');
		var noteContainer = document.getElementById('note-container');

		add.addEventListener('click', function(){
			var newInput = document.createElement('input');
			newInput.setAttribute('class', 'thing-toDo');
			var newDiv = document.createElement('div');
			newDiv.setAttribute('class', 'toDo-div');
			newDiv.appendChild(newInput);
			list.appendChild(newDiv)
			newInput.addEventListener('keydown', function(e){
				//console.log(e.keyCode)
				if (e.keyCode == 13) {
					console.log('Enter! >_<')
					//console.log(newInput.value)
					newDiv.innerHTML = newInput.value;
					newInput.style.display = 'none';
				}
			})
			newDiv.addEventListener('click', function(){
				console.log('I was clicked!')
				newDiv.style.display = 'none'
			}, true)
		})	
	}
}