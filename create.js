// This file will allow new users to create a sign up
//We are linking eacch HTML elements to Javascript to activate the each function
const signupButton = document.getElementById('submit-sign-up');
const signupUsername = document.getElementById('sign-up-username');
const signupEmail = document.getElementById('sign-up-email');
const signupPassword = document.getElementById('sign-up-password');

// this function allows the user to sign up when they click the button
signupButton.onclick = function(){
	// take the email and password and stores it in our firebase
	const email = signupEmail.value;
	const password = signupPassword.value;

//firebase function to store user's email and associated passwords:
/*
	firebase.auth().createUserWithEmailAndPassword(email,password);
*/

// the following sign-up method is a more advanced method that uses promises to add the display name along with the email and password.
	const promise = firebase.auth().createUserWithEmailAndPassword(email,password);
	promise.then(updateUser)

	function updateUser(credentials){
		const userInfo = {
			displayName: signupUsername.value // because userInfo is an object variable, use : instead of = to change the value
		};
		credentials.user.updateProfile(userInfo);
		// let them know we succeeded in creating a user
		alert("Successfully Created a User!");
	}

	// if we catch an error, log it in our console!
	promise.catch(function(error){
		console.log(error);
		alert(error.message);
	});
}; // end of the signup button function
