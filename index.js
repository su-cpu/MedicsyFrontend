
          document.addEventListener("DOMContentLoaded",() => {
            const recentImageDataUrl = localStorage.getItem("recent-image");
            
            if(recentImageDataUrl){
                document.querySelector("#imgPreview").setAttribute("src", recentImageDataUrl);
            }
          })

       
       
        //to remove the history of the local storage
        document.getElementById('clear').addEventListener('click',() => {
            localStorage.removeItem('username')
            localStorage.removeItem('email')
            localStorage.removeItem('password')
        })
       