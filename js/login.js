console.clear();

function check_login(event)
{
	// stop default action
	event.preventDefault();

	// validation criteria provided is - "username and password should be the same".
	if($("#username").val() == $("#password").val())
	{
		alert("Login Successful");
		$(location).attr("href", "order.html");
	}
	else
	{
		alert("Invalid Login Credentials");
	}
}

// call function on form submit
$("#login_form").submit(check_login);