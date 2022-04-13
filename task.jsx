class Door extends React.Component {
  state = { isOpen: false };
  addKey = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    return (
      <div className={this.state.isOpen ? 'content bg_open' : 'content bg_close'}>
        <h1 className="content__title">
          {this.state.isOpen ? "Замок открыт 🔓" : "Замок закрыт 🔒"}
        </h1>
        <button onClick={this.addKey} className="content__btn">
          {this.state.isOpen ? 'Закрыть' : 'Открыть'}
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Door />, document.querySelector('#root'));
