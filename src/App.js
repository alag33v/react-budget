import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Header,
  Balance,
  Budget,
  HistoryItem,
  NewEntryForm
} from './components';
import {
  addNewTransaction,
  editTransaction,
  deleteTransaction
} from './redux/ducks/budgetDucks';
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

  const deleteHistoryItem = id => {
    dispatch(deleteTransaction(id));
  };

  const addHistoryItems = (description, value, isExpense) => {
    const newObj = {
      id: historyItems.length + 1,
      isExpense,
      description,
      value
    };
    dispatch(addNewTransaction(newObj));
  };

  const editHistoryItem = (description, value, isExpense, id, setIsOpen) => {
    const newObj = {
      id,
      isExpense,
      description,
      value
    };
    dispatch(editTransaction(newObj));
    setIsOpen(false);
  };

  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <Header />
        <Balance total={total} />
        <Budget totalIncome={totalIncome} totalExpenses={totalExpenses} />
        <h2>History:</h2>
        <div className='history__wrapper'>
          {historyItems.map(item => (
            <HistoryItem
              {...item}
              editItem={editHistoryItem}
              deleteItem={deleteHistoryItem}
              key={item.id}
            />
          ))}
        </div>
        <h2>Add new transaction</h2>
        <NewEntryForm addItem={addHistoryItems} />
      </StyledApp>
    </>
  );
};

export default App;
