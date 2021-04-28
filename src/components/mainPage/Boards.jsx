import React from 'react';
import { deleteBoard } from '../../redux/actions/board';
import { Link } from 'react-router-dom';

function Boards({ item, id, dispatch }) {
  const onDeleteBoard = () => {
    dispatch(deleteBoard(id));
  };

  return (
    <>
      <div className='board board-ex'>
        <Link to={`/b/${id}`} className='board__title'>
          {item.name}
        </Link>
        <span className='close-x' onClick={onDeleteBoard}>
          x
        </span>
      </div>
    </>
  );
}

export default Boards;
