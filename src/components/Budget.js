const Budget = ({ totalIncome, totalExpenses }) => {
  return (
    <div className='budget-wrapper'>
      <div className='budget-item'>
        <h3 className='budget-item__title '>Income:</h3>
        <span className='budget--green'>{totalIncome}</span>
      </div>
      <div className='budget-item'>
        <h3 className='budget-item__title'>Expenses:</h3>
        <span className='budget--red'>{totalExpenses}</span>
      </div>
    </div>
  );
};

export default Budget;
