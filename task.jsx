class GoodNews extends React.Component {
  render() {
    return (
      <div className="content">
        <h1 className="content__title">Лента хороших новостей</h1>
        <div id="news-container">
          <section>Уникальный зебрёнок в крапинку родился в Кении</section>
          <section>
            Туристы обнаружили выживавшую в снегах две недели собаку и вернули ее домой
          </section>
          <section>На Аляске выбрали самого жирного медведя</section>
          <section>
            Хитрый чихуахуа приучился кататься верхом и плавать на своем друге лабрадоре
          </section>
          <section>Шимпанзе бонобо любят поговорить о еде</section>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<GoodNews />, document.querySelector('#news-section'));
