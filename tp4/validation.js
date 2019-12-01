console.log( "DOM ready!" );

$( function() {
    $( "#datepicker" ).datepicker({
        altFormat: "dd-mm-yy",
        maxDate: "+0d +0m +0y"
                });
    $("#name").mouseleave(function(){
        $("#pname").html('<p>'+ $("#name").val().length +'car</p\>')
    });
    $("#firstName").mouseleave(function(){
        $("#pfirstName").html('<p>'+ $("#firstName").val().length +'car</p\>')
                    });
    $("#datepicker").mouseleave(function(){
        $("#pdatepicker").html('<p>'+ $("#datepicker").val().length +'car</p\>')
                    });
    $("#mail").mouseleave(function(){
        $("#pmail").html('<p>'+ $("#mail").val().length +'car</p\>')
                    });
                        } );

$( document ).ready(function() {
    var validate = (function(){
                $("#bt").click(function(){
             var
                name = $("#name").val(),
                firstname = $("#firstName").val(),
                datepicker = $("#datepicker").val(),
                address =$("#address").val(),
                mail = $("#mail").val();
                if($("#name").val().length==0 || $("#firstName").val().length==0 || $("#datepicker").val().length==0 || 
                   $("#address").val().length==0 || $("#mail").val().length==0) {  
                  $("#valid").html('<div  style="margin-left:150px; background-color:#e9ebee; width: 350px; height: 50px;">'+'<p style="color:red; text-align:center; padding-top:10px;">Veuillez remplir tout les champs svp</p\>'+'</div\>');
              
                }
                else if($("input").val().length != 0){
                $("#valid").html('<div  style="margin-left:150px; background-color:#e9ebee; width: 350px; height: 50px;">'+'<p style="color:green; text-align:center; padding-top:10px;">'+'<strong> Bravo !</strong\>'+'Le Formulaire est Bien Sauvegardé</p\>'+'</div\>');
                document.innerHTML="";
                contactStore.add(name, firstname, datepicker, address, mail);
                contactList = contactStore.getList();
                document.querySelector("table tbody").innerHTML = "";
                for (var i in contactList) {
                  document.querySelector("table tbody").innerHTML =document.querySelector("table tbody").innerHTML +
                  '<td>' +contactList[i].name + '</td>' + 
                  '<td>' + contactList[i].firstname + '</td>'+ 
                  '<td>'+ $("#datepicker").val() +'</td>'+
                  '<td>'+ $("#address").val()  +'</td>'+
                  '<td style="color:blue;">'+contactList[i].mail+'</td>';
                    
                    
                }
        
                }
 });
     
    })();
});

