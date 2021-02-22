import { FaDollarSign } from 'react-icons/fa';
import { AiFillTag } from 'react-icons/ai';

const NewEntryForm = () => {
  return (
    <form className='form__wrapper'>
      <h2>Add new transaction</h2>
      <div className='input__description'>
        <input type='text' placeholder='Description' />
        <AiFillTag className='tag' />
      </div>
      <div className='input__value'>
        <input type='tel' placeholder='Value' />
        <FaDollarSign className='dollar' />
      </div>
      <button className='form__btn' type='button'>
        Add
      </button>
    </form>
  );
};

export default NewEntryForm;
