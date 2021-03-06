bnSlideLeft = function (element, speed){
    if(typeof(element)==='undefined'){
        return false;
    }
    
    var offset = $(element).offset();
    if(typeof(offset)==='undefined'){
        return false;
    }
    var offsetLeft = offset.left; //target.offset().top;
    if(typeof(speed)=== 'undefined'|| isNaN(speed)){
        speed = 600;
    }
    if(offsetLeft === 0){
        $(element).animate({
            'left':'-100%'
        },speed);
    }else{
        $(element).animate({
            'left':'0'
        },speed);
    }
};

$('.slider').show();


$('.slider').bxSlider({
    adaptiveHeight: true,
    pager: false,
    auto: true,
    mode: 'horizontal'
});




$(document).ready(function(){

    $('#show-user-menu').click(function(e){
        e.preventDefault(); 
        $('#user-menu-collapsible').toggle();
    });

    
   

   

    $("#menu-cat-1 a").click(function(e){
        e.preventDefault(); 
        $("#menu-cat-1 a").removeClass('active');  
        $(this).addClass('active');        
    });

    $('#menu-cat-toogle').click(function(e){
        //$('.submenu-item').hide();
        bnSlideLeft('nav#menu-cat-1', 200);
    });



   
    

    $('.owl-carousel').owlCarousel({
        loop:true,
        dots: false,
        margin:30,
        nav:true,
        navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            500:{
                items: 2
            },
            768:{
                items: 2
            },
            992:{
                items:3
            },
            1200:{
                items: 4
            }
        }
    });


  });

 