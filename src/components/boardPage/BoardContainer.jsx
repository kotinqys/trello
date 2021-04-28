import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import Board from './Board';

function BoardContainer(props) {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => ({
    items: state.board.items,
  }));

  const url = props.match.params.id;

  return (
    <div className='board'>
      <div className='container'>
        <div className='board__body'>
          <Board key={items[url] + url} item={items[url]} id={url} dispatch={dispatch} />
        </div>
      </div>
    </div>
  );
}

const BoardWithRouter = withRouter(BoardContainer);

export default BoardWithRouter;
