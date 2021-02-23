import { useState } from 'react';
import { FaDollarSign } from 'react-icons/fa';
import { AiFillTag } from 'react-icons/ai';

const EditEntryForm = ({
  addItem,
  id,
  setIsOpen,
  oldDescription,
  oldValue
}) => {
  const [description, setDescription] = useState(oldDescription);
  const [value, setValue] = useState(oldValue);
  const [isExpense, setIsExpense] = useState(false);

  return (
    <form className='form__wrapper'>
      <div className='input__description'>
        <input
          type='text'
          placeholder='Description'
          onChange={e => setDescription(e.target.value)}
          value={description}
        />
        <AiFillTag className='tag' />
      </div>
      <div className='input__value'>
        <input
          type='tel'
          placeholder='Value'
          onChange={e => setValue(e.target.value)}
          value={value}
        />
        <FaDollarSign className='dollar' />
      </div>
      <label>
        Is Expense?
        <input
          type='checkbox'
          onChange={() => setIsExpense(oldState => !oldState)}
          checked={isExpense}
        />
      </label>

      <button
        className='form__btn'
        type='button'
        onClick={() => {
          addItem(description, value, isExpense, id, setIsOpen);
        }}
      >
        Edit
      </button>
    </form>
  );
};

export default EditEntryForm;
