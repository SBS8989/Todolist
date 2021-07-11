const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  //todos라는 저장소에 저장됨
  //JSON.stringify를 통해 string으로 바꿔줄수 있지만 array가 아님
  //JSON.parse를 통해 Array로 저장 가능
}

function deleteToDo(event) {
  const deli = event.target.parentElement;
  deli.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(deli.id));
  saveToDos();

  //우리가 클릭한 li.id와 다른 toDos는 남기고 싶음(클릭한것만 리스트에서 삭제)

  //(Database상에) toDos를 지울 때 같은게 나올때 어느걸 지울지 애매함 따라서 id(시간별)를 부여하여 진행. Array를 새로만들어야함 지우려는 item을 제외하고 >> filter : true만 받고 false가 나오면 제외시킴, 거를 수 있는 기능
  // filter function 함수명(Obj) { return obj > 1000 } >> 변수.filter(함수명) 1000넘는것만 남김
  // const todos = [{text:"lalala"}, {text="lololo"}]
  // function sexyFilter(todos){return todos.text !== "lololo"}
  // todos.filter(sexyFilter)
  // lololo 삭제

  //const arr = [1,2,3,4]
  //const newarr = arr.filter(item => item > 2)
  //newarr = [3,4]
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "X";
  li.appendChild(button);
  li.appendChild(span);
  toDoList.appendChild(li);
  button.addEventListener("click", deleteToDo);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  //todo마다 각각의 id 부여
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
//savedToDos로 저장된 todos를 꺼내옴

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  //저장된 toDos 를 Array로 만들어주고
  toDos = parsedToDos;
  //toDos가 과거것도 저장되고 신규입력하면 추가됨(과거에는 추가는 안되었고 새로만들어짐 = 과거거 사라짐...)
  parsedToDos.forEach(paintToDo);
  //foreach가 array각각의 item들에게 실행시켜줌
  //(item) => ~~ 로 후러씬 단축 arrow function
}
