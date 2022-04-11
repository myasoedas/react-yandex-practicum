const element = React.createElement(
  "div",
  {className: "main"},
  React.createElement("h1", null, "Добро пожаловать на борт!")
);
//решение задачи - добавляем ф-цию ReactDOM.render, где первый аргумент - element, а второй аргумент указывает на <div id="app">
ReactDOM.render(element, document.getElementById('app'));
