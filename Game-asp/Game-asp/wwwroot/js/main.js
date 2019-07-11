var bckg2 = document.querySelector(".body2");
var magician = document.querySelector(".magician");
var elf = document.querySelector(".elf");       
var warrior = document.querySelector(".warrior");



var bckgChosen = document.querySelector(".bckgChosen");                                    
                                                      
var magicianChosen = document.querySelector('.magicianChosen');
var elfChosen = document.querySelector(".elfChosen");
var warriorChosen = document.querySelector(".warriorChosen");

bckgChosen.addEventListener('webkitAnimationEnd', function(){
    this.style.webkitAnimationName = '';
}, false);
magicianChosen.addEventListener('webkitAnimationEnd', function(){
    this.style.webkitAnimationName = '';
}, false);

magician.onclick = function(){
    audio2.play();
    audio4.play();
    magicianChosen.style.webkitAnimationName = 'coming';
    bckgChosen.style.webkitAnimationName = 'disappear';
    // you'll probably want to preventDefault here.
    document.querySelector(".magicianChosen").style.display = "block";
    document.querySelector(".bckgChosen").style.display="block"   
    document.querySelector(".chooseHero").style.display = "none";
    document.querySelector(".chooseHero2").style.display = "block";
    bckg2.style.display="block";
};                                                                     
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
magician.addEventListener("mouseover", function( event ) { 
    document.querySelector(".magicianImg").style.display="block"
    document.querySelector(".elfImg").style.display="none";
    document.querySelector(".warriorImg").style.display="none";
    }
);


elfChosen.addEventListener('webkitAnimationEnd', function(){
    this.style.webkitAnimationName = '';
}, false);

elf.onclick = function(){
    audio3.play();
    audio4.play();
    elfChosen.style.webkitAnimationName = 'coming';
    bckgChosen.style.webkitAnimationName = 'disappear';
    document.querySelector(".bckgChosen").style.display = "block";
    document.querySelector(".chooseHero").style.display = "none";
    document.querySelector(".chooseHero2").style.display = "block";
    document.querySelector(".elfChosen").style.display = "block";
    bckg2.style.display="block";
    }
elf.addEventListener("mouseover", function( event ) { 
    document.querySelector(".elfImg").style.display="block";
    document.querySelector(".magicianImg").style.display="none";
    document.querySelector(".warriorImg").style.display="none";
    }
);






warriorChosen.addEventListener('webkitAnimationEnd', function(){
    this.style.webkitAnimationName = '';
}, false);

warrior.onclick = function(){
    audio.play();
    audio4.play();
    warriorChosen.style.webkitAnimationName = 'coming';
    bckgChosen.style.webkitAnimationName = 'disappear';
    document.querySelector(".bckgChosen").style.display = "block";
    document.querySelector(".chooseHero").style.display = "none";
    document.querySelector(".chooseHero2").style.display = "block";
    document.querySelector(".warriorChosen").style.display = "block";
    bckg2.style.display="block";
    }
warrior.addEventListener("mouseover", function( event ) { 
    document.querySelector(".warriorImg").style.display="block";
    document.querySelector(".elfImg").style.display="none";
    document.querySelector(".magicianImg").style.display="none";
    }
);
