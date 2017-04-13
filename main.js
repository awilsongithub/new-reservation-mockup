
// track position of element
var pos = 0;
var itemsInCart = 0;

function left(){
  pos += 100;
  var elem = document.getElementById('animate');
  elem.style.left = pos + 'px';
}

function right(){
  pos -= 100;
  var elem = document.getElementById('animate');
  elem.style.left = pos + 'px';
}

function addToCart(){
  itemsInCart++;
  console.log(itemsInCart);
 $('#cart-quantity').html(itemsInCart);
 $('#cart-flex-container').css('color', 'yellow');
}

$(".show-item-detail").click(function(){
    $('.item-detail-content').show(3000);
    $('.item-added-message').hide(3000);

});

$(".hide-item-detail").click(function(){
    $('.item-detail-content').hide(3000);
    $('.item-added-message').show(3000);
});




// $(document).ready(function(){
//
//   $('.resource-image').click(function(){
//     scrollLeft();
//     alert('clicked');
//   });
//
//
//
// });

// call this f every 5 milisec.
// var id = setInterval(frame, 5);
// if pos 100 stop setInterval from running
// and set elem pos using css back to 0
// else move 1px left using css
// function frame(){
//   if (pos === 500){
//     clearInterval(id);
//     pos = 0;
//     elem.style.left = pos + 'px';
//   } else {
//     for (var i=0; i<100; i++){
//       pos++;
//       elem.style.left = pos + 'px';
//     }
//
//   }
// }
