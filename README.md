# react-yandex-practicum
Тема: Использование props.children
```JSX
const DropdownMenu = (props) => (
    <div className="DropdownMenu">
        <span className="DropdownMenu-heading">{props.heading}</span>
        <div className="DropdownMenu-items">
            {props.children}
        </div>
    </div>
);
    

const NavBar = () => (
    <nav>
        <Logo />
        <DropdownMenu>
            <ul>
                <li className="DropdownMenu-item">О магазине</li>
                <li className="DropdownMenu-item">Доставка</li>
                <li className="DropdownMenu-item">Оплата</li>
            </ul>
            <hr />
            <ul>
                <li className="DropdownMenu-item">Оставить отзыв</li>
                <li className="DropdownMenu-item">Политика конфиденциальности</li>
            </ul>
        </DropdownMenu>
    </nav>
)  
```
