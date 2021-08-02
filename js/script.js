function submitOrder(){
    var flavour = document.getElementById('taste').value;
    var crust = document.getElementById('crusts').value;
    var size = document.getElementById('sizer').value;
    var number = document.getElementById('numbers').value;
    var toppings = [];

   $.each($("input[name='topping']:checked"),
   function(){
       toppings.push($(this).val())
   }
   
   );
}
var sizePrice;
    if (flavour === "Barbequed" || flavour==="Bufallo"||flavour==="Margheritta"){
        if(size==="small"){
            sizePrice = 800;
        }
        else if(size === "medium"){
            sizePrice = 1000;
        }
        else if(size==="large"){
            sizePrice=1200;
        }
    }
    else if (flavour === "Meat" || flavour==="Pepperoni"||flavour==="Vegetable"){
        if(size==="small"){
            sizePrice = 900;
        }
        else if(size === "medium"){
            sizePrice = 1100;
        }
        else if(size==="large"){
            sizePrice=1300;
        }
    }
     else if  (flavour === "cheesy" || flavour==="Hawaiian"){
        if(size==="small"){
            sizePrice = 1000;
        }
        else if(size === "medium"){
            sizePrice = 1200;
        }
        else if(size === "large"){
            sizePrice = 1400;
        }
    }
    var crustType;
    if (crust === "stuffed"){
            crustType= 250;
    }
        else if(crust === "cheesy"){
            crustType = 350;
        }
        else if(crust==="crispy"){
            sizePrice=200;
        }
        else if(crust==="gluten-free"){
            sizePrice=400;
        }
        var toppinglist = $("input[name='topping']:checked").length;
        if(size==="small"){
            var toppingPrice = toppinglist*50;
        }
        else if(size ==="medium"){
            var toppingPrice = toppinglist*80;
        }
        else if(size ==="large"){
            var toppingPrice = toppinglist*100;
        }
        alert(toppingPrice)   
    var price = parseInt(sizePrice+crustType+toppingPrice);
    var totalPrice =parseInt (price*number);
    alert(totalPrice);
   
    console.log(totalPrice);