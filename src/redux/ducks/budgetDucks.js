// Actions
const NEW_TRANSACTION = 'budget/NEW_TRANSACTION';
const EDIT_TRANSACTION = 'budget/EDIT_TRANSACTION';
const DELETE_TRANSACTION = 'budget/DELETE_TRANSACTION';

// Reducer
const initialState = {
  historyItems: [
    { id: '0', isExpense: false, description: 'Work income', value: 2000 },
    { id: '1', isExpense: true, description: 'Rent', value: 1300 },
    { id: '2', isExpense: true, description: 'Water bill', value: 20 }
  ]
};

const budgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_TRANSACTION:
      return {
        ...state,
        historyItems: [...state.historyItems, action.payload]
      };
    // case EDIT_TRANSACTION:
    //   return {
    //     ...state,
    //     historyItems: [
    //       ...state.historyItems.filter(item => item.id !== action.payload.id),
    //       action.payload
    //     ]
    //   };

    case EDIT_TRANSACTION:
      const historyItems = [...state.historyItems];
      const index = historyItems.findIndex(
        item => item.id === action.payload.id
      );
      historyItems[index] = { ...action.payload };
      return { historyItems };
    case DELETE_TRANSACTION: {
      const newHistoryItems = state.historyItems.filter(
        item => item.id !== action.payload
      );
      return { ...state, historyItems: newHistoryItems };
    }
    default:
      return state;
  }
};

// Action Creators
export const addNewTransaction = obj => ({
  type: NEW_TRANSACTION,
  payload: obj
});

export const editTransaction = obj => ({
  type: EDIT_TRANSACTION,
  payload: obj
});

export const deleteTransaction = id => ({
  type: DELETE_TRANSACTION,
  payload: id
});

export default budgetReducer;
