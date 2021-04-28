import React from 'react';
import { Redirect } from 'react-router';
import AddList from './AddList';
import Task from './Task';

const Board = React.memo(function ({ item, id, dispatch }) {
  return (
    <>
      {item ? (
        <>
          <div className='board__name'>{item.name}</div>
          <div className='board__flex'>
            {item.list.length > 0 ? (
              item.list.map((val, index) => (
                <Task
                  key={val + index}
                  val={val}
                  id={index}
                  mainId={Number(id)}
                  dispatch={dispatch}
                />
              ))
            ) : (
              <></>
            )}
            <AddList dispatch={dispatch} id={Number(id)} length={item.list.length} />
          </div>
        </>
      ) : (
        <Redirect to='/' />
      )}
    </>
  );
});

export default Board;
