//Древовидная структура объектов в React
React.createElement(
  //Корневой объект section содержит несколько дочерних объектов, которые также содержат дочерние объекты.
  "section",
  null,
    [
        React.createElement(
          "div",
          null,
          [
            React.createElement("h1", null, "Заголовок"),
            React.createElement("h2", null, "Подзаголовок")
          ]
        ),
        React.createElement(
          "div",
          null,
          React.createElement("p", null, "Параграф")
        )
    ]
) 

//упрощенная запись кода выше

{ 
    element: "section", 
    children: [
        { 
            element: "div", 
            children: [
                { 
                    element: "h1", 
                    children: "Заголовок"
                },
                { 
                    element: "h2", 
                    children: "Подзаголовок"
                }
            ] 
        },
        { 
            element: "div", 
            children: [
                { 
                    element: "p", 
                    children: "Параграф"
                }
            ] 
        }
    ] 
} 
