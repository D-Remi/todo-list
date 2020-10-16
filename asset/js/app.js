function showList(){
  fetch('https://todo-liste-de-remi.firebaseio.com/')
        .then((resp) => { return resp.json() })
        .then((data) =>{
            console.log(data);
        })
        .catch((err) =>{
            console.log(err)
        });
}
const todoForm = document.querySelector('.form');
const todoInput = document.querySelector('.input');
const todoItemsList = document.querySelector('.items');


todoForm.addEventListener('submit', function(event) {
  event.preventDefault();
  showList();
  console.log(todoInput.value);

  let li = document.createElement('li');
  let ul = document.getElementById('ul');
  ul.append(li)

  li.innerHTML = todoInput.value
});
window.onload = () => {
    showList();
}



