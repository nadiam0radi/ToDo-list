const addform = document.querySelector('.add')
const list = document.querySelector('.todos')
const search = document.querySelector('.search input')

const generateTemp = (todo) => {
const html = `
<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
</li>
`
 list.innerHTML += html
}


addform.addEventListener("submit",e =>{
    e.preventDefault()
    const todo = addform.add.value.trim()
    if(todo.length){
        generateTemp(todo)
        addform.reset()
    }
})

//delete todo
list.addEventListener('click', e =>{
    if(e.target.classList.contains("delete")){
        e.target.parentElement.remove()
    }
})

//keyup event
const filterTodos = (term) =>{
Array.from(list.children)
.filter((todo)=>{
    return !todo.textContent.includes(term)
})
.forEach(todo => {
    todo.classList.add('filtered')
});

Array.from(list.children)
.filter((todo)=>{
    return todo.textContent.includes(term)
})
.forEach(todo => {
    todo.classList.remove('filtered')
});
}


search.addEventListener('keyup', e =>{
    const term = search.value.trim()
    filterTodos(term)
})