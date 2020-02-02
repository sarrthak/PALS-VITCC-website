$("#1").on("click", function() {
    $("body").scrollTop(0);
});


function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}