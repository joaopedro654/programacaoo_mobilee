
const itemInput = document.getElementById('item-input');
const addBtn = document.getElementById('add-btn');
const itemList = document.getElementById('item-list');

addBtn.addEventListener('click', addItem);
itemList.addEventListener('click', deleteItem);

function addItem() {
  if (itemInput.value.trim() === '') {
    alert('Por favor, adicione um item.');
    return;
  }

  const li = document.createElement('li');
  const itemText = document.createTextNode(itemInput.value);
  const deleteBtn = document.createElement('button');
  const deleteText = document.createTextNode('X');

  li.appendChild(itemText);
  deleteBtn.appendChild(deleteText);
  deleteBtn.className = 'delete-btn';
  li.appendChild(deleteBtn);
  itemList.appendChild(li);
  itemInput.value = '';
}

function deleteItem(event) {
  if (event.target.classList.contains('delete-btn')) {
    const li = event.target.parentNode;
    itemList.removeChild(li);
  }
}
