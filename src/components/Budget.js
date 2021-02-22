const Budget = () => {
  return (
    <div className='budget-wrapper'>
      <div className='budget-item'>
        <h3 className='budget-item__title '>Income:</h3>
        <span className='budget--green'>10000</span>
      </div>
      <div className='budget-item'>
        <h3 className='budget-item__title'>Expenses:</h3>
        <span className='budget--red'>8000</span>
      </div>
    </div>
  );
};

export default Budget;
