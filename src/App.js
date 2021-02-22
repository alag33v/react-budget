import {
  Header,
  Balance,
  Budget,
  HistoryItem,
  NewEntryForm
} from './components';
import { GlobalStyle } from './styles/GlobalStyle';
import { StyledApp } from './styles/StyledApp';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <Header />
        <Balance />
        <Budget />
        <h2>History:</h2>
        <div className='history__wrapper'>
          <HistoryItem color='green' description='Something' value={50} />
          <HistoryItem color='red' description='Something else' value={100} />
        </div>
        <NewEntryForm />
      </StyledApp>
    </>
  );
};

export default App;
