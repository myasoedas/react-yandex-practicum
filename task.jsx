class NavBar extends React.Component {
  render() {
    return (
      <header className='header'>
        {this.props.children}
      </header>
    );
  }
}

class Logo extends React.Component {
  render() {
    return (
      <img className='logo' src='./images/logo.svg' alt='логотип.' />
    );
  }
}

class Menu extends React.Component {
  render() {
    return (
      <nav className='menu'>
        {this.props.children}
      </nav>
    );
  }
}

class MenuItem extends React.Component {
  render() {
    return (
      <button className='item-btn' type='button'>{this.props.text}</button>
    );
  }
}

class Button extends React.Component {
  render() {
    return (
      <button className='log-in-btn' type='button'>{this.props.text}</button>
    );
  }
}

class App extends React.Component {
  render() {
    const data = {      
      menu: [
        {text: 'О НАС'},
        {text: 'ЦЕНЫ' },
        {text: 'БЛОГ' },
      ],
      button: {text: 'ВОЙТИ'},      
    };    
    return (
      <div className='page'>
        <NavBar  children={
        <>    
          <Logo />
          <Menu children={
            <>
              <MenuItem text={data.menu.[0].text}/> 
              <MenuItem text={data.menu.[1].text}/>
              <MenuItem text={data.menu.[2].text}/>
            </>        
          }/>
          <Button text={data.button.text}/>           
        </>           
        }/>        
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
