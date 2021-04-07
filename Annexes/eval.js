var images = [
    "m32.jpg"  ]

var container = document.querySelector(".container");

var i = 0;
setInterval(function() {
      container.style.backgroundImage = "url(" + images[i] + ")";
      i = i + 1;
      if (i == images.length) {
        i =  0;
      }else{

      }

}, 15000);


var counter = document.querySelector("#count");
counter.textContent = document.getElementsByClassName('card').length




$(document).on("change", ".price-sorting", function() {

    var sortingMethod = $(this).val();

    if(sortingMethod == 'l2h')
    {
        sortCardPriceAscending();
    }
    else if(sortingMethod == 'h2l')
    {
        sortCardPriceDescending();
    }

});
function sortCardPriceAscending()
{
    var card = $('.card');
    card.sort(function(a, b, c, d,){ return $(a).data("price")-$(b).data("price")-$(c).data("price")-$(d).data("price")});
    $(".products-grid").html(card);

}

function sortCardPriceDescending()
{
    var card = $('.card');
    card.sort(function(a, b, c, d,){ return $(d).data("price") - $(c).data("price")- $(b).data("price")- $(a).data("price")});
    $(".products-grid").html(products);

}



