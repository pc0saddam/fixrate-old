function validateemail()
{
 var x=document.email.email.value;
 var atpostion=x.indexOf("@");
 var dotpostion=x.lastIndexOf(".");
 if (name==null || name==""){  
 alert("Name can't be blank");  
 return false;  
 }else if(password.length<6){  
 alert("Password must be at least 6 characters long.");  
 return false;  
 }  
 if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length)
   {
     alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
     return false;
   }
} 

function validatepassword()
{
  var x=document.password.password.value;
  var atcapitalpostion=x.indexOf("Z");
  var atsmallposition=x.secondIndexOf("c");
  var atnumberpostion=x.thirdIndexOf("9");
  var atspecialpostion=x.fourthIndexOf("@");
  if (name==null || name==""){  
  alert("Name can't be blank");  
  return false;  
  }else if(password.length<6){  
  alert("Password must be at least 6 characters long.");  
  return false;  
  }  
  if (atpostion<1 || capitalposition+2 || smalldpostion+3 || specialpostion+4>=x.lenght)
  {
    alert("Please enter a valid password \n atpostion:"+atpostion+"\n atcapitalposition:"+capitalposition+"\n atsmallpostion:"+smallpostion+"\n atspecialpostion:"+specialpostion);
    return false;
  } 
}  

function myFunction() {
    const inpObj = document.getElementById("id1");
    if (!inpObj.checkValidity()) {
    document.getElementById("demo").innerHTML = inpObj.validationMessage;
  }
}