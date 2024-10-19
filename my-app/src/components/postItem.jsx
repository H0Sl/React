import React from 'react';
import MyBtn from './UI/button/MyBtn';
import '../style/app.css';
import { useNavigate } from 'react-router-dom';

const PostItem = function(props){
    const navigate = useNavigate()
    return(
        <div className='post'>
        <div className='post__content'>
          <strong>{props.post.id}. {props.post.title}</strong>
          <div>
              {props.post.body}.
          </div>
        </div>
        <div className='post__btns'>
          <MyBtn onClick={() => navigate(`/posts/${props.post.id}`)} >Open</MyBtn>
          <MyBtn onClick={() => props.remove(props.post)} >Delete</MyBtn>
        </div>
      </div>
    );
};

export default PostItem;