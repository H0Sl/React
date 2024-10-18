import React from 'react';
import MyBtn from './UI/button/MyBtn';

const PostItem = function(props){
    return(
        <div className='post'>
        <div className='post__content'>
          <strong>{props.post.id}. {props.post.title}</strong>
          <div>
              {props.post.body}.
          </div>
        </div>
        <div className='post__btn'>
          <MyBtn onClick={() => props.remove(props.post)} >Delete</MyBtn>
        </div>
      </div>
    );
};

export default PostItem;