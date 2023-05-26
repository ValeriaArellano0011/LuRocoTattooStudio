/* import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk';

const composeEnhancer = window.REDUX_DEVTOOLS_EXTENSIONS_COMPOSE || compose;
const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))
)

export default store
 */

/* TEST LALO */

import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

export default store