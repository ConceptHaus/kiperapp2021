/**
* Light Weight jQuery faqsAccs
*/

(function($) {
  $('[data-acc]').each(function(){
    let idx = $(this).attr('id');
    console.log(idx);
    //Hide all panels
    var allPanels = $('#'+idx+' > dd').hide();
    //Show first panel
    $('#'+idx+' > dd:first-of-type').show();
    //Add active class to first panel 
      $('#'+idx+' > dt:first-of-type').addClass('faqsAcc-active');
    //Handle click function
    jQuery('#'+idx+' > dt').on('click', function() {
        //this clicked panel
        $this = $(this);
        //the target panel content
        $target = $this.next(); 
    
        //Only toggle non-displayed 
        if(!$this.hasClass('faqsAcc-active')){
            //slide up any open panels and remove active class
            $this.parent().children('dd').slideUp();
            
            //remove any active class
            jQuery('#'+idx+' > dt').removeClass('faqsAcc-active');
            //add active class
            $this.addClass('faqsAcc-active');
            //slide down target panel
            $target.addClass('active').slideDown();
  
        }	
      
      return false;
    });
  });
})(jQuery);