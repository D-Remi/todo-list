function showList(){
  
  fetch('https://todo-liste-de-remi.firebaseio.com/tasks.json')
        .then((resp) => { return resp.json() })
        .then((data) =>{
          list(Object.values(data));
        })
        .catch((err) =>{
            console.log(err)
        });
}
const todoForm = document.querySelector('.form');
const todoInput = document.querySelector('.input');
const todoItemsList = document.querySelector('.items');

todoForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  data = {
    task: todoInput.value
  }
  fetch('https://todo-liste-de-remi.firebaseio.com/tasks.json',
    {method: 'POST' , body: JSON.stringify(data)}
  )
});
function list(d){
  let ul = document.getElementById('ul');
  console.log(d);
  d.forEach(task => {
    let li = document.createElement('li');
    ul.append(li)
    li.innerHTML = task.task
  });  
}
window.onload = () => {
    showList();
}