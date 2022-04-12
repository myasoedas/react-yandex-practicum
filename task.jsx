function ProductPrice(props) {
  return (
    <div className="main__container">
      <p className="main__text">{`Цена: ${props.priceInfo.price} ${props.priceInfo.currency}.`}</p>
      <p className="main__text">{`Налог: ${props.priceInfo.taxes}%`}</p>
    </div>
  );
}

function ProductSpecs(props) {
  return (
    <div className="main__container">
      <h3 className="main__subtitle">Характеристики:</h3>
      <p className="main__text">{`Цвет: ${props.properties.color}`}</p>
      <p className="main__text">{`Материал: ${props.properties.material}`}</p>
      <p className="main__text">{`Вес: ${props.properties.weight} кг`}</p>
    </div>
  );
}

class Card extends React.Component {
  render() {
    const data = {
      id: 120323,
      name: 'Герметичные валенки с магнитной подошвой',
      priceInfo: {
        price: 29224,
        currency: 'руб',
        taxes: 20
      },
      properties: {
        color: 'серый',
        weight: 2.4,
        material: 'шерсть'
      },
      info: {
        fullDecription: `Валенки, в которых не страшно передвигаться даже снаружи космической станции.
          Магнитная подошва позволит без страха шагать по поверхности корабля, а многослойный
          материал StarTex удерживает тепло внутри обуви даже в открытом космосе.`
      },
      category: 'Обувь',
      gender: 'Унисекс'
    };

    return (
      <article className="main">
        <h1 className="main__title">{data.name}</h1>
        <ProductPrice priceInfo={data.priceInfo} />
        <ProductSpecs properties={data.properties} />
        <div className="main__container">
          <h3 className="main__subtitle">Описание:</h3>
          <p className="main__text">{data.info.fullDecription}</p>
        </div>
        <div className="main__tags">
          <p className="main__tag">{data.category}</p>
          <p className="main__tag">{data.gender}</p>
        </div>
      </article>
    );
  }
}

ReactDOM.render(<Card />, document.querySelector('#root'));
