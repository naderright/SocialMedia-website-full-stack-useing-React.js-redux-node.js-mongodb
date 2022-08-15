import * as UploadApi from '../api/UploadRequest.js';

export const UploadImage = (data) => async (dispatch) => {
   try {
      await UploadApi.uploadImage(data);
   } catch (error) {
      console.log(error);
   }
};


export const uploadPost = (newPost) => async (dispatch) => {
   dispatch({ type: 'UPLOAD_START' });
   try {
      const post= await UploadApi.uploadPost(newPost);
      dispatch({ type: 'UPLOAD_SUCCESS',data:post.data });

   } catch (error) {
     
      dispatch({ type: 'UPLOAD_FAIL' });
      console.log(error);

   }
}