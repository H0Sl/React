import React, {useState} from 'react';
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter';
import './style/app.css';
import PostList from './components/PostList';


function App() {
  const [posts,serPosts] = useState([
    {id:1,title:'JavaScript',body:'Description'},
    {id:2,title:'JavaScript 2',body:'Description'},
    {id:3,title:'JavaScript 3',body:'Description'},
  ])

  return (
    <div className="App">
      <PostList posts={posts} title={'List Posts 1'}/>
    </div>
  );
}

export default App;
