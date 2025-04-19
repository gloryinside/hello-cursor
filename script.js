function addTodo() {
    const input = document.getElementById('todo-input');
    const text = input.value.trim();
  
    if (text === '') return;
  
    const li = document.createElement('li');
    li.textContent = text;
  
    // 클릭하면 완료 표시
    li.addEventListener('click', () => {
      li.classList.toggle('completed');
    });
  
    // 오른쪽 클릭하면 삭제
    li.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      li.remove();
    });
  
    document.getElementById('todo-list').appendChild(li);
    input.value = '';
  }
  