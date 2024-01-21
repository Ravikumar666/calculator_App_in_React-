function Keypad({ onClickEvent, funckey }) {
  return (
    <div className="keypad">
      <div className="row">
        <button className="digit" onClick={() => onClickEvent('1')}>
          1
        </button>
        <button className="digit" onClick={() => onClickEvent('2')}>
          2
        </button>
        <button className="digit" onClick={() => onClickEvent('3')}>
          3
        </button>
        <button className="operator" onClick={() => onClickEvent('/')}>
          /
        </button>
      </div>
      <div className="row">
        <button className="digit" onClick={() => onClickEvent('4')}>
          4
        </button>
        <button className="digit" onClick={() => onClickEvent('5')}>
          5
        </button>
        <button className="digit" onClick={() => onClickEvent('6')}>
          6
        </button>
        <button className="operator" onClick={() => onClickEvent('*')}>
          *
        </button>
      </div>
      <div className="row">
        <button className="digit" onClick={() => onClickEvent('7')}>
          7
        </button>
        <button className="digit" onClick={() => onClickEvent('8')}>
          8
        </button>
        <button className="digit" onClick={() => onClickEvent('9')}>
          9
        </button>
        <button className="operator" onClick={() => onClickEvent('-')}>
          -
        </button>
      </div>
      <div className="row">
        <button className="digit" onClick={() => onClickEvent('0')}>
          0
        </button>
        <button className="func-key" onClick={() => funckey('=')}>
          =
        </button>
        <button className="func-key" onClick={() => funckey('c')}>
          C
        </button>
        <button className="operator" onClick={() => onClickEvent('+')}>
          +
        </button>
      </div>
    </div>
  );
}

export default Keypad;
