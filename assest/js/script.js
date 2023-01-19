

// ---- ---- Const ---- ---- //
let inputBox = document.querySelector('.input-box'),
  searchIcon = document.querySelector('.search'),
  closeIcon = document.querySelector('.close-icon');


// if ($('.search').hasClass('open')){
    
// } else {
//     $('#takeonebar').addClass('slamdown');
// }
// ---- ---- Open Input ---- ---- //
 

$('.search').click(function () { 
    $('.input-box').addClass('open');
});
    

// ---- ---- Close Input ---- ---- //
$('.close-icon').click(function () { 
    $('.input-box').removeClass('open');
});