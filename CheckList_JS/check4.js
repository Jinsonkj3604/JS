$(document).ready(function(){
    $("#taskbtn").click(function(){
        var fname = $("#put").val()
        $("#put").val("")
        if(fname != ''){
        $("#container").append('<div id="box1"><div id="head3">'+fname+ '&nbsp<button id="delete"><span class="glyphicon glyphicon-trash"></button><div id="values"><input type="text" id="input" placeholder="enter sub task"><button id="add"><span class="glyphicon glyphicon-pencil"></button></div></div></div>' )
        }
        $("#container").on("click","#delete",function(){
            $(this).parent().parent().remove()
        })
            

    })
    
    $("#container").on("click","#add",function(){
    var inp=$(this).siblings("#input").val()
    if(inp != ''){
    $(this).parent().append("<li>"+ inp +"<button id='ok'><span class='glyphicon glyphicon-ok'></button><button id ='del'><span class='glyphicon glyphicon-remove'></button></li>")
    $("#input[type='text']").val("")
    }
    // $("#input").val("")
    
    $("#container").on("click","#ok",function(){
        $(this).parent().css({"background-color":"#755374","text-decoration": "line-through","text-decoration-thickness": "4px"})
    })

    $("#container").on("click","#del",function(){
        $(this).parent().remove()
    })
   
    })
    
    
})
