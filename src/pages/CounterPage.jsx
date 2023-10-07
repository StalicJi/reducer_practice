import React, { useReducer } from 'react'
import Button from '../components/Button';
import Panel from '../components/Panel';
// import useCounter from '../hooks/use-counter';

const INCREMENT_COUNT = 'increment';
const SET_VALUE_TO_ADD = 'change_value';
const DECEMENT_COUNT = 'decrement';
const ADD_VALUE_TO_COUNT = 'add_value_to_count';

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1
      };
    case DECEMENT_COUNT:
      return {
        ...state,
        count: state.count - 1
      };
    case ADD_VALUE_TO_COUNT:
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0
      };
    case SET_VALUE_TO_ADD:
      return {
          ...state,
          valueToAdd: action.payload,
      };
    default:
      return state;
  };
}

const CounterPage = ({ initialCount }) => {

    const [state, dispatch] = useReducer(reducer, {
      count: initialCount,
      valueToAdd: 0
    })
    console.log(state);

    const increment = () => {
      dispatch({
        type: INCREMENT_COUNT
      });
    };

    const decrement = () => {
      dispatch({
        type: DECEMENT_COUNT
      })
    };

    const handleChange = (e) => {
      const value = +(e.target.value) || 0;
      
      dispatch({
        type: SET_VALUE_TO_ADD,
        payload: value
      });
    };
    
    const handleSubmit = (e) => {
      e.preventDefault();

      dispatch({
        type: ADD_VALUE_TO_COUNT,

      })
      // setCount(count + valueToAdd);
      // setValueToAdd(0);
    };

  return (
    <Panel className='m-3'>
      <h1 className='text-lg'>Count is {state.count}</h1>
      <div className='flex flex-row'>
        <Button className='mr-3' onClick={increment}>Increment</Button>
        <Button className='mr-3' onClick={decrement}>Decrement</Button>
      </div>
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="">Add a lot</label>
      <input
        value={state.valueToAdd || ''}
        onChange={handleChange}
        type="number" 
        className='p-1 m-3 bg-gray-50 border border-gray-300'/>
      <Button>Add it!</Button>
    </form>
    </Panel>
  )

}

export default CounterPage
