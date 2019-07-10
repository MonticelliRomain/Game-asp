

 var bckg2 = document.querySelector(".body2");
 var magician = document.querySelector(".magician");
 var elf = document.querySelector(".elf");       
 var warrior = document.querySelector(".warrior");
 
                       
    magician.addEventListener("mouseover", function( event ) { 
        document.querySelector(".magicianImg").style.display="block"
        document.querySelector(".elfImg").style.display="none";
        document.querySelector(".warriorImg").style.display="none";
        }
    );
    magician.addEventListener("click", function ( event ){
        audio2.play();
        audio4.play();
        
        document.querySelector(".magicianSpecs").style.display="block";
        document.querySelector(".choseContent").style.display="none";
        document.querySelector(".bckgChosen").style.display = "block";
        document.querySelector(".magicianChosen").style.display = "block";
        document.querySelector(".magicianImg").style.width="8%";
        document.querySelector(".darkEyes").style.display="block";
        
        bckg2.style.display="block";
        }
    );
    
    
    elf.addEventListener("mouseover", function( event ) { 
        document.querySelector(".elfImg").style.display="block";
        document.querySelector(".magicianImg").style.display="none";
        document.querySelector(".warriorImg").style.display="none";
        }
    );
    elf.addEventListener("click", function ( event ){
        audio3.play();
        audio4.play();
        
        document.querySelector(".elfSpecs").style.display="block";
        document.querySelector(".choseContent").style.display="none";
        document.querySelector(".bckgChosen").style.display = "block";
        document.querySelector(".elfChosen").style.display = "block";
        document.querySelector(".elfImg").style.width="8%";
        document.querySelector(".darkEyes").style.display="block";
        
        bckg2.style.display="block";
        }
    );
    
    
    warrior.addEventListener("mouseover", function( event ) { 
        document.querySelector(".warriorImg").style.display="block";
        document.querySelector(".elfImg").style.display="none";
        document.querySelector(".magicianImg").style.display="none";
        }
    );
    warrior.addEventListener("click", function ( event ){
        audio.play();
        audio4.play();
        
        document.querySelector(".warriorSpecs").style.display="block";
        document.querySelector(".choseContent").style.display="none";
        document.querySelector(".bckgChosen").style.display = "block";
        document.querySelector(".warriorChosen").style.display = "block";
        document.querySelector(".warriorImg").style.width="8%";
        document.querySelector(".darkEyes").style.display="block";
        
        bckg2.style.display="block";        
        }
    );