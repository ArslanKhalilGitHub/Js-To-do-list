
let inputVal = document.getElementById("model-note")
const addNoteBtn = document.getElementById("addNote-Btn")
const DeleteBtn = document.getElementById("Dlt-Btn")
const Model = document.getElementById("model")
const ShowModel = document.getElementById("ShowBtn")



ShowModel.addEventListener('click', function(){
    // Model.style.display = 'block'
    Model.classList.toggle('show')
   
})

addNoteBtn.addEventListener('click', () => {
updateLSdata()
inputVal.value = ""

 
})


function updateLSdata(){
    let inputValue = inputVal.value

    if(inputValue.trim() != 0){
        let localItems = JSON.parse(localStorage.getItem('Notes'))
 
        if(localItems === null){
            taskList = []
        }else{
        taskList = localItems;
        }
            taskList.push(inputValue)
            console.log(taskList)
            localStorage.setItem('Notes', JSON.stringify(taskList))   
    }

    ShowList(); 
}



function ShowList(){
        
    let outPut = '';
    let taskListShow = document.getElementById("container")

    let localItems = JSON.parse(localStorage.getItem('Notes'))
 
    if(localItems === null){
        taskList = []
    }else{
    taskList = localItems;
    inputValue = ""
    }

    taskList.forEach((data, index) => {
        outPut += `
        <div class="card-body">
        <div class="note">
            <p id="show-Note" class="show-Note">${data}</p>
            <i class="far fa-trash-alt" id="Dlt-Btn" onclick="deleteItems(${index})"></i>
        </div>
    </div>   
        `    
    });

    taskListShow.innerHTML = outPut;
}

ShowList();

function deleteItems(index){
    
let localItems = JSON.parse(localStorage.getItem('Notes'))
taskList.splice(index, 1)
localStorage.setItem('Notes', JSON.stringify(taskList))

ShowList();

}







