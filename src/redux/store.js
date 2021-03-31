import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import authReducer from './auth/authReducer';
import postReducer from './post/postReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
	auth: authReducer,
	post: postReducer,
});

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);

export default store;
