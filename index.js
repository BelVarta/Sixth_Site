$(".burger").on("click", function (e){
    e.preventDefault();
    $(".burger_btn").toggleClass("burger_active")
    $(".header_nav").toggleClass("header_nav_active")
    $(".header_top").toggleClass("header_top_active")
    })
    
    