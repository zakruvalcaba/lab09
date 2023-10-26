// GET THE FORM AND TASK LIST FROM THE DOM
let form = document.getElementById('addForm')
let list = document.getElementById('items')

// CHECK TO SEE IF THE 'NO TASKS' MESSAGE SHOULD BE DISPLAYED
checkMessageDisplay()

// ADD TASK
form.addEventListener('submit', (e) => {
    // PREVENT THE FORM SUBMISSION
    e.preventDefault()

    // GET THE VALUE FROM THE TEXT BOX
    let newItem = document.getElementById('item').value

    // CREATE NEW LI
    let li = document.createElement('li')
    // ADD CLASS TO LI
    li.className = 'list-group-item'
    // CREATE NEW TASK NODE BASED ON TASK USER ADDED TO FORM
    let text = document.createTextNode(newItem)
    // ADD TEXT TO LI
    li.appendChild(text)

    // CREATE A DELETE BUTTON
    let deleteBtn = document.createElement('button')
    // ADD BOOTSTRAP CLASSES FOR A BUTTON
    deleteBtn.className = 'btn btn-danger btn-sm float-end delete'
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

// HANDLE THE CLICK EVENT OF THE DELETE BUTTON
list.addEventListener('click', (e) => {
    // CHECK AND SEE IF THE DELETE BUTTON WAS CLICKED
    if (e.target.classList.contains('delete')) {
        // DISPLAY CONFIRMATION OF THE DELETE TO THE USER
        if (confirm('Are you sure you want to delete this task?')) {
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