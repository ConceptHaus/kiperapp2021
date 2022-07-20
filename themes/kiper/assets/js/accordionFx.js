/**
* Light Weight jQuery faqsAccs
*/

(function($) {
  //Hide all panels
  var allPanels = $('.faqsAcc > dd').hide();
  //Show first panel
  $('.faqsAcc > dd:first-of-type').show();
  //Add active class to first panel 
    $('.faqsAcc > dt:first-of-type').addClass('faqsAcc-active');
  //Handle click function
  jQuery('.faqsAcc > dt').on('click', function() {
      //this clicked panel
      $this = $(this);
      //the target panel content
      $target = $this.next(); 
	
      //Only toggle non-displayed 
      if(!$this.hasClass('faqsAcc-active')){
          //slide up any open panels and remove active class
          $this.parent().children('dd').slideUp();
          
          //remove any active class
          jQuery('.faqsAcc > dt').removeClass('faqsAcc-active');
          //add active class
          $this.addClass('faqsAcc-active');
          //slide down target panel
          $target.addClass('active').slideDown();

      }	
    
    return false;
  });

})(jQuery);