import React,{useState} from "react"
import MyBtn from './UI/button/MyBtn';
import MyInput from './UI/input/MyInput';

const PostForm = ({create}) => {
    const [post,setPost] = useState({title:'',body:''});

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title:'',body:''})
      }
    return (
        <form>
            {/* {Управляемый компонент} */}
            <MyInput 
            value={post.title}
            onChange ={e => setPost({...post,title: e.target.value})}
            type="text" 
            placeholder='Titile post'/>
            <MyInput 
            value={post.body}
            onChange ={e => setPost({...post,body: e.target.value})}
            type="text" 
            placeholder='Text post'/>
            <MyBtn onClick={addNewPost}>Create Post</MyBtn>
        </form>
    )
};

export default PostForm;
