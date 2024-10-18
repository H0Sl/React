import React, {useState,useMemo} from 'react';
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter';
import './style/app.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';
import MyInput from './components/UI/input/MyInput';


function App() {
  const [posts,setPosts] = useState([
    {id:1,title:'ааа',body:'ееее'},
    {id:2,title:'ллл 2',body:'ыыыы'},
    {id:3,title:'мммм 3',body:'шшш'},
  ]);

  const [selectedSort,setSelectedSort] = useState('')
  const [searchQuery,setSearchQuery] = useState('')

  const sortedPosts = useMemo(() => {
    if(selectedSort){
      return [...posts].sort((a,b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts;
  }, [selectedSort,posts]);

  const sortedAndSearchPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery))
  }, [searchQuery,sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{margin:'15px 0'}} />
      <div>
        <MyInput
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder='Search'
        />
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
      {sortedAndSearchPosts.length 
        ? 
        <PostList remove={removePost} posts={sortedAndSearchPosts} title={'List Posts 1'}/>
        : 
        <h1 style={{textAlign:'center'}}>
          No Posts
        </h1>
      }
    </div>
  );
}

export default App;
