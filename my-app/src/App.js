import React, {useState,useMemo} from 'react';
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter';
import './style/app.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';
import MyInput from './components/UI/input/MyInput';
import PostFilter from './components/PostFilter';


function App() {
  const [posts,setPosts] = useState([
    {id:1,title:'ааа',body:'ееее'},
    {id:2,title:'ллл 2',body:'ыыыы'},
    {id:3,title:'мммм 3',body:'шшш'},
  ]);

  const [filter,setFilter] = useState({sort:'',query:''})

  const sortedPosts = useMemo(() => {
    if(filter.sort){
      return [...posts].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts;
  }, [filter.sort,posts]);

  const sortedAndSearchPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
  }, [filter.query,sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{margin:'15px 0'}} />
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      <PostList remove={removePost} posts={sortedAndSearchPosts} title={'List Posts 1'}/>
    </div>
  );
}

export default App;
