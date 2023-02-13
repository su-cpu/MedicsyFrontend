
			function required() {
					var empt = document.forms["form1"]["name"].value;
					var empt1 = document.forms["form1"]["email"].value;
					var empt2 = document.forms["form1"]["password"].value;
					if (empt == "") {
						alert("Please enter name");
						return false;
					}
					if (empt1 == "") {
						alert("Please enter email");
						return false;
					}
					if (empt2 == "") {
						alert("Please enter email");
						return false;
					}
					return true;
				}
			function signup() {
				if(required()==true){
				let username = document.getElementById('name').value;
				let email = document.getElementById('email').value;
				let password = document.getElementById('password').value;
				/*let profile = document.getElementById('profile').value;*/

				localStorage.setItem('username', username);
				localStorage.setItem('email', email);
				localStorage.setItem('password', password);

				
				window.location.href = "login.html";
				}
				const profile = document.querySelector("#profile")
			var upload_image = " ";
			profile.addEventListener("change", function () {
				console.log(profile.value);
				const reader = new FileReader();
				reader.addEventListener("load", () => {
					upload_image = reader.result;
					document.querySelector("#profile").style.backgroundImage = `url(${upload_image})`;
					localStorage.setItem("recent-image", reader.result);
				})
				reader.readAsDataURL(this.files[0]);
			})
				
			}


