let Add=document.getElementsByClassName("add")
let Change=document.querySelector("h3")
// let isremove=document.getElementsByClassName("remove")

let checkKar=0;

const remove=()=>{
    Add[0].innerText="Remove"
    Add[0].style.backgroundColor ="red"
}
Add[0].addEventListener('click',()=>{
    if(checkKar==0){
        Change.innerHTML = "Friends"
        Change.style.color="green"
        checkKar=1;
        remove();
    }  
    else{
        Change.innerHTML = "Stranger"
        Change.style.color="red"
        checkKar=0;
        Add[0].innerText="AddFreind"
        Add[0].style.backgroundColor ="green"
    }
})



// isremove[0].addEventListener("click",()=>{
//     Change.innerHTML= "Stranger"
//     Change.style.color="red"
// })