const item = document.querySelector('#item');
const toDOBox = document.querySelector('#to-do-box');

item.addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        addToDo(this.value);
        this.value = "";
    }
})

const addToDo = (items) =>{
    const listItem = document.createElement("li");
    listItem.innerHTML = ` ${items} 
    <i class ="fa fa-trash-o fa-fw"></i> `;

    listItem.addEventListener("click", function() {
        this.classList.toggle("done");
    })

    listItem.querySelector("i").addEventListener("click", function(){
        listItem.remove();
    })

    toDOBox.appendChild(listItem);
}