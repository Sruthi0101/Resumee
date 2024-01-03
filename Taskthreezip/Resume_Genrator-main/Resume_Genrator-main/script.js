
// function addNewWEField()
// {
    
//    let newNode=document.createElement('textarea');
//    newNode.classList.add('form-control');
// newNode.classList.add('weField');
// newNode.setAttribute("rows",3);
// newNode.classList.add('mt-2');
// newNode.setAttribute('placeholder','Enter here');

// let weAddButtonOb =document.getElementById("weAddButton");
// let weOb=document.getElementById("we");


// weOb.insertBefore(newNode,weAddButtonOb);

// }

function addNewQuali()
{
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
 newNode.classList.add('eqField');
 newNode.setAttribute("rows",3);
 newNode.classList.add('mt-2');
 newNode.setAttribute('placeholder','Enter here');
 
 let weAddButtonOb =document.getElementById("aqAddButton");
 let weOb=document.getElementById("Aq");
 
 
 weOb.insertBefore(newNode,weAddButtonOb);


}

function addNewQuali2()
{
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
 newNode.classList.add('eqField2');
 newNode.setAttribute("rows",3);
 newNode.classList.add('mt-2');
 newNode.setAttribute('placeholder','Enter here');
 
 let weAddButtonOb =document.getElementById("aqAddButton2");
 let weOb=document.getElementById("Aq2");
 
 
 weOb.insertBefore(newNode,weAddButtonOb);


}



function generateCV()
{
   let nameField=document.getElementById('nameField').value;
   let nameT1=document.getElementById('nameT1');
   nameT1.innerHTML=nameField;
   

    document.getElementById('nameT2').innerHTML=document.getElementById('nameField').value;

    document.getElementById('contactT').innerHTML=document.getElementById('contactField').value;

    document.getElementById('addressT').innerHTML=document.getElementById('addressField').value;

    document.getElementById('githubT').innerHTML=document.getElementById('gbField').value;
    document.getElementById('linkedT').innerHTML=document.getElementById('linkedInField').value;
    document.getElementById('objectiveT').innerHTML=document.getElementById('objectiveField').value
    let imageInput = document.querySelector('.image');
    let selectedImage = imageInput.files[0];

    if (selectedImage) {
        let reader = new FileReader();
        reader.onload = function (e) {
            let cvImage = document.querySelector('.myimg');
            cvImage.src = e.target.result;
        };
        reader.readAsDataURL(selectedImage);
    }


//    let wes= document.getElementsByClassName('weField');

//    let s="";


//  for(let e of wes){
 
//    s= s + `<li>  ${e.value} </li> `;
//  }
// document.getElementById("weT").innerHTML=s;





let acq= document.getElementsByClassName('eqField');

let st="";
for(let e of acq)
{
   st=st + `<li> ${e.value} </li>`;
}

document.getElementById("aqT").innerHTML=st;


let acq2= document.getElementsByClassName('eqField2');

let st2="";
for(let e of acq2)
{
   st2=st2 + `<li> ${e.value} </li>`;
}

document.getElementById("aqT2").innerHTML=st2;


document.getElementById('cv-form').style.display='none'
document.getElementById('cv-template').style.display='block'



function printCV(){
    window.print();
}


}


function printCV(){
    window.print();
}




