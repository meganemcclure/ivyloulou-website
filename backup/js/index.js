$(".condensedMenuButton").on("click", function() {
    if ($(".condensedNav").hasClass("open")) {
        $(".condensedNav").removeClass("open")
        $(".condensedNav").animate({height: "80px"})
        $(".condensedNavContents").slideUp("fast")
    } else {
        $(".condensedNav").addClass("open")
        $(".condensedNav").animate({height: "100%"})
        $(".condensedNavContents").slideDown("fast")
    }

    $(".condensedMenuIcon").toggleClass("fa-bars fa-x")
})