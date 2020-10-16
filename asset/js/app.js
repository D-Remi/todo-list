function showList(){
  
  fetch('https://todo-liste-de-remi.firebaseio.com/tasks.json')
        .then((resp) => { return resp.json() })
        .then((data) =>{
          list(data);
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
  console.log(Object.values(d[1]).task)
  let ul = document.getElementById('ul');
  for(var i; i < 5; i++){
    html = Object.values(d[i].task)
    console.log(html);
    console.log('ok');
    let li = document.createElement('li');
    ul.append(li)
    li.innerHTML = html
  }
}

window.onload = () => {
    showList();
    list();
}



