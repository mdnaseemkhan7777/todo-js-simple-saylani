var list = document.getElementById('list');
function addTodo() {
    var todo_item = document.getElementById('todo-item');

    // create li tag

    var li = document.createElement('li');
    var liText = document.createTextNode(todo_item.value);
    li.appendChild(liText)

    // create delete button
    var delBtn = document.createElement("button");
    var delText = document.createTextNode('delete');
    delBtn.setAttribute("class",'btn btn-danger');
    delBtn.setAttribute("onclick",'deleteItem(this)');
    delBtn.appendChild(delText)
    li.appendChild(delBtn);

    // create edite button
    var editBtn = document.createElement("button");
    var editText = document.createTextNode('Edit');
    editBtn.setAttribute("class", "btn btn-success");
    editBtn.setAttribute("onclick", "editItem(this)");
    editBtn.appendChild(editText);
    li.appendChild(editBtn);

    list.appendChild(li);
    todo_item.value = "";
    
}

function deleteItem(e){
    e.parentNode.remove();
}
function editItem(e){
    
    var val = prompt("Enter Edit Value", e.parrentNode);
    e.parentNode.firstChild.nodeValue = val;
    

}
function deleteAll(){
    list.innerHTML= "";

}