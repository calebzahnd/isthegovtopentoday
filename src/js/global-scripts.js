(function($) {

    window.main = {

        initialize: function () {
            main.govtDate();
            main.socialShare();
            main.domReady();
    },

    //---------------------------------------------------------------------------------------------
    // SOCIAL SHARE
    //---------------------------------------------------------------------------------------------
    govtDate: function() {
        

        function daysShutdown() {
            var shutdownDate = moment("2018-12-22");
            var todaysdate = moment();
            return todaysdate.diff(shutdownDate, 'days');
        }
        //console.log(daysShutdown());

        console.log(moment()); //This is a temporary test to see what timezone Amazon S3 reports (should be EST)
        
        
    },

    //---------------------------------------------------------------------------------------------
    // SOCIAL SHARE
    //---------------------------------------------------------------------------------------------
    socialShare: function() {

		var documentURL     = window.location.href,
		    documentTitle   = encodeURIComponent(document.title),
		    documentMedia   = encodeURIComponent($('head link[rel="image_src"]').attr('href')),
		    documentDescription = encodeURIComponent($('head meta[property="og:description"]').attr('content'));
		
		$('body').append(
		    '<ul class="social-share rrssb-buttons">'+
		    '   <li><a href="https://www.facebook.com/sharer/sharer.php?u='+documentURL+'" class="share--facebook popup" aria-label="Share via Facebook"></a>'+
            '   <li><a href="https://twitter.com/intent/tweet?text='+documentTitle+encodeURIComponent(' | ')+documentURL+'" class="share--twitter popup" aria-label="Share via Twitter"></a>'+
            '   <li><a href="https://www.linkedin.com/shareArticle?mini=true&url='+documentURL+'&title='+documentTitle+'" class="share--linkedin popup" aria-label="Share via Twitter"></a>'+
		    '   <li><a href="mailto:?subject='+documentTitle+'&amp;body='+documentURL+'" class="share--email popup" aria-label="Share via Email"></a>'+
		    '</ul>'
		);

    },
    
    //---------------------------------------------------------------------------------------------
    // DOM READY -- KEEP THIS AS LAST JS FUNCTION
    //---------------------------------------------------------------------------------------------
    domReady: function() {

        $('a[data-fancybox]').fancybox({
        });
        

        // Attach window events
        $(window).on('load', function(){
            $('body').addClass('ready');
		});
    },


};

$(document).ready(main.initialize);
}(jQuery));