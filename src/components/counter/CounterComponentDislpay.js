import React from 'react'; 
import { useSelector } from 'react-redux';

const CounterComponentDislpay = () => {
    const counter = useSelector(state => state.counter);
    return counter;
}
 
export default CounterComponentDislpay;