function increaseImg(){
    $(this).animate({'width':'80%'});
}

function decreaseImg(){
    $(this).animate({'width':'150%'});
}

//$('#dog-grooming').on('mouseenter',increaseImg);
//$('#dog-grooming').on('mouseleave',decreaseImg);

$('#dog-grooming').on('click',function(){
    $('#petTable').slideUp(1000);
});

$('header h1').on('click',function(){
    $('#petTable').slideDown(1000);
});