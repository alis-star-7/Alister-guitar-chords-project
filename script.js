$("button").click(function(){
    $(this).animate({opacity:0.55},1000) .animate({opacity:1},200);
});


$(document).keydown(function(event){
    var dd = event.key;
    $("."+dd).animate({opacity:0.55},1000) .animate({opacity:1},200);
});


$(document).on("click",myFunction);
function myFunction(event){
    var mouse = event.target.classList[0];
          music(mouse);
}


$(document).on("keydown",keyFunction);
function keyFunction(event){
      var keyboard = event.key;
           music(keyboard);

}

    function       music(great){
    switch (great) {
        case "c":
            var audio =  new Audio(src="./audio/Guitar_Chords_-_C_major_1.mp3");
            audio.play();
            break;
        case "d":
            var audio =  new Audio(src="./audio/Guitar_Chords_-_D_major_1.mp3");
            audio.play();
            break;
        case "e":
            var audio =  new Audio(src="./audio/Guitar_Chords_-_E_major_1.mp3");
            audio.play();
            break;
        case "f":
            var audio =  new Audio(src="./audio/Guitar_Chords_-_F_major_1.mp3");
            audio.play();
            break;
        case "g":
            var audio =  new Audio(src="./audio/Guitar_Chords_-_G_major_1.mp3");
            audio.play();
            break;
        case "a":
            var audio =  new Audio(src="./audio/Guitar_Chords_-_A_major_1.mp3");
            audio.play();
            break;
        case "b":
            var audio =  new Audio(src="./audio/Guitar_Chords_-_B_major_1.mp3");
            audio.play();
            break;

    
        default:console.log(event);
            break;
    }}

