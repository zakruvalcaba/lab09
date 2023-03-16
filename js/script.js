// GET FORM AND TASK LIST FROM THE DOM
let form = document.querySelector('form')
let list = document.querySelector('ul')

// CHECK TO SEE IF THE 'NO TASKS' MESSAGE 
// SHOULD BE DISPLAYED WHEN THE APPLICATION LOADS
window.addEventListener('load', (e) => {
    checkMessageDisplay()
})

// ADD TASK
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()

    // GET VALUE FROM TEXT BOX
    let newItem = document.querySelector('#item').value

    // CREATE NEW LI
    let li = document.createElement('li')
    // ADD CLASS TO LI
    li.className = 'list-group-item'
    // CREATE NEW TEXT NODE BASED ON TASK USER ADDED TO FORM
    let text = document.createTextNode(newItem)
    // ADD TEXT TO LI
    li.appendChild(text)

    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('button')
    // ADD BOOTSTRAP CLASSES FOR A BUTTON
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete'
    // CREATE TEXT NODE FOR DELETE BUTTON AND SET IT TO 'X'
    let textDelete = document.createTextNode('X')
    // APPEND TEXT NODE TO DELETE BUTTON
    deleteBtn.appendChild(textDelete)
    // APPEND DELETE BUTTON TO LI
    li.appendChild(deleteBtn)

    // ADD LI TO UL 
    list.appendChild(li)

    // CLEAR THE TEXT BOX
    form.reset()

    // CHECK TO SEE IF THE 'NO TASKS' MESSAGE SHOULD BE DISPLAYED
    checkMessageDisplay()
})

list.addEventListener('click', (e) => {
    // CHECK AND SEE IF DELETE BUTTON WAS CLICKED ON BUBBLE
    if (e.target.classList.contains('delete')) {
        // DISPLAY CONFIRMATION OF DELETE TO THE USER
        if (confirm(`Are you sure you want to delete the ${e.target.parentElement.innerText} task?`)) {
            // REMOVE THE SELECTED LI 
            list.removeChild(e.target.parentElement)
            // CHECK TO SEE IF THE 'NO TASKS' MESSAGE SHOULD BE DISPLAYED
            checkMessageDisplay()
        }
    }
})

// FUNCTION TO SHOW OR HIDE 'NO ROWS' ALERT
function checkMessageDisplay() {
    if (list.children.length == 0) {
        document.querySelector('span').classList.add('show')
    } else {
        document.querySelector('span').classList.remove('show')
    }
}