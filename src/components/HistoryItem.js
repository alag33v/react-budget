import { useState } from 'react';
import { MdModeEdit } from 'react-icons/md';
import { FaTrashAlt } from 'react-icons/fa';
import { EditEntryForm } from './index';
import { deleteTransaction } from '../redux/ducks/budgetDucks';

const HistoryItem = ({ isExpense, description, value, id, dispatch }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`history__item ${
        isExpense ? 'history__item--red' : 'history__item--green'
      }`}
    >
      {isOpen ? (
        <EditEntryForm
          oldIsExpense={isExpense}
          oldDescription={description}
          oldValue={value}
          id={id}
          setIsOpen={setIsOpen}
          dispatch={dispatch}
        />
      ) : (
        <>
          <p>{description}</p>
          <span>${value}</span>
          <div className='history-icons'>
            <MdModeEdit className='edit' onClick={() => setIsOpen(true)} />
            <FaTrashAlt
              className='delete'
              onClick={() => dispatch(deleteTransaction(id))}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default HistoryItem;
