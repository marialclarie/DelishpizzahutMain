

$(document).ready(function(){
    //Show delivery form
    $('#delivery').click(function(){
        $('.del-details').show()
    })
    // Hide delivery Form
    $('#pick').click(function(){
        $('.del-details').hide()
    })
    // Display input
    $('.cinputs').submit(function(){
        var uname=$('#name').val()
        var pSize= $('#pizzaSize').val()
        var crust=$('')
        alert(uname+pSize)
    })



   
})