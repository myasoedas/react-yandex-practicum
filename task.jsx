const CatCard = props => {  
  return (
    <article className="card">
      <img className="card__img" src="./images/cat.png" alt="фото кошки." />
      <div className="card__text-box">
        <p className="card__text">{`Название породы: ${props.name}`}</p>
        <p className="card__text">{`Продолжительность жизни: ${props.lifespan}`}</p>
        <p className="card__text">{`Длина: ${props.length}`}</p>
        <p className="card__text">{`Рост в холке: ${props.height}`}</p>
        <p className="card__text">{`Вес: ${props.weight}`}</p>
        <p className="card__text">{`Происхождение: ${props.origin}`}</p>
      </div>
    </article>
  );
};

const App = (props) => {
  const data = {
    name: 'Британская короткошерстная кошка',
    lifespan: '12-17 лет',
    length: '55–63 см без хвоста',
    height: '28–33 см',
    weight: '3-8 кг',
    origin: 'Великобритания'
  };
  return (
    <CatCard {...data} />     
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
