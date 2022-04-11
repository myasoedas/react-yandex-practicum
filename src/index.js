//создаем функцию resize(), которая при изменении параметров окна браузера будет передавать значение текущей высоты и ширины
//и рендерить измнения в элемент h2
function resize() {
  //Присваиваем значение высоты окна переменной intViewportHeight
  const intViewportHeight = window.innerHeight;
  //Присваиваем значение ширины окна переменной intFrameWidth
  const intFrameWidth = window.innerWidth;  
  const element = React.createElement(
    'div',
    {className: 'main'},
    React.createElement('h1', null, 'размер окна'),
    React.createElement('h1', null, 'в пикселях'),
    //В качестве 3-го аргумента вставляем строку
    React.createElement('h2', null, `${intViewportHeight}px на ${intFrameWidth}px`)
  );
  ReactDOM.render(element, document.getElementById('root'));
}
//вызываем функцию resize()
resize();
//при изменении размера окна браузера - вызвать функцию resize()
window.onresize = resize;
