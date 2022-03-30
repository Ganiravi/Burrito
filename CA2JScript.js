	//first function to get access the valid and required input from users.
	function login()
	{
			
			//Username cannot be empty
			if (document.getElementById("username").value==""){
				alert("✔️ Username must be filled");
				return false;
			}
			
			//Password must be 9 characters in length
			else if (document.getElementById("password").value <= "9" ){
				alert ("🔑 Please Enter your password with 9 characters");
				return false;
			}
			
			//Selection of size cannot be empty			
			else if(document.getElementById("size").value=="0.00"){
				alert("⚖️ Please select the size");
				return false;
			}
			
			//Number of quantity must be selected, default number only can feed
			else if(document.getElementById("quantity").value==""){
				alert("🧺 Please select the quantity");
				return false;
			}
			
			//Suggestion for discount code before placing the order
			else if(document.getElementById("discount").value==""){
				alert("Enter the 'MexTexGood' promo code for 10% discount 💰 if required");
				return false;
			}
			
			//only accept the valid discound code which is MexTexGood, if not advise to enter correct code.
			else if (document.getElementById("discount").value !="MexTexGood"){
				alert("🚫 Enter the correct discount code");
				return false;
			}
			
			//after placing the discount code the process of online order will show alert with update status
			else if (document.getElementById("discount").value =="MexTexGood"){
				alert("🥳 Congrats you got 10% discount on your total bill💶.\n👍 Your Order has been Placed ✔️ \n 🤗 Thank you for Choosing Mr. Burrito's 🌯 ");
				return true;
			}
			
	//second function to perform the calculation part upon selection of respective size and its quantity		
	}
	function calcTotal()
	{
			//Warning alert upon selection on Supersize Burrito
			if (document.getElementById("size").value =="17.50"){
				alert ("⚠️Warning: For your health and safety reason, be concious on SuperSize order");
			} 
			//calculating variables has been decleared to perform the calculation
			var total=0;
			var price= document.getElementById("size").value;
			var amount = document.getElementById("quantity").value;
										
			//performing calculation as per selected size and number of quantity
			if (price ==7.00){
				total = amount * 7.00;
			} 
			else if (price ==9.00){
				total = amount *  9.00;
			} 
			else if (price == 17.50){
				total = amount *  17.50;
			}
			
			//final calculation upon selection in case of quantity more than 0
			if(amount>0) {
				total=(price*amount);
			}
			
			//assigning value to total for index.html
			var divobj = document.getElementById('total');
			divobj.value = total;
				
	}
		
	
	