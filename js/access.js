// function to handle logout
function logout()
{
	localStorage.clear();
	$(location).attr("href", "index.html");
}

// check if user has logged in to page
if(localStorage.getItem("logged_in") != "true")
{
	console.log("user has not logged in");
	$(location).attr("href", "index.html");
}