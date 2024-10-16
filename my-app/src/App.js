import React, {useState}from 'react';
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter';
import './style/app.css';
import PostList from './components/PostList';
import MyBtn from './components/UI/button/MyBtn';
import MyInput from './components/UI/input/MyInput';


function App() {
  const [posts,setPosts] = useState([
    {id:1,title:'JavaScript',body:'Description'},
    {id:2,title:'JavaScript 2',body:'Description'},
    {id:3,title:'JavaScript 3',body:'Description'},
  ]);

  const [post,setPost] = useState({title:'',body:''});

  

  const addNewPost = (e) => {

    e.preventDefault()
    setPosts([...posts, {...post, id: Date.now()}])
    setPost({title:'',body:''})
  }

  return (
    <div className="App">
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
      <PostList posts={posts} title={'List Posts 1'}/>
    </div>
  );
}

export default App;
