function createElement(text,tip,pret){
    let div=document.createElement("div");

    div.classList.add("card");

    div.innerHTML=`
        <h1 class="destinatie">${text}</h1>
        <p class="tip">${tip}</p>
        <p class="pret"> ${pret}</p>

        <div class="disponibil">
            <p class="disp">Disponibil</p>
            <input type="checkbox" class="check-disponibil ">
        </div>
        <div class="buttons">
            <button cass="edit">edit</button>
            <button class="remove">remove</button>
        </div>
    
    `;
    return div
}

function hideUnDisponibil(arr){
   
    for(let i=0;i<arr.length;i++){
        let child=arr[i].querySelector('.check-disponibil');
        if(!child.checked){
              console.log(child);
           arr[i].style.display="none";
        }
    }
}

function showAll(arr){
    for(let i=0;i<arr.length;i++){
        let child=arr[i].querySelector('.check-disponibil');

        arr[i].style.display="inline-block";
    }
}

