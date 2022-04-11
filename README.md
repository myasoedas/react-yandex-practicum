# react-yandex-practicum
## Упражнение 1
### В этом упражнении разбираемся на практике как работает функция React.createElement.  
```
code block
```

```HTML
<script>
		 // ReactDOM.render - функция, которая отвечает за рендеринг нашей разметки в окне браузера.    
	         ReactDOM.render(
		    // Первый аргумент фукции ReactDOM.render - отвечает за отображение HTML элемента <div> с динамическим содержимым.
		    React.createElement(
		       "div", /* 1 аргумент - результирующий HTML тег;*/
		       null,  /* 2 аргумент - свойства результирующего HTML тега: CSS идентификатор class или id либо др. свойства*/ 		       
		       React.createElement("h1", null, "Текущее время:"), /* 3 аргумент - содержимое которое попадает в результирующий HTML тег*/
                       React.createElement("h2", null, new Date().toLocaleTimeString()) /* 4 аргумент - содержимое которое попадает в результирующий HTML тег*/
		    ),
		    // Второй аргумент фукции ReactDOM.render - указывает корневой узел HTML страницы для рендеринга React. 	 
		    document.getElementById('root')
		 );
</script>
```  
