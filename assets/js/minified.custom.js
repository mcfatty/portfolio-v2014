/**********************
** Custom js
**********************/

/**********************
** Show intro text
**********************/

var terms = [
				'27 year old front-end from Denmark', 
				'♡ Gruntjs Task Runner ♡', 
				'♡ Sass, compass and susy ♡', 
				'Passion in agil',
				'♡ HTML(5), CSS(3) and Javascript ♡'
			];

function rotateTerm() {
  var rt = $(".l-helement").data("term") || 0;
  $(".l-helement").data("term", rt == terms.length -1 ? 0 : rt + 1).text(terms[rt]).fadeIn()
              .delay(2000).fadeOut(200, rotateTerm);
  
}
$(rotateTerm);

$(function() {

	/**********************
	** Portfolio on front secton
	**********************/

	$('.l-portfoliobox').hover(function() {
		
		$(this).find('.l-portfolioboxinfo').fadeIn();

	}, function() {
		$(this).find('.l-portfolioboxinfo').fadeOut();		
	});
});