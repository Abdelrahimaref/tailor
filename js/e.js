$(window).on("scroll",function(){
    if($(window).scrollTop()>=300)
    {
        $('#goUPButton').show(700);
    }
    else
    {
        $('#goUPButton').hide(700); 
    }
}) ;
function goUP(){
    window.scrollTo(0,0); 
};

