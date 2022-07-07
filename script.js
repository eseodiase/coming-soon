
            window.onload=function(){
           var clik = document.querySelector(".clik") ;
           clik.onclick=function(){
          var header = document.getElementById("header");
          header.style.width="90px";
          header.style.height="50px";
          
          var main = document.getElementById ("main");
          main.style.display="block";
          main.style.width="100vw";
          clik.style.display ="none";
           }
            }
        
