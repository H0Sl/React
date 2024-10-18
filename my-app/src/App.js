import React, {useState,useMemo, useEffect} from 'react';
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter';
import './style/app.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';
import MyInput from './components/UI/input/MyInput';
import MyBtn from './components/UI/button/MyBtn';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';
import {usePosts} from './hooks/usePosts';
import axios from 'axios';
import PostService from './API/PostService';
import Loader from './components/UI/Loader/Loader';

function App() {
  const [posts,setPosts] = useState([]);
  const [filter,setFilter] = useState({sort:'',query:''});
  const [modal,setModal] = useState(false);
  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query);
  const [isPostsLoading,setIsPostsLoading] = useState(false);

  useEffect(() => {
    fetchPosts()
  },[])

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  async function fetchPosts(){
    setIsPostsLoading(true);
    setTimeout( async () => {
      const posts = await PostService.getAll();
      setPosts(posts)
      setIsPostsLoading(false);
    },1000)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <MyBtn style={{marginTop:'30px'}} onClick={() => setModal(true)} >
        Create post
      </MyBtn>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{margin:'15px 0'}} />
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      {isPostsLoading
        ? <div style={{display:'flex',justifyContent:'center',marginTop:'50px'}}> 
            <Loader/>
          </div>
        : <PostList remove={removePost} posts={sortedAndSearchPosts} title={'List Posts 1'}/>
      }
    </div>
  );
}

export default App;
