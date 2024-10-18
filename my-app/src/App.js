import React, {useState}from 'react';
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter';
import './style/app.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';


function App() {
  const [posts,setPosts] = useState([
    {id:1,title:'JavaScript',body:'Description'},
    {id:2,title:'JavaScript 2',body:'Description'},
    {id:3,title:'JavaScript 3',body:'Description'},
  ]);

  const [selectedSort,setSelectedSort] = useState('')

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
    setPosts([...posts].sort((a,b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{margin:'15px 0'}} />
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultVelue='Sort'
          options={[
            {value:'title',name:'Title'},
            {value:'body',name:'Text'}
          ]}
        />
      </div>
      {posts.length !== 0
        ? 
        <PostList remove={removePost} posts={posts} title={'List Posts 1'}/>
        : 
        <h1 style={{textAlign:'center'}}>
          No Posts
        </h1>
      }
    </div>
  );
}

export default App;
