import * as PostAPi from '../api/PostRequest.js'

export const getTimeLinePosts = (id) => async (dispatch) => {

    dispatch({ type: "RETREIVING_START" });
    try {
        const { data } = await PostAPi.getTimeLinePosts(id);
        dispatch({ type: "RETREIVING_SUCCESS", data: data });
    } catch (error) {
        dispatch({ type: "RETREIVING_FAIL" });
        console.log(error);
    }

}
export const addComment = (comment) => async (dispatch) => {
    dispatch({ type: 'COMMENT_START' });
    try {
        const  {data}  = await PostAPi.addComment(comment);
       // console.log(data);
        dispatch({ type: 'COMMENT_SUCCESS', data: data });

    } catch (error) {
        console.log(error);
        dispatch({ type: 'COMMENT_FAIL' });

    }
}

