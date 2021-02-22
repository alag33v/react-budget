import { MdModeEdit } from 'react-icons/md';
import { FaTrashAlt, FaDollarSign } from 'react-icons/fa';
import { AiFillTag } from 'react-icons/ai';
import { GlobalStyle } from './styles/GlobalStyle';
import { StyledApp } from './styles/StyledApp';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <h1>Budget</h1>
        <div className='balance'>
          <h2 className='balance-title'>Your balance:</h2>
          <span>25000</span>
        </div>
        <div className='budget-wrapper'>
          <div className='budget-item'>
            <h3 className='budget-item__title '>Income:</h3>
            <span className='budget--green'>10000</span>
          </div>
          <div className='budget-item'>
            <h3 className='budget-item__title'>Expense:</h3>
            <span className='budget--red'>8000</span>
          </div>
        </div>
        <h2>History:</h2>
        <div className='history__wrapper'>
          <div className='history__item history__item--green'>
            <p>Something</p>
            <span>$10</span>
            <div className='history-icons'>
              <MdModeEdit className='edit' />
              <FaTrashAlt className='delete' />
            </div>
          </div>
          <div className='history__item history__item--red'>
            <p>Something else bla bla</p>
            <span>$100</span>
            <div className='history-icons'>
              <MdModeEdit className='edit' />
              <FaTrashAlt className='delete' />
            </div>
          </div>
        </div>
        <h2>Add new transaction</h2>
        <form className='form__wrapper'>
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
      </StyledApp>
    </>
  );
};

export default App;
