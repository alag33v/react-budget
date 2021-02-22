import { MdModeEdit } from 'react-icons/md';
import { FaTrashAlt } from 'react-icons/fa';

const HistoryItem = ({ color, description, value }) => {
  return (
    <div className={`history__item history__item--${color}`}>
      <p>{description}</p>
      <span>${value}</span>
      <div className='history-icons'>
        <MdModeEdit className='edit' />
        <FaTrashAlt className='delete' />
      </div>
    </div>
  );
};

export default HistoryItem;
