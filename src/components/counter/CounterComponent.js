import React from 'react'; 
import { useSelector } from 'react-redux';

const CounterComponent = () => {
    const counter = useSelector(state => state.CounterReducer.counter);
    return <h2> {counter} </h2>;
}
 
export default CounterComponent;