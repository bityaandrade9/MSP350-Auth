//Login page for existing users
//We are linking eacch HTML elements to Javascript to activate the each function
const loginButton = document.getElementById('login-button');
const loginEmail = document.getElementById('login-email');
const loginPassword = document.getElementById('login-password');

//When the users clicks on the lohin button we want them to login if all credientals are correct
loginButton.onclick = function() {
    const email = loginEmail.value;
	const password = loginPassword.value;

//firebase function to store user's email and associated passwords:
    /*
	firebase.auth().signInWithEmailAndPassword(email, password);
	*/
const promise = firebase.auth().signInWithEmailAndPassword(email, password);
// if user's login is recognize then display a message of success
    promise.then(alert("Successfully Logged In!"));

// if it doesn't work, give an error message
	promise.catch(function(error) {
		console.log(error);
		alert(error.message);
    });
}
