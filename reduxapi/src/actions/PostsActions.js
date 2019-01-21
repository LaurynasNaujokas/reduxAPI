import Axios from 'axios';

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

//Sync Action
export const fetchPostsSuccess = (posts) => {
    return {
        type: 'FETCH_POSTS_SUCCESS',
        posts
    };
};

export const fetchPosts = () => {
    //Returns a dispatcher function
    //that dispatches an action at a later time
    return (dispatch) => {
        //returns a promise
        return Axios.get(apiUrl)
        .then(response => {
            dispatch(fetchPostsSuccess(response.data))
        })
        .catch(error => {
            throw(error);
        });
    };
};


