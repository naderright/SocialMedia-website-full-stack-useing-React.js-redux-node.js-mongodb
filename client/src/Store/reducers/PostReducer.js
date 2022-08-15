 const postReducer = (state={posts:[],loading:false,uploading:false,error:false},action)=>{
      switch(action.type){
            case 'UPLOAD_START':
                return {...state,loading:true,error:false};
            case 'UPLOAD_SUCCESS':
                return{...state,posts:[action.data,...state.posts],uploading:false,loading:false,error:false};
            case 'UPLOAD_FAIL':
                return {...state,error:true,uploading:false};
            default:
                return state;            
      }
}

export default postReducer;