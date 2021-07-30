        var uName= $('#name').val();
        var pSize= $('#pizzaSize').val();
        var crust=$('#crust').val();
        var noOfPizza=$('#noOfPizza').val()
        var delivery=$('#delivery').val()
        var pick=$('#pick').val()

$(document).ready(function(){
    var uname=$('#name').val();
        
    //Show delivery form
    $('#delivery').click(function(){
        $('.del-details').show();
    })
    // Hide delivery Form
    $('#pick').click(function(){
        $('.del-details').hide();
    })
    // Display input
    $('.cinputs').submit(function(event){
        

        //event.preventDefault();
        

    })
    $('#checkdetails').click(function(){
     
        
        $('#nameOut').append("Dear "+uName+('\n'))
        $('#sizeOut').append("You Ordered "+pSize)
        $('#crustOut').append("With "+crust+" as toppings")
      
    })
    


   
})