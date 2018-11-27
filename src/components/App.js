import React, { Component } from 'react';
import Counter from './Counter'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import counter from './Counter/reducer'
import { counterSaga } from './Counter/saga'
import Clock from './Clock'

const rootReducer = { counter }
const combinedReducer = combineReducers(rootReducer)

function* rootSaga() {
    yield all([
        fork(counterSaga)
    ])
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    combinedReducer,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Counter />
            </Provider>
        )
    }
}

export default App;