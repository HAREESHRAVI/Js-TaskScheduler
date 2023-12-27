let todolist = [];
const savedTodoList = localStorage.getItem('todoList');
if (savedTodoList) {
  todolist = JSON.parse(savedTodoList);
  renderTodoList();
}

function addTodo() {
  const inputName = document.querySelector('.js-input-text');
  const name = inputName.value;
  const inputDate = document.querySelector('.js-input-date');
  const date = inputDate.value;
  todolist.push({ name, date });
  localStorage.setItem('todoList', JSON.stringify(todolist));
  inputName.value = '';
  inputDate.value = '';
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
  localStorage.setItem('todoList', JSON.stringify(todolist));
  renderTodoList();
}
