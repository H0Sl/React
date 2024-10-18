import React from 'react';
import MyBtn from './UI/button/MyBtn';

const PostItem = function(props){
    console.log(props);


    return(
        <div className='post'>
        <div className='post__contant'>
          <strong>{props.number}. {props.post.title}</strong>
          <div>
              {props.post.body}.
          </div>
        </div>
        <div className='post__btns'>
          <MyBtn onClick={() => props.remove(props.post)} >Delete</MyBtn>
        </div>
      </div>
    );
};

export default PostItem;