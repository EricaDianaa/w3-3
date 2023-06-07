let toDoListForm=document.getElementById("form")
toDoListForm.addEventListener("submit",function(e){
   e.preventDefault()
      const activity = document.getElementById("activity")
 
  const activiy1 = activity.value

  let documentActivity = document.createElement('div')
  documentActivity.classList.add("newActivity")

documentActivity.innerHTML = `
    <p>${activiy1} </p> 
    <button>ELIMINA</button>
    `
    const saveActivity= document.getElementById("saveactivity")
saveActivity.appendChild(documentActivity)
const deleteButton=document.querySelectorAll("#saveactivity")
deleteButton.forEach(button=>{
  button.addEventListener("click",function(e){
    let buttonclick= e.target
    let clickMe=buttonclick.parentElement
    clickMe.remove()

    const deleteP=document.querySelectorAll("#saveactivity")
    deleteP.forEach(p=>{
p.addEventListener("click",function(p){
  let addline=p.target
  let click1=addline.parentElement
  click1.style.textDecoration="line-through;"
})
    })
  })
})
activity.value=""
})