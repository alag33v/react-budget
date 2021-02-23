const Balance = ({ total }) => {
  return (
    <div className='balance'>
      <h2 className='balance-title'>Your balance:</h2>
      <span>{total}</span>
    </div>
  );
};

export default Balance;
