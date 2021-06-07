
// https://stackoverflow.com/questions/6150289/how-can-i-convert-an-image-into-base64-string-using-javascript/20285053#20285053
function readURL(input) 
{
   var elephant = document.getElementById("bannerImg").style.display = "block";
// Get a reference to the image element
// var elephant = document.getElementById("elephant");

// Take action when the image has loaded
//elephant.addEventListener("load", function () {
    var imgCanvas = document.createElement("canvas"),
        imgContext = imgCanvas.getContext("2d");

    // Make sure canvas is as big as the picture
    imgCanvas.width = elephant.width;
    imgCanvas.height = elephant.height;

    // Draw image into canvas element
    imgContext.drawImage(elephant, 0, 0, elephant.width, elephant.height);

    // Get canvas contents as a data URL
    var imgAsDataURL = imgCanvas.toDataURL("image/png");

    // Save image into localStorage
    try {
        localStorage.setItem("elephant", imgAsDataURL);
		console.log("stored well")
    }
    catch (e) {
        console.log("Storage failed: " + e);
    }
//}, false); 
}

function encodeImageFileAsURL(element) {
  var file = element.files[0];
  var reader = new FileReader();
  reader.onloadend = function() {
    console.log('RESULT', reader.result)
  }
  reader.readAsDataURL(file);
}


function base64(file, callback){
  var coolFile = {};
  function readerOnload(e){
    var base64 = btoa(e.target.result);
    coolFile.base64 = base64;
    callback(coolFile)
  };

  var reader = new FileReader();
  reader.onload = readerOnload;

  var file = file[0].files[0];
  coolFile.filetype = file.type;
  coolFile.size = file.size;
  coolFile.filename = file.name;
  reader.readAsBinaryString(file);
}

function doit ()
{
	base64( $('input[type="file"]'), function(data){
  console.log(data.base64)
})
}












function Store_Details (item_name_type)
{
    // Store
    let item_name_input = document.getElementById("item-name").value;
    let item_qty_input = document.getElementById("item-qty").value;

    let br = "<br>";
    let spc = " ";
	//let filePath = document.getElementById("fileUpload").value;
	//console.log(filePath);
	
    let details = "<span class='localstorage-stored-string'>"+"<b>"+item_name_type+"</b>"+"<span class='localstorage-type-space-in-string'>"+"</span>"+item_name_input+"<span class='localstorage-space-in-string'>"+"</span>"+item_qty_input+"</span>"+br+filePath;
    localStorage.setItem(item_name_type, details);
	localStorage.setItem("Img", "'C:\fakepath\t.PNG'");
  //  localStorage.setItem("cups2", details);
   
}

 
	
       
   

function Retrive_Stored_detaiils ()
{
    let stored_details_lable = document.getElementById("stored-details-lable");
	 let stored_details_img = document.getElementById("stored-details-img");
    let strarrary = []; // to hold stored string 
    // looop through all the stored keys
    img = localStorage.getItem("Img")
	stored_details_img.innerHTML = img;
    for (i=0; i<localStorage.length; i++)
        {
            const item_name_type_key = localStorage.key(i);
            strarrary.push(localStorage.getItem(item_name_type_key));
        }
    stored_details_lable.innerHTML = strarrary.join(' '); // remove the commas in arrary
    console.log(strarrary)

}
