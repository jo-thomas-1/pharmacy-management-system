console.clear();

/*

Functionality:
	- On page load send a call to the backend to fetch all the users.
	- The admin should be able to search users based on the first and last name.
	- Search should work only when the characters entered are 2 or more.
	- If the admin tries to search a user by typing less than 2 characters then show an alert which says, "Please enter at least 2 characters".
	- On a successful search API call, the table should show only the search results.
	- On the Reset button click, reset the search field and show all the users.

API Details:
	User List Endpoint: https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users
	Request Type: GET

	User Search Endpoint: https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users?fullName=John
	Request Type: GET

*/

function users_get_success(data)
{
	console.log("user list obtained succefully");
	console.log(data);

	// generate and add rows to the orders table
	function generate_user_row(index, value)
	{
		/*

		<tr id="1">
			<td class="silent-text">1</td>
			<td>
				<img src="https://robohash.org/estinvoluptas.jpg?size=50x50&amp;set=set1" alt="Profile Pic">
			</td>
			<td class="silent-text">Clementius McGillreich</td>
			<td class="text-no-wrap">20 Feb, 1997</td>
			<td class="silent-text">Male</td>
			<td class="silent-text">Bayambang, Philippines</td>
		</tr>

		*/
		
		let temp_row = $('<tr id="' + value["id"] + '">' +
			'<td class="silent-text">' + value["id"] + '</td>' +
			'<td>' +
				'<img src="' + value["profilePic"] + '" alt="Profile Pic">' +
			'</td>' +
			'<td class="silent-text">' + value["fullName"] + '</td>' +
			'<td class="text-no-wrap">' + value["dob"] + '</td>' +
			'<td class="silent-text">' + value["gender"] + '</td>' +
			'<td class="silent-text">' + value["currentCity"] + ', ' + value["currentCountry"] + '</td>' +
		'</tr>');

		$("#user_table_body").append(temp_row);
	}

	$.each(data, generate_user_row);
}

function users_get_fail(error)
{
	console.log("failed to get order list");
	console.log(error);
}

$.ajax({
    method:"GET",
    url:"https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users",
    success: users_get_success,
    error: users_get_fail
});