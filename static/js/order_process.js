
// https://stackoverflow.com/questions/6150289/how-can-i-convert-an-image-into-base64-string-using-javascript/20285053#20285053


function ClearLocalStorage () {localStorage.clear();}
function CancelCustomerOrder () 
{
	document.getElementById("customer-name").value ='';
	document.getElementById("customer-contact").value ='';
	document.getElementById("customer-location").value ='';
	document.getElementById("customer-method").value ='';
	document.getElementById("stored-details-lable").innerText ='';
	localStorage.clear();
}
function Store_Details (item_name_type)
{
    // Store
    let item_name_input = document.getElementById("item-name").value;
    let item_qty_input = document.getElementById("item-qty").value;

    let br = "<br>";
    let details = "<span class='localstorage-stored-string'>"+item_name_type+"<br>"+"<span class='localstorage-type-space-in-string'>"+"</span>"+item_name_input+"<span class='localstorage-space-in-string'>"+"</span>"+item_qty_input+"</span>"+br
    localStorage.setItem(item_name_type, details);
}

function Retrive_Stored_detaiils ()
{
	let stored_details_lable = document.getElementById("stored-details-lable");
	let stored_details_img = document.getElementById("stored-details-img");
	let strarrary = []; // to hold stored string 
	// looop through all the stored keys
	for (i=0; i<localStorage.length; i++)
		{
			const item_name_type_key = localStorage.key(i);
			strarrary.push(localStorage.getItem(item_name_type_key));
		}
	stored_details_lable.innerHTML = strarrary.join(' '); // remove the commas in arrary
	// console.log(strarrary)
}
