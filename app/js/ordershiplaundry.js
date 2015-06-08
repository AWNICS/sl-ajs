/*
	ShipLaundry
	Javascript for the order booking workflow
*/

window.jQuery = window.$ = jQuery;

/* Custom Scripts */

/*-----------------------------------------------------------------------------------*/
/*	CHART
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function(){
	
	jQuery('.btn_order').click(function(){
		//Book My order here
		book_order();		
	});

});



function book_order() {
	alert('Your order is important to us. We are in the process of implementing this creature !!');
};