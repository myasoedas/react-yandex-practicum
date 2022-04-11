function resize() {
  const intViewportHeight = window.innerHeight;
  const intFrameWidth = window.innerWidth;  
  const element = React.createElement(
    'div',
    {className: 'main'},
    React.createElement('h1', null, 'размер окна'),
    React.createElement('h1', null, 'в пикселях'),
    React.createElement('h2', null, `${intViewportHeight}px на ${intFrameWidth}px`)
  );
  ReactDOM.render(element, document.getElementById('root'));
}
resize();
window.onresize = resize;
