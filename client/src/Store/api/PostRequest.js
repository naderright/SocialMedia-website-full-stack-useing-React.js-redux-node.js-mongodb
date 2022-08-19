import axios from 'axios';

const API = axios.create({baseURL:'http://localhost:5000'});


export const getTimeLinePosts = (id)=>API.get(`/posts/${id}/timeline`);
export const likePost = (id,userID)=>API.put(`/posts/${id}/like`,{userId:userID});
export const addComment = (comment)=>API.put(`/posts/${comment.postId}/comment`,comment);