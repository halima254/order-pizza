function submitOrder() {
    var flavour = document.getElementById('taste').value;
    var crust = document.getElementById('crusts').value;
    var size = document.getElementById('sizer').value;
    var number = document.getElementById('numbers').value;
    var toppings = [];
    var name = document.getElementById('name').value;

    $.each($("input[name='topping']:checked"),
        function () {
            toppings.push($(this).val())
        }

    );

    var sizePrice;
    if (flavour === "Barbequed" || flavour === "Bufallo" || flavour === "Margheritta") {
        if (size === "small") {
            sizePrice = 800;
        } else if (size === "medium") {
            sizePrice = 1000;
        } else if (size === "large") {
            sizePrice = 1200;
        }
    } else if (flavour === "Meat" || flavour === "Pepperoni" || flavour === "Vegetable") {
        if (size === "small") {
            sizePrice = 900;
        } else if (size === "medium") {
            sizePrice = 1100;
        } else if (size === "large") {
            sizePrice = 1300;
        }
    } else if (flavour === "cheesy" || flavour === "Hawaiian") {
        if (size === "small") {
            sizePrice = 1000;
        } else if (size === "medium") {
            sizePrice = 1200;
        } else if (size === "large") {
            sizePrice = 1400;
        }
    }
    var crustType;
    if (crust === "stuffed") {
        crustType = 250;
    } else if (crust === "cheesy") {
        crustType = 350;
    } else if (crust === "crispy") {
       crustType = 200;
    } else if (crust === "gluten-free") {
        crustType = 400;
    }
    var toppinglist = $("input[name='topping']:checked").length;
    if (size === "small") {
        var toppingPrice = toppinglist * 50;
    } else if (size === "medium") {
        var toppingPrice = toppinglist * 80;
    } else if (size === "large") {
        var toppingPrice = toppinglist * 100;
    }

    var price = parseInt(sizePrice + crustType + toppingPrice);
    var totalPrice = parseInt(price * number);
    $(".delivery-total").text(totalPrice);
   $(".customer").text(name);

    console.log(totalPrice);
    $(".pname").append(flavour);
    $(".crustype").append(crust);
    $(".psize").append(size);
    $(".tot").append(totalPrice);
    $(".no").append(number);
    $(".top").append(toppings);
}
$(document).ready(function(){
    $("#order").click(function(){
        $(".form-list").hide(1000);
        $(".order-list").show(1000);
    });
    $("#checkout").click(function(){
        $(".order-list").hide();
        $(".choose-option").show();
    });

    $("#request-delivery").click(function(){
        $(".choose-option").hide();
        $(".deliveries").show();
    });
$("#pick-up").click(function(){
    $(".choose-option").hide();
    $(".pickup-statement").show();
})
   
});
// function submitOrder()
//     $(".form-list").hide(1000);
//     $(".order-list").show(1000);
// }
function deliveryConfirmed(){
    var place = document.getElementById("place").value;
    var phone = document.getElementById("phone").value;


    $(".location").text(place);
$(".phone-no").text(phone);
 $(".deliveries").hide();
 $(".statement").show();
}