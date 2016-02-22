 
//  attend que la page soit chargée 
$(document).ready(function()
{
	//déclenche la fonction quand la page est redimensionnée 
$(window).resize(function()
{
	var w=$(window).width();




	if (w<700)
	{
		// cache le menu
	   $('nav ul li ul ').css('display','none');
	}
	if (w>700)
	{
		
	   //affiche le menu 
	   $('nav ul li ul ').css('display','inline-block');
	   
  
	}
});
   // lors du clic sur le bouton menu affichage du nav
   $('#bouton_menu').click(function(e)
  {
	e.preventDefault();
    $('nav ul li ul ').toggle(800);
	$('body').css('width','100%');
	  
      return false;
   });


});
