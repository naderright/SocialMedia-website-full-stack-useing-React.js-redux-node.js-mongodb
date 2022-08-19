import { FaLeaf } from "react-icons/fa";


const commentReducer = (state = { comments: [], loading: false, uploading: false, error: false }, action) => {

    switch (action.type) {
        case 'COMMENT_START':
            return { ...state, error: false, loading: true };
        case 'COMMENT_SUCCESS':
            return { ...state, comments: [action.data, ...state.comments], loading: false, uploading: false, error: false }
        case 'COMMENT_FAIL':
            return { ...state, error: true, loading: false, uploading: false };
        default:
            return state
    }

}

export default commentReducer;