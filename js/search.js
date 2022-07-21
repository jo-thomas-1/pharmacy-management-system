// function to search user list
function search_user(search_text)
{
	console.log(search_text);

	$("#data_table_body").html("");
	if(search_text.trim() == "") data_get_success(data_set);
	else
	{
		for(let i = 0; i < data_set.length; i++)
		{
			if(data_set[i]["fullName"].toLowerCase().includes(search_text.toLowerCase()))
			{
				console.log("match found");
				generate_data_row(i, data_set[i]);
			}
		}
	}
}