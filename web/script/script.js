
//quand le doc est pret (a la fin du chargement de la page)
$(document).ready(function(){
    
    centrerButton();
    centrerFormulaire();
    $("body").css("visibility","visible");
});

$(window).resize(function(){
    centrerButton();
    centrerFormulaire();
});

//quand on clique sur le bouton
$("button").click(function(e){
    $(this).fadeOut(600,function(){
        $("#selection").fadeIn(600);
    });
});

function centrerButton(){
    var w = $(window).width();
    var h = $(window).height();
    //on recupere les dimensions du bouton
    var buttonh = ($("button").width());
    var buttonw = ($("button").height());
    //on calcule la position du bouton afin qu'il soit au centre    
    var top = (h - buttonh)/2;
    var left = (w - buttonw)/2;
    //on affecte les nouvelles positions calculées
    $("button").css({
        "left": left+"px",
        "top": top+"px"
    });
}
function centrerFormulaire(){
    var w = $(window).width();
    var h = $(window).height();
    //on recupere les dimensions du bouton
    var buttonh = ($("#selection").width());
    var buttonw = ($("#selection").height());
    //on calcule la position du bouton afin qu'il soit au centre    
    var top = (h - buttonh)/2;
    var left = (w - buttonw)/2;
    //on affecte les nouvelles positions calculées
    $("#selection").css({
        "left": left+"px",
        "top": top+"px"
    });
}