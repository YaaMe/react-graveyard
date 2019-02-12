import React, { Component, useReducer, useEffect, useMemo } from 'react';
import Button from '@material-ui/core/Button';
// import { connectors } from 'contexts';
import { StoreContext } from 'redux-react-hook';
import {sample} from './sample.module.scss';

const mapStateToProps = ({ test: { testid }}) => ({ testid })
const mapDispatchToProps = dispatch => ({
  test: dispatch({ type: 'TEST' })
})
const initState = { count: 11 }
function reducer(state, action) {
  console.log(state)
  switch (action.type) {
    case 'increment': return { count: state.count + 1};
    default: return state;
  }
  return state
}

const Sample = (store) => {
  const { test } = store;
  const [state, dispatch] = useReducer(reducer, initState);
  const C1 = useMemo((data) => {
    console.log('c1 memo')
    console.log(data)
    return (<div>memo1</div>)
  }, [1])
  const C2 = useMemo(() => {
    console.log('c2 memo')
    return (<div>memo2</div>)
  }, [state.count])
  useEffect(() => {
    console.log(state.count)
    console.log('do effect')
    return undefined;
  }, []);
  console.log('run code', state.count)
  return (
    <div>
      <label className="marked">outside</label>
      <div className={sample}>
        <div>sample: {state.count}</div>
        <div>fromApp: {test}</div>
        {C1}
        {C2}
        <Button variant="contained" color="primary" onClick={() => dispatch({type: 'increment'})}>+</Button>
      </div>
    </div>
  )};

// export default connectors.connectApp(mapStateToProps, mapDispatchToProps)(Sample);
export default Sample
