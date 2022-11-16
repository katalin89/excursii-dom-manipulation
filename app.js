let btnSubmit=document.querySelector('.submit');

let listContainer=document.querySelector('.container');
let inp=document.getElementById('in');
let inp2=document.getElementById('in2');
let inp3=document.getElementById('in3');

btnSubmit.addEventListener("click",()=>{
    let sub=createElement(inp.value,inp2.value,inp3.value);
    listContainer.appendChild(sub);
});

listContainer.addEventListener("click",(e)=>{
    let ob=e.target;

    if(ob.classList.contains("remove")){
        let div=ob.parentNode.parentNode;
        listContainer.removeChild(div);
    }
})

let checkB=document.querySelector('.view-disponibil');
let dispCard=document.querySelector('.check-disponibil');

checkB.addEventListener("click",()=>{
    if(checkB.checked){
        hideUnDisponibil(listContainer.children);
    }else{
        showAll(listContainer.children);
    }
});

listContainer.addEventListener("click",(e)=>{
    let ob=e.target;//pe cine apesi
    if(ob.classList.contains("edit")){

        let card=ob.parentNode.parentNode;//cardul intreg
      
        let text =ob.parentNode.parentNode.children[0].textContent;//h1
        let text2=ob.parentNode.parentNode.children[1].textContent;//p
        let text3=ob.parentNode.parentNode.children[2].textContent;
        console.log("text3 " +text3);
        console.log("text2" + text2);

        let inpt= document.createElement("input");
        let inpt2 = document.createElement("input");
        let inpt3 = document.createElement("input");

        
        inpt.type="text";
        inpt2.type="text";
        inpt3.type="text";
        
        console.log(inpt);
        inpt.value=text;
        inpt2.value=text2;
        inpt3.value=text3;

        console.log(inpt.value);

        let children=card.children[0];
        let children2=card.children[1];
        let children3=card.children[2];

        card.insertBefore(inpt,children);//inseram inainte de primul element un rand  nou care e un input
        card.insertBefore(inpt2,children2);
        card.insertBefore(inpt3,children3);
         
        card.removeChild(children);
        card.removeChild(children2);
        card.removeChild(children3);

        ob.textContent="save";//butonul edit devine save
        ob.classList.remove("edit");
        ob.classList.add("save");
    } else if(ob.classList.contains('save')){
        let card=ob.parentNode.parentNode;
        let text=ob.parentNode.parentNode.children[0].value;//ce am scris in input
        let text2=ob.parentNode.parentNode.children[1].value;//ce am scris in input
        let text3=ob.parentNode.parentNode.children[2].value;//ce am scris in input

        let h1=document.createElement("h1","p","p");//va afisa primul parametru "h1"
        h1.textContent=text;//tagul si ce am scris in interiorul inputului

        let h2=document.createElement("p","p","p");//va afisa primul parametru "h1"
        h2.textContent=text2;//tagul si ce am scris in interiorul inputului

        let h3=document.createElement("p","p","p");//va afisa primul parametru "h1"
        h3.textContent=text3;//tagul si ce am scris in interiorul inputului

        let children=card.children[0];//<input type ="text">
        let children2=card.children[1];//<input type ="text">
        let children3=card.children[2];//<input type ="text">

        card.insertBefore(h1,children);
        card.insertBefore(h2,children2);
        card.insertBefore(h3,children3);

        card.removeChild(children);
        card.removeChild(children2);
        card.removeChild(children3);

        ob.textContent="edit";
        ob.classList.remove("save");
        ob.classList.add("edit");
    }
});