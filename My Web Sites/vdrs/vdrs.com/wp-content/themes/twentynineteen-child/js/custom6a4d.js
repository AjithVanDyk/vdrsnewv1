jQuery(window).on('load resize',function(){
       if(jQuery(window).width() > 974 ){
           var window_height = jQuery(window).height();        
           jQuery('.h_video_main').css('height',window_height);
       }
       else{
           jQuery('.h_video_main').css('height','auto');
       }
   });

jQuery(document).ready(function (){
   if(jQuery(window).width() > 992 ){
       jQuery(window).scroll(function() {    
           if (jQuery(this).scrollTop() > 1){  
               jQuery('.header').addClass("sticky");
           }
           else{
               jQuery('.header').removeClass("sticky");
           }
       });
   }
   });


// popup modal js start here
	jQuery(document).on('click', '#mc-embedded-subscribe', function(){
		var clrInt = setInterval(function(){ 
			var visible = jQuery(document).find('#mce-success-response').is(':visible');  
			if(visible){
					jQuery('.pum-close.popmake-close').click();
					setTimeout(function(){ 
						jQuery('.pum-overlay,.popmake').show();
					 }, 2000);
					
					var elemeent = jQuery('.donwloadpdf');
					jQuery('.popmake').html('<div class="textcenter">Thank you! Your download will start in a few seconds.</div>');
				jQuery('.popmake').addClass('low_width');
					setTimeout(function(){ 
						jQuery('.pum-overlay,.popmake').hide();
						//jQuery('.donwloadpdf')[0].click();
						elemeent.get(0).click();
					 }, 5000);
				
			}
			clearInterval(clrInt);  
		},2000);
	});
	
//print pdf
function printData()
{
   var divToPrint=document.getElementById("print-area");
   newWin= window.open("");
   newWin.document.write(divToPrint.outerHTML);
   newWin.print();
   newWin.close();
}

jQuery('#printbtn').on('click',function(){
printData();
})

//loader home page video for
jQuery('#video_background').on('loadstart', function (event) {
  jQuery(this).addClass('background');
  jQuery(this).attr("poster", "images/tenor.gif");
});

jQuery('#video_background').on('canplay', function (event) {
  jQuery(this).removeClass('background');
  jQuery(this).removeAttr("poster");
});

jQuery(document).ready(function($){wow = new WOW({boxClass:'wow', animateClass: 'animated',offset: 0, mobile: true,live:true});wow.init();});


/*****download the pdf after success of cf7 form*******/

jQuery(document).ready(function($) {
    document.addEventListener('wpcf7mailsent', function(event) {
       // console.log(event.detail.contactFormId);
        if (event.detail.contactFormId == '15408') { // Replace 15458 with your specific form ID
            var fileUrl = 'https://vdrs.com/wp-content/themes/twentynineteen-child/download-pdf-file.php'; // Replace with your file URL
            //window.open(fileUrl, '_blank'); // Opens the PDF in a new tab
            window.location.href = fileUrl; 
        }
    }, false);
});


document.addEventListener( 'wpcf7submit', function( event ) {
    console.log( "CF7 ID: " + event.detail.contactFormId );
    console.log( "Status: " + event.detail.status );
    console.log( "Message: ", event.detail.apiResponse );
}, false );

