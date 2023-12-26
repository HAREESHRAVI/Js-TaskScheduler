const todolist = [];

function addTodo() {
  const inputName = document.querySelector('.js-input-text');
  const name = inputName.value;
  const inputDate = document.querySelector('.js-input-date');
  const date = inputDate.value;
  todolist.push({ name, date });
  inputName.value = '';
  inputDate.value = '';1
  renderTodoList();
}
function renderTodoList() {
  let todohtml = '<div class="js-todo-list-style">';
  for (let i = 0; i < todolist.length; i++) {
    const { name, date } = todolist[i];
    const html = `<div>${name}</div><div>${date}</div><button class="Delete-button-style" onclick="deleteTodo(${i})">Delete</button>`;
    todohtml += html;
  }
  todohtml += '</div>';
  document.querySelector('.js-todo-list-display').innerHTML = todohtml;
}
 
function deleteTodo(index) {
    todolist.splice(index, 1);
    renderTodoList();
  }
  