const Quote = (props) => {
  return (
    <div className="fancy-quote">
      <p className='text'>{props.quoteContent}</p> {/* Переписать на props.children */}
      <span className='author'>{props.author}</span>
    </div>
  );
}


const DuneQuote = () => {
  return ( 
    <Quote
      author="Принцесса Ирулан «Избранные&nbsp;изречения Муад'Диба»"
      quoteContent="Арракис учит «пониманию ножа», учит относиться к жизни так: отрезать всё несовершенное и незавершённое, говоря: «Вот теперь это совершенно и завершено — ибо кончается здесь»."
    />
  );
}

ReactDOM.render(<DuneQuote />, document.querySelector('#root'));
