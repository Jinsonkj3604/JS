$(document).ready(function(){

    $("#addcart1").click(function(){
        

        $(".product1").show()
        $(".p1").show()
        $("#p1total").text('88')
        $("#p1t").show()
        $("#totalamt").show()
        console.log('totalamnt showwwwwwwwwwww')
        var prt1=$("#p1total").text()
        var prt2=$("#p2total").text()
        var prt3=$("#p3total").text()
        console.log("assigning value")

        var tamt =parseFloat(prt1)+parseFloat(prt2)+parseFloat(prt3)
        $("#total").text(tamt)
        console.log("displaying amount")
        // $(".totalamt").show()

        alert(" ITEM ADDED TO CART ")

    });

    $("#addcart2").click(function(){
        
        $(".product2").show()
        $(".p2").show()
        $("#p2total").text('99')
        $("#p2t").show()
        $("#totalamt").show()
         
        var prt1=$("#p1total").text()
        var prt2=$("#p2total").text()
        var prt3=$("#p3total").text()
        var tamt =parseFloat(prt1)+parseFloat(prt2)+parseFloat(prt3)
        $("#total").text(tamt)
        // $(".totalamt").show()

        alert(" ITEM ADDED TO CART ")

    });

    $("#addcart3").click(function(){
        
        $(".product3").show()
        $(".p3").show()
        $("#p3total").text('65')
        $("#p3t").show()
        $("#totalamt").show()

        var prt1=$("#p1total").text()
        var prt2=$("#p2total").text()
        var prt3=$("#p3total").text()
        var tamt =parseFloat(prt1)+parseFloat(prt2)+parseFloat(prt3)
        $("#total").text(tamt)
        // $(".totalamt").show()

        alert(" ITEM ADDED TO CART ")

    });

    $("#viewcart").click(function(){
        $(".outerbody").hide()
        $("#cartbody").show()
        $(".cartcontainer").show()
        $(".ship_container").show()
        $(".valid_form").hide()

    });

    $("#goback").click(function(){
        $(".outerbody").show()
        $(".cartcontainer").hide()


    });

    $("#clear").click(function(){
        $("#cartbody").hide()
        $(".ship_container").hide()
        $(".totalamt").hide()
        $("#remove1").trigger('click')
        $("#remove2").trigger('click')
        $("#remove3").trigger('click')
        alert(" Cart Is Cleared ")
        $(".outerbody").show()
        $("#total").text('')

    });

    $("#remove1").click(function(){
        var tp= $("#p1total").text()
        var am= $("#total").text()
        var resetamt=parseFloat(am)-parseFloat(tp)
        $("#total").text(resetamt) 
        console.log("amount reseted1")
        var t= $("#total").text()

        $(".product1").hide()
        $(".p1").hide() 
        $("#p1total").text('0')
        $("#itemnos1").val('')
        if( t == 0){
        $("#totalamt").hide()
        }
        // $(".totalamt").hide()  
         

    });

    $("#remove2").click(function(){
        var tp= $("#p2total").text()
        var am= $("#total").text()
        var resetamt=parseFloat(am)-parseFloat(tp)
        $("#total").text(resetamt) 
        console.log("amount reseted2")
        var t= $("#total").text()

        $(".product2").hide()
        $(".p2").hide()
        $("#p2total").text('0')
        $("#itemnos2").val('')
        if( t == 0){
          $("#totalamt").hide()
          }
        // $("#totalamt").hide()
        // $(".totalamt").hide()       
        

    });

    $("#remove3").click(function(){
        var tp= $("#p3total").text()
        var am= $("#total").text()
        var resetamt=parseFloat(am)-parseFloat(tp)
        $("#total").text(resetamt) 
        console.log("amount reseted3")
        var t= $("#total").text()

        $(".product3").hide()
        $(".p3").hide() 
        $("#p3total").text('0')
        $("#itemnos3").val('') 
        if( t == 0){
          $("#totalamt").hide()
          } 
        // $("#totalamt").hide()   
        // $(".totalamt").hide()  

    });

    $("#itemnos1").keyup(function(){
        var noofqty= $("#itemnos1").val()
        if (noofqty>=0){
        $("#p1total").text('88')
        $("#p1qty").text(noofqty)
        var price = 88
        var ptotal = parseFloat(noofqty)*parseFloat(price)
        $("#p1total").text(ptotal)
        $("#p1t").show()
        // $("#itemnos1").val('')
        $("#totalamt").show()
        var pt1=$("#p1total").text()
        var pt2=$("#p2total").text()
        var pt3=$("#p3total").text()
        var tamount= parseFloat(pt1)+parseFloat(pt2)+parseFloat(pt3)
        $("#total").text(tamount)}
        else{
          alert('Negative value not valid !!')
        }
        // $("#payeble").text(tamount)  
    });

    $("#itemnos2").keyup(function(){
        var noofqty= $("#itemnos2").val()
        if(noofqty>=0){
        $("#p2total").text('99')
        $("#p2qty").text(noofqty)
        var price = 99
        var ptotal = parseFloat(noofqty)*parseFloat(price)
        $("#p2total").text(ptotal)
        $("#p2t").show()
        // $("#itemnos2").val("")
        $("#totalamt").show()
        var pt1=$("#p1total").text()
        var pt2=$("#p2total").text()
        var pt3=$("#p3total").text()
        var tamount= parseFloat(pt1)+parseFloat(pt2)+parseFloat(pt3)
        $("#total").text(tamount)}
        // $("#payeble").text(tamount)
        else{
          alert('negative value not valid !!')
        } 
    });

    $("#itemnos3").keyup(function(){
        var noofqty= $("#itemnos3").val()
        if(noofqty>=0){
        $("#p3total").text('65')
        $("#p3qty").text(noofqty)
        var price = 65
        var ptotal = parseFloat(noofqty)*parseFloat(price)
        $("#p3total").text(ptotal)
        $("#p3t").show()
        // $("#itemnos3").val('')
        $("#totalamt").show()
        var pt1=$("#p1total").text()
        var pt2=$("#p2total").text()
        var pt3=$("#p3total").text()
        var tamount= parseFloat(pt1)+parseFloat(pt2)+parseFloat(pt3)
        $("#total").text(tamount)}
        else{
          alert('Negative value not valid !!')
        }
        // $("#payeble").text(tamount) 
    });
     
    // $("#amount").click(function(){
    //     $(".total").show()
    //     var pt1=$("#p1total").text()
    //     var pt2=$("#p2total").text()
    //     var pt3=$("#p3total").text()
    //     var tamount= parseFloat(pt1)+parseFloat(pt2)+parseFloat(pt3)
    //     $("#total").text(tamount)
    //     $("#payeble").text(tamount)
    // });

    $("#val").click(function(){
        $(".valid_form").show()
        $(".ship_container").hide()

        var pay =$("#total").text()
        $("#payeble").text(pay)
        
    });

    $("#exit").click(function(){
        $(".valid_form").hide()
        $(".ship_container").show()

    });





    var $registerForm = $("#billingdetails");
    if ($registerForm.length){
     $registerForm.validate({
       rules:{
         fname:{
           required:true,
           minlength:3
         },
         email:{
           required:true,
           email:true
         },
         city:{
           required:true
         },
         mobile:{
           required:true,
           digits:true,
           maxlength:10,
           minlength:10
         },
         cardnumber:{
           required:true,
           digits:true
         },
         expmonth:{
           required:true,
           digits:true
         },
         expyear:{
           required:true,
           digits:true
         },
         cvv:{
           required:true,
           digits:true,
           minlength:3,
           maxlength:3
         }
       },
       messages:{
         name:{
           required:"name is mandatory !",
           minlength:"enter atlest 3 characters"
         },
         email:{
           required:"email is mandatory"
         },
         city:{
           required:" city is mandatory"
         },
         mobile:{
           required:"state is mandatory",
           digits:"enter digits only"
         },
         cardnumber:{
           required:"card number is",
           digits:"enter digits only"
         },
         expmonth:{
           required:"expmonth is mandatory",
           digits:"enter digits only"
         },
         expyear:{
           required:"expyear is mandatory",
           digits:"enter digits only"
         },
         cvv:{
           required:"cvv is mandatory",
           digits:"enter digits only",
           minlength:"enter only 3 digit number",
           maxlength:"enter only 3 digit number"

         }
       }
     });
   }

});

 
    