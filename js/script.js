function openNav() {
	document.getElementById("mySidenav").style.width = "320px";
}
function openNavMobile() {
	document.getElementById("mySidenav").style.width = "95%";
}
function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}
$(document).ready(function(){
	$('#dropdown-btn-industrial-info').click(function() {
		$('.dropdown-container-industrial-info').toggle("slide");
		$('#dropdown-btn-industrial-info').toggleClass("drop-active");
	});
	$('#dropdown-btn-resource-center').click(function() {
		$('.dropdown-container-resource-center').toggle("slide");
		$('#dropdown-btn-resource-center').toggleClass("drop-active");
	});
	$('#dropdown-btn-available-plots').click(function() {
		$('.dropdown-container-available-plots').toggle("slide");
		$('#dropdown-btn-available-plots').toggleClass("drop-active");
	});
	// Hide the top part of the navbar
	$(window).scroll(function() {
		if ($(this).scrollTop() > 10) {
			$('#top-navbar').fadeOut(0);
		} else {
			$('#top-navbar').fadeIn(0);
		}
	});
});