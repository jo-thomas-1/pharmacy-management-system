console.clear();

/*

Functionality:
	- On page load send a call to the backend to fetch all the products.
	- Users should be able to filter the products using the checkboxes based on expiry and stock.
	- A product is expired if the expiry date is less then current date.
	- A product is low stock if the stock count is less than 100.

API Details:
	Endpoint: https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products
	Request Type: GET

*/

function products_get_success(data)
{
	console.log("product list obtained succefully");
	console.log(data);

	// generate and add rows to the orders table
	function generate_product_row(index, value)
	{
		/*

		<tr id="56104-020">
			<td class="silent-text">56104-020</td>
			<td>Miconazole Nitrate</td>
			<td class="silent-text">Premier Brands of America Inc.</td>
			<td class="text-no-wrap">14 Aug, 2012</td>
			<td class="silent-text">$993.01</td>
			<td class="silent-text">725</td>
		</tr>

		*/
		
		let temp_row = $('<tr id="' + value["id"] + '">' +
			'<td class="silent-text">' + value["id"] + '</td>' +
			'<td>' + value["medicineName"] + '</td>' +
			'<td class="silent-text">' + value["medicineBrand"] + '</td>' +
			'<td class="text-no-wrap">' + value["expiryDate"] + '</td>' +
			'<td class="silent-text">' + value["unitPrice"] + '</td>' +
			'<td class="silent-text">' + value["stock"] + '</td>' +
		'</tr>');

		$("#product_table_body").append(temp_row);
	}

	$.each(data, generate_product_row);
	$("#product_count").html(data.length);
}

function products_get_fail(error)
{
	console.log("failed to get order list");
	console.log(error);
}

$.ajax({
    method:"GET",
    url:"https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products",
    success: products_get_success,
    error: products_get_fail
});