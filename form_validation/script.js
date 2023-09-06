 
function validateForm() {
	var name = document.getElementById("name").value.trim();
	var email = document.getElementById("email").value.trim();
	var phone = document.getElementById("phone").value.trim();
	var password = document.getElementById("password").value.trim();
	var confirm_password = document.getElementById("confirm_password").value.trim();

	if (name.length < 5) {
		alert("Name must not be less than 5 characters");
		return false;
	}

	if (email.indexOf("@") == -1) {
		alert("Email Id should have @ character in it");
		return false;
	}

	if (phone == "123456789") {
		alert("Phone Number should not be 123456789");
		return false;
	}

	if (phone.length != 10) {
		alert("Phone Number should be a 10-digit number");
		return false;
	}

	if (password.length < 8 || password == "password" || password == name) {
		alert("Password cannot be 'password' or 'name of the user' or less than 8 characters");
		return false;
	}

	if (password != confirm_password) {
		alert("Password and confirm password should match");
		return false;
	}

	return true;
}
 