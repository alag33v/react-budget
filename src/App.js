import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Balance, Budget, HistoryItem, NewEntryForm } from './components';
import { GlobalStyle } from './styles/GlobalStyle';
import { StyledApp } from './styles/StyledApp';

const App = () => {
  const [totalIncome, setTotalIncome] = useState(null);
  const [totalExpenses, setTotalExpenses] = useState(null);
  const [total, setTotal] = useState(null);
  const historyItems = useSelector(({ budget }) => budget.historyItems);
  const dispatch = useDispatch();

  useEffect(() => {
    let totalIncome = 0;
    let totalExpenses = 0;

    historyItems.map(item => {
      if (item.isExpense) return (totalExpenses += Number(item.value));
      return (totalIncome += Number(item.value));
    });
    setTotalIncome(totalIncome);
    setTotalExpenses(totalExpenses);
    setTotal(totalIncome - totalExpenses);
  }, [historyItems]);

  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <h1>Budget</h1>
        <Balance total={total} />
        <Budget totalIncome={totalIncome} totalExpenses={totalExpenses} />
        <h2>History:</h2>
        <div className='history__wrapper'>
          {historyItems.map(item => (
            <HistoryItem {...item} dispatch={dispatch} key={item.id} />
          ))}
        </div>
        <h2>Add new transaction</h2>
        <NewEntryForm dispatch={dispatch} />
      </StyledApp>
    </>
  );
};

export default App;
