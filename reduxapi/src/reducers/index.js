import { combineReducers } from 'redux'; 
import posts from './postsReducer';

 const allReducers = combineReducers ({
    posts,
});

export default allReducers;