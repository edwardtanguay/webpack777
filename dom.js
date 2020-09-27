const getUsers = require('./users').getUsers;

function addUserToDOM(name) {
	var elemLi = document.createElement('li');
	var elemText = document.createTextNode(name);
	elemLi.append(elemText);

	document.getElementById('users').appendChild(elemLi);
}

document.getElementById('addUser').addEventListener('click', function () {
	var newUser = document.getElementById('newUser');
	addUserToDOM(newUser.value);
	newUser.value = '';
});

var users = getUsers();
for (var i = 0; i < users.length; i++) {
	addUserToDOM(users[i]);
}