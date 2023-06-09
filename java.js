
let cols = document.querySelectorAll(".col-11")
for (let i = 0; i < cols.length/* 6 */; i++ ) {
    let col = cols[i];
    let buy   = col.querySelector(".comande img")
    let table = document.querySelector(".col-33");
    var total = document.getElementById("total");

    //function onclick
    buy.onclick = function () {
        let imgg =col.querySelector(".col-111 img");
        let input = col.querySelector(".comande input");
        let prix = col.querySelector('.prix input');
        let title = col.querySelector(".col-11 > h1");

        let img1=new Image();img1.src="pngegg.png";
        let pobe=new Image();pobe.src="kk.png"; 
       
           //createlemte newelt
             const newElt = document.createElement("div");
                 newElt.appendChild(img1).style.width="4rem";
                 newElt.innerHTML +=  title.innerHTML;
                 newElt.innerHTML += input.value  +"x"+ prix.value+"dh";
                 newElt.appendChild(pobe);
             const elt = document.getElementById("txt");
             elt.appendChild(newElt);
             //style.cc
                 newElt.className="newelt-js";
                 pobe.className="pobe-js";
             
    //recherche



    //totale---totale---totale
         var a=0;
             a +=input.value*prix.value;
             total.textContent= "Total du panier :"+ a +" "+"dh";



      //rrrrrreeeeemmmmmmmmmoveeee
         pobe.onclick=function(){
         newElt.remove();
         }
    }

}














/*------------------------1-----------------
function col1(){
    var object = document.getElementById('txt')
    object.innerHTML = " <table id=khalid   class=kamal > <tr><td><img src=pngegg.png alt= ></td><td class=onwan1>kamal khaldihhh</td> <td class=taman1><h8 id=name></h8>x35</td><td><img  onclick=sup1() src=icons8-wastebasket-48.png alt=></td></tr></table>";
    document.getElementById('save')
        let myName = document.getElementById('namee').value;
        document.getElementById("name").innerHTML=myName;
    }
function sup1(){
    var kamal =document.getElementById('khalid').remove();  
}


/*-------------------------2------------------
function col2(){
    var object = document.getElementById('txt1')
    object.innerHTML = " <table id=khalid   class=kamal > <tr><td><img src=pngegg.png alt= ></td><td class=onwan1>kamal khaldihhh</td> <td class=taman1><h8 id=name1></h8>x42</td><td><img  onclick=sup2() src=icons8-wastebasket-48.png alt=></td></tr></table>";
    document.getElementById('save1')
        let myName = document.getElementById('namee1').value;
        document.getElementById("name1").innerHTML=myName;
    }
function sup2(){
    var kamal =document.getElementById('khalid').remove();  
}



-----------------------3----------------------------------
function col3(){
    var object = document.getElementById('txt2')
    object.innerHTML = " <table id=khalid   class=kamal > <tr><td><img src=pngegg.png alt= ></td><td class=onwan1>kamal khaldihhh</td> <td class=taman1><h8 id=name2></h8>x15</td><td><img  onclick=sup3() src=icons8-wastebasket-48.png alt=></td></tr></table>";
    document.getElementById('save2')
        let myName = document.getElementById('namee2').value;
        document.getElementById("name2").innerHTML=myName;
    }
function sup3(){
    var kamal =document.getElementById('khalid').remove();  
}

--------------------------4------------------------
function col4(){
    var object = document.getElementById('txt3')
    object.innerHTML = " <table id=khalid   class=kamal > <tr><td><img src=pngegg.png alt= ></td><td class=onwan1>kamal khaldihhh</td> <td class=taman1><h8 id=name3></h8>x25</td><td><img  onclick=sup4() src=icons8-wastebasket-48.png alt=></td></tr></table>";
    document.getElementById('save3')
        let myName = document.getElementById('namee3').value;
        document.getElementById("name3").innerHTML=myName;
    }
function sup4(){
    var kamal =document.getElementById('khalid').remove();  
}
--------------------------5------------------------
function col5(){
    var object = document.getElementById('txt4')
    object.innerHTML = " <table id=khalid   class=kamal > <tr><td><img src=pngegg.png alt= ></td><td class=onwan1>kamal khaldihhh</td> <td class=taman1><h8 id=name4></h8>x35</td><td><img  onclick=sup5() src=icons8-wastebasket-48.png alt=></td></tr></table>";
    document.getElementById('save4')
        let myName = document.getElementById('namee4').value;
        document.getElementById("name4").innerHTML=myName;
    }
function sup5(){
    var kamal =document.getElementById('khalid').remove();  
}
--------------------------6------------------------
function col6(){
    var object = document.getElementById('txt5')
    object.innerHTML = " <table id=khalid   class=kamal > <tr><td><img src=pngegg.png alt= ></td><td class=onwan1>kamal khaldihhh</td> <td class=taman1><h8 id=name5></h8>x25</td><td><img  onclick=sup6() src=icons8-wastebasket-48.png alt=></td></tr></table>";
    document.getElementById('save5')
        let myName = document.getElementById('namee5').value;
        document.getElementById("name5").innerHTML=myName;
    }
function sup6(){
    var kamal =document.getElementById('khalid').remove();  
}

*/
