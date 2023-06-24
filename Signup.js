            function validateusername(){  
            var name=document.uid.name.value;    
            if (name==null || name==""){  
            alert("Name can't be blank");  
            return false;  
            }else if(uid.length>6){  
            alert("User Name must be at least 6 characters long.");  
            return false;  
            }  
            }   

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

            function myFunction() {
            const inpObj = document.getElementById("id1");
            if (!inpObj.checkValidity()) {
            document.getElementById("demo").innerHTML = inpObj.validationMessage;
            }
            }           