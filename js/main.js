console.log('it works');

$('h1').hover(function(){
	$('h2').toggleClass('show-h2');
});

// $('.button').hover(function(){
//       // $(this).addClass('hovermove');
//       $(this).animate({marginLeft:'-4', marginTop:'-4'})
//   },
//        function(){ 
//        // $(this).removeClass('hovermove');
//        $(this).animate({marginLeft:'4', marginTop:'4'})
//    });