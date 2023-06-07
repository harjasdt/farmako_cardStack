document.getElementById("card1").classList.add("initial_pos_card1");
document.getElementById("card2").classList.add("initial_pos_card2");
document.getElementById("card3").classList.add("initial_pos_card3");
document.getElementById("card4").classList.add("initial_pos_card4");


window.addEventListener("scroll", function(event){
    var scroll=this.scrollY;
    console.log(scroll);
    document.getElementById("cord").innerHTML="Scroll Coordinates:-"+scroll;

    if(scroll<270){
        // ADDING NORMAL CLASSES
        document.getElementById("card1").classList.add("initial_pos_card1");
        document.getElementById("card2").classList.add("initial_pos_card2");
        document.getElementById("card3").classList.add("initial_pos_card3");
        document.getElementById("card4").classList.add("initial_pos_card4");

        // DELETING PHASE 1 CHANGES

        document.getElementById("card1").classList.remove("final_pos");

        document.getElementById("card2").classList.remove("next_pos_card2");

        // DELETING PASE 2 CHANGES
        document.getElementById("card2").classList.remove("final_pos");

        document.getElementById("card3").classList.remove("next_pos_card3");
        

    }

        // PHASE 1
    else if(scroll>=270 && scroll<551 ){
        document.getElementById("card1").classList.remove("initial_pos_card1");
        document.getElementById("card1").classList.add("final_pos");

        document.getElementById("card2").classList.remove("initial_pos_card2");
        document.getElementById("card2").classList.add("next_pos_card2");

        // DELETING PASE 2 CHANGES
        document.getElementById("card2").classList.remove("final_pos");

        document.getElementById("card3").classList.remove("next_pos_card3");
        document.getElementById("card3").classList.add("initial_pos_card3");

    }

    // PHASE 2
    else if(scroll>=551 && scroll<864){
        document.getElementById("card2").classList.remove("next_pos_card2");
        document.getElementById("card2").classList.add("final_pos");

        document.getElementById("card3").classList.remove("initial_pos_card3");
        document.getElementById("card3").classList.add("next_pos_card3");

        //DELETING PHASE 3 CHANGES
        document.getElementById("card3").classList.remove("final_pos");

        document.getElementById("card4").classList.add("initial_pos_card4");
        document.getElementById("card4").classList.remove("next_pos_card4");


    }

    //PHASE 3
    else if(scroll>=864 && scroll<1184){
        document.getElementById("card3").classList.remove("next_pos_card3");
        document.getElementById("card3").classList.add("final_pos");

        document.getElementById("card4").classList.remove("initial_pos_card4");
        document.getElementById("card4").classList.add("next_pos_card4");

        //DELETING CHNAGES OF PHASE 4
        document.getElementById("card4").classList.remove("final_pos");

        document.getElementById("card1").style.opacity=1;
        document.getElementById("card2").style.opacity=1;
        document.getElementById("card3").style.opacity=1;

    }

    //FINAL PHASE
    else if(scroll>=1184){
        
        document.getElementById("card1").style.opacity=0;
        document.getElementById("card2").style.opacity=0;
        document.getElementById("card3").style.opacity=0;
        

        


      
    }

  });
