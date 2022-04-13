const MenuBlock = props => {
  return (
    <div className="menu">
      <div className="content">
        <p className="menu__title">{props.children}</p>
        {props.menuItems}
      </div>
    </div>
  );
};

const Footer = () => {
  const menuItems = (
    <ul className="nav">
      <li className="nav__link">Наша миссия</li>
      <li className="nav__link">Вакансии</li>
      <li className="nav__link">Блог</li>
    </ul>
  );
  return (
    <div className="footer">
      <div className="container">
        <img className="menu__img" src="./images/bg.svg" alt="Подвал" />
        <MenuBlock menuItems={menuItems}>О компании</MenuBlock>
      </div>
    </div>
  );
};

ReactDOM.render(<Footer />, document.querySelector('#root'));
