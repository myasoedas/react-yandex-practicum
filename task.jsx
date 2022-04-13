class Door extends React.Component {
  state = { isOpen: false };

  render() {
    return (
      <div className={this.state.isOpen ? 'content bg_open' : 'content bg_close'}>
        <h1 className="content__title" />
        <button className="content__btn">{this.state.isOpen ? 'Закрыть' : 'Открыть'}</button>
      </div>
    );
  }
}

ReactDOM.render(<Door />, document.querySelector('#root'));
