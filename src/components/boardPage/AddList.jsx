import React, { useState } from 'react';
import { setListToBoard } from '../../redux/actions/board';

function AddList({ dispatch, id, length }) {
  const [value, setValue] = useState('');
  const [isCreate, setIsCreate] = useState(false);

  const onCreatList = () => {
    setIsCreate(!isCreate);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const onKeyPressHandle = (e) => {
    if (e.key === 'Enter' && value) {
      dispatch(setListToBoard(id, value));
      setIsCreate(!isCreate);
      setValue('');
    }
  };

  return (
    <>
      {isCreate ? (
        <div className='create-list'>
          <input type='text' value={value} onChange={handleChange} onKeyPress={onKeyPressHandle} />
        </div>
      ) : (
        length < 4 && (
          <div className='add-list' onClick={onCreatList}>
            Add list...
          </div>
        )
      )}
    </>
  );
}

export default AddList;
