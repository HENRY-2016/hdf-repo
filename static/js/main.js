
//var src_url = "http://127.0.0.1:7070/";
var src_url = "http://178.79.182.213:7070/";

function Show_Offline_Label (htmlid){document.getElementById(htmlid).style.display='block';}
function Show_Offline_Label_For_Links (){document.getElementById('offline-div-lable').style.display='block';}

function DisplayUploadedImage ( event, id )
{   
    let image = document.getElementById(id);
	image.src = URL.createObjectURL(event.target.files[0]);
}
function displayuploadedimage ( event, id )
{   
    // let image = document.getElementById(id);
	// image.src = URL.createObjectURL(event.target.files[0]);
    alert("func called ")
}
function Load_Developer_View () 
{
    if (!navigator.onLine){Show_Offline_Label_For_Links ()}
    if (navigator.onLine){window.location="developer.html"}
}
function Load_Index_view () 
{
    window.location="index.html";
    // if (!navigator.onLine){Show_Offline_Label_For_Links ()}
    // if (navigator.onLine){window.location="index.html"}
}
function Load_Order_Process () 
{
    window.location="order_process.html";
    // if (!navigator.onLine){Show_Offline_Label_For_Links ()}
    // if (navigator.onLine){window.location="order_process.html"}
}
function Load_Order_Process_Imgs () 
{
    window.location="order_process_imgs.html";
    // if (!navigator.onLine){Show_Offline_Label_For_Links ()}
    // if (navigator.onLine){window.location="order_process_imgs.html"}
}
function Load_Statues_View ()
{
    window.location="statues.html";
    // if (!navigator.onLine){Show_Offline_Label_For_Links ()}
    // if (navigator.onLine){window.location="statues.html";}
}
function Load_Cups_View ()
{
    window.location="cups.html";
    // if (!navigator.onLine){Show_Offline_Label_For_Links ()}
    // if (navigator.onLine){window.location="cups.html";}
}
function Load_Doors_View ()
{
    window.location="doors.html";
    // if (!navigator.onLine){Show_Offline_Label_For_Links ()}
    // if (navigator.onLine){window.location="doors.html";}
}
function Load_Lamp_Holders_View ()
{
    window.location="lamp_holders.html";
    // if (!navigator.onLine){Show_Offline_Label_For_Links ()}
    // if (navigator.onLine){window.location="lamp_holders.html";}
}

function Load_Ash_Trey_View ()
{
    window.location="ash_trey.html";
    // if (!navigator.onLine){Show_Offline_Label_For_Links ()}
    // if (navigator.onLine){window.location="ash_trey.html";}
}
function Load_Walking_Sticks_View ()
{
    window.location="walking_sticks.html";
    // if (!navigator.onLine){Show_Offline_Label_For_Links ()}
    // if (navigator.onLine){window.location="walking_sticks.html";}
}

function Load_Boxes_Logos_view ()
{
    window.location="boxes_logos.html";
    // if (!navigator.onLine){Show_Offline_Label_For_Links ()}
    // if (navigator.onLine){window.location="boxes_logos.html";}
}
function Load_Boxes_African_Vilage_view () 
{
    window.location="boxes_african_vilages.html";
    // if (!navigator.onLine){Show_Offline_Label_For_Links ()}
    // if (navigator.onLine){window.location="boxes_african_vilages.html";}
}
function Load_Boxes_African_Animals_view () 
{
    window.location="boxes_african_animals.html";
    // if (!navigator.onLine){Show_Offline_Label_For_Links ()}
    // if (navigator.onLine){window.location="boxes_african_animals.html";}
}

function Load_Tables_Logos_view ()
{
    window.location="tables_logos.html";
    // if (!navigator.onLine){Show_Offline_Label_For_Links ()}
    // if (navigator.onLine){window.location="tables_logos.html";}
}
function Load_Tables_African_Vilage_view () 
{
    window.location="tables_african_vilages.html";
    // if (!navigator.onLine){Show_Offline_Label_For_Links ()}
    // if (navigator.onLine){window.location="tables_african_vilages.html";}
}
function Load_Tables_African_Animals_view () 
{
    window.location="tables_african_animals.html";
    // if (!navigator.onLine){Show_Offline_Label_For_Links ()}
    // if (navigator.onLine){window.location="tables_african_animals.html";}
}

function Load_Chairs_Logos_view ()
{
    window.location="chairs_logos.html";
    // if (!navigator.onLine){Show_Offline_Label_For_Links ()}
    // if (navigator.onLine){window.location="chairs_logos.html";}
}
function Load_Chairs_African_Vilage_view () 
{
    window.location="chairs_african_vilages.html";
    // if (!navigator.onLine){Show_Offline_Label_For_Links ()}
    // if (navigator.onLine){window.location="chairs_african_vilages.html";}
}
function Load_Chairs_African_Animals_view () 
{
    window.location="chairs_african_animals.html";
    // if (!navigator.onLine){Show_Offline_Label_For_Links ()}
    // if (navigator.onLine){window.location="chairs_african_animals.html";}
}

function Load_Wall_Hanging_Logos_view ()
{
    window.location="wall_hangings_logos.html";
    // if (!navigator.onLine){Show_Offline_Label_For_Links ()}
    // if (navigator.onLine){window.location="wall_hangings_logos.html";}
}
function Load_Wall_Hanging_African_Vilage_view () 
{
    window.location="wall_hanging_african_vilages.html";
    // if (!navigator.onLine){Show_Offline_Label_For_Links ()}
    // if (navigator.onLine){window.location="wall_hanging_african_vilages.html";}
}
function Load_Wall_Hanging_African_Animals_view () 
{
    window.location="wall_hanging_african_animals.html";
    // if (!navigator.onLine){Show_Offline_Label_For_Links ()}
    // if (navigator.onLine){window.location="wall_hanging_african_animals.html";}
}


function Add_Gallery_Iframe (endpoint)
{
    let MenuGalleryDiv = document.getElementById("menu-pics-div");
    let MenuIframe = document.createElement("iframe");
    MenuIframe.className = "menu-iframe";
    MenuIframe.setAttribute("src",  src_url + endpoint);
    MenuGalleryDiv.appendChild(MenuIframe);
}

function Show_orders_panel_div (){document.getElementById("orders-panel-div").style.display = "block";}









































