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
        
            var shutdownDate = moment("2018-12-22").add(1, 'hours'),
                todaysdate = moment().add(1, 'hours'),
                shutdownLength = (todaysdate.diff(shutdownDate, 'days') + 1),
                reopenDate = moment("2019-01-27").add(1, 'hours'),
                //openedLength2 = moment.duration(moment("2019-01-25", "YYYY-MM-DD").diff(moment().format('MMMM Do YYYY'))).asDays(),
                openedLength = (todaysdate.diff(reopenDate, 'days') + 1);
        
        $('#shutdown-today').text(todaysdate.format('MMMM Do YYYY'));
        $('#reopened-date').text(moment("2019-01-25").add(1, 'hours').format('MMMM Do YYYY'));
        $('#shutdown-length').text(shutdownLength);
        $('#opened-length').text(openedLength);
        
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