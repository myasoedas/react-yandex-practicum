# react-yandex-practicum
## Упражнение 1
### В этом упражнении создаем функцию timer, чтобы показать как в режиме рееального времени будет изменяться только содержимое HTML элемента h2
```
code block
```

```HTML
<script>
   function timer() {
      const element = React.createElement(
         "div",
         null,
         React.createElement("h1", null, "Текущее время:"),
         React.createElement("h2", null, new Date().toLocaleTimeString())
      );
      ReactDOM.render(element, document.getElementById('root'));
   }
   setInterval(timer, 1000); 
</script>
```  
