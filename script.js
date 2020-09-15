    var x = document.getElementById("login")
    var y = document.getElementById("signup")
    var z = document.getElementById("btn")

    function signup(){
        x.style.left = "-400px";
        y.style.left = "50px";
		z.style.left = "110px";
    }
    function login(){
        x.style.left = "50px";
        y.style.left = "450px";
        z.style.left = "0";
    }




// Function to check Whether both passwords 
			// is same or not. 
			function checkPassword(form) { 
				password1 = form.password1.value; 
				password2 = form.password2.value; 

				// If password not entered 
				if (password1 == '') 
					alert ("Please enter Password"); 
					
				// If confirm password not entered 
				else if (password2 == '') 
					alert ("Please enter confirm password"); 
					
				// If Not same return False.	 
				else if (password1 != password2) { 
					alert ("\nPassword did not match: Please try again...") 
					return false; 
				} 
				else if (5 > password1.length) {
					alert("password should be atleast 6 digit ")
					return false; 
				}
				// If same return True. 
				//else{ 
				//	alert("Password Match: Welcome to GeeksforGeeks!") 
					//return true; 
				//} 
            } 

