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
    {/* Ваш код здесь */}
    return (
      <Page />
    )
  }
}

ReactDOM.render(<CurrentTime />, document.querySelector('#root'));