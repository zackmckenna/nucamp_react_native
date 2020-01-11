import * as ActionTypes from './ActionTypes';

export const comments = (state = { errMess: null }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state, errMess: null, comments: action.payload };
        case ActionTypes.ADD_COMMENT:
            console.log('adding comment')
            const newComment = action.payload
            newComment.id = state.comments.length
            return {...state, comments: state.comments.concat(newComment) }
        case ActionTypes.COMMENTS_FAILED:
            return {...state, errMess: action.payload};

        default:
            return state;
    }
};



