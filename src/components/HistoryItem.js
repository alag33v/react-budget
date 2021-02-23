import { useState } from 'react';
import { MdModeEdit } from 'react-icons/md';
import { FaTrashAlt } from 'react-icons/fa';
import { EditEntryForm } from './index';

const HistoryItem = ({
  isExpense,
  description,
  value,
  id,
  editItem,
  deleteItem
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`history__item ${
        isExpense ? 'history__item--red' : 'history__item--green'
      }`}
    >
      {isOpen ? (
        <EditEntryForm
          addItem={editItem}
          id={id}
          setIsOpen={setIsOpen}
          oldDescription={description}
          oldValue={value}
        />
      ) : (
        <>
          <p>{description}</p>
          <span>${value}</span>
          <div className='history-icons'>
            <MdModeEdit className='edit' onClick={() => setIsOpen(true)} />
            <FaTrashAlt className='delete' onClick={() => deleteItem(id)} />
          </div>
        </>
      )}
    </div>
  );
};

export default HistoryItem;
