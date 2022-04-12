class Page extends React.Component {
  render() {
    return (
      <div className={`app ${this.props.img}`}>
        <h1 className='app__greeting'>{this.props.greeting}</h1>
      </div>
    );
  }
}

class CurrentTime extends React.Component { 
  render() {
    const curentHours = new Date().getHours(); 
    let curentGreeting = '';
    let curentImg = '';
    if (curentHours >= 4 && curentHours < 12) {      
      curentGreeting = "Доброе утро";
      curentImg = "morning";      
    } else if (curentHours >= 12 && curentHours < 16) {      
      curentGreeting = "Добрый день";
      curentImg = "afternoon";      
    } else if (curentHours >= 16 && curentHours < 23) {      
      curentGreeting = "Добрый вечер";
      curentImg = "evening";      
    } else {      
      curentGreeting = "Доброй ночи";
      curentImg = "night";      
    }    
    return (
      <Page img={curentImg} greeting={curentGreeting} />
    )
  }
}

ReactDOM.render(<CurrentTime />, document.querySelector('#root'));
