console.clear();

/*

Functionality:
	- On page load send a call to the backend to fetch all the orders.
	- Users should be able to filter using the checkboxes based on order status which can be New, Packed, InTransit and Delivered.

API Details:
	Endpoint: https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders
	Request Type: GET

*/

function orders_get_success(data)
{
	console.log("order list obtained succefully");
	console.log(data);

	// generate and add rows to the orders table
	function generate_order_row(index, value)
	{
		/*

		<tr class="delivered">
			<td class="silent-text">714-69-5617</td>
			<td>Sally Whebell</td>
			<td class="text-no-wrap">07 Aug, 2020<br><span class="silent-text">2:29 AM</span></td>
			<td class="silent-text">$634.2</td>
			<td>Delivered</td>
		</tr>

		*/
		
		let temp_row = $('<tr class="' + value["orderStatus"].toLowerCase() + '"></tr>' +
			'<td class="silent-text">' + value["id"] + '</td>' +
			'<td>' + value["customerName"] + '</td>' +
			'<td class="text-no-wrap">' + value["orderDate"] + '<br><span class="silent-text">' + value["orderTime"] + '</span></td>' +
			'<td class="silent-text">' + value["amount"] + '</td>' +
			'<td>' + value["Delivered"] + '</td>' +
		'</tr>');

		$("#order_table_body").append(temp_row);
	}

	$.each(data, generate_order_row);
	$("#order_count").html(data.length);
}

function orders_get_fail(error)
{
	console.log("failed to get order list");
	console.log(error);
}

$.ajax({
    method:"GET",
    url:"https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders",
    success: orders_get_success,
    error: orders_get_fail
});