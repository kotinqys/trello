import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createBoard } from '../../redux/actions/board';
import Boards from './Boards';

function CreateBoard() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => ({
    items: state.board.items,
  }));

  const [board, setBoard] = useState(false);
  const [text, setText] = useState('');

  const onShow = () => {
    setBoard(!board);
    setText('');
  };

  const onCreateBoard = () => {
    setBoard(!board);
    if (text) {
      dispatch(createBoard(text));
    }
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const onKeyPressHandle = (e) => {
    if (e.key === 'Enter' && text) {
      setBoard(!board);
      dispatch(createBoard(text));
    }
  };

  return (
    <div className='create-board'>
      <div className='container'>
        {board ? (
          <div className='new-board'>
            <h4>
              Создать доску...
              <span className='buttonX' onClick={onShow}>
                X
              </span>
            </h4>
            <h4>Название вашей доски?</h4>
            <input type='text' value={text} onChange={handleChange} onKeyPress={onKeyPressHandle} />
            <div className='buttons'>
              <button onClick={onShow}>ОТМЕНА</button>
              <button onClick={onCreateBoard}>СОЗДАТЬ</button>
            </div>
          </div>
        ) : (
          <div className='boards'>
            <div className='board' onClick={onShow}>
              <span>+</span> Create a new board...
            </div>
            {items &&
              items.map((item, index) => (
                <Boards key={item + index} item={item} id={index} dispatch={dispatch} />
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CreateBoard;
