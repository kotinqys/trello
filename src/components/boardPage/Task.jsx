import React, { useState } from 'react';
import { setTaskToList, deleteList, deleteTask } from '../../redux/actions/board';

function Task({ val, id, mainId, dispatch }) {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const onKeyPressHandle = (e) => {
    if (e.key === 'Enter' && value.length > 4) {
      dispatch(setTaskToList(value, mainId, id));
      setValue('');
    }
  };

  const onDeleteList = () => {
    dispatch(deleteList(id, mainId));
  };

  const onDeleteTask = (taskId) => {
    dispatch(deleteTask(mainId, id, taskId));
  };

  return (
    <div className='list'>
      <div className='close'>
        <div className='empty'></div>
        <span className='close-x' onClick={onDeleteList}>
          X
        </span>
      </div>
      {val.text}
      <input type='text' value={value} onChange={handleChange} onKeyPress={onKeyPressHandle} />

      {val.tasks.length ? (
        <ul>
          {val.tasks.map((val, index) => (
            <li key={val + index}>
              {val}
              <div>
                <span onClick={() => onDeleteTask(index)}>&#10004;</span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Task;
