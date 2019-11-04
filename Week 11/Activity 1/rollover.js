$(document).ready(function() {
    $("#faq_rollovers li").mouseenter(function() {
        $(this).find("p.hidden").show();
    });
    
    $("#faq_rollovers li").mouseleave(function() {
        $(this).find("p.hidden").hide();
    });
    
}); // end readyOutput