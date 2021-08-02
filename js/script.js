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