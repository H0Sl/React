import React, {useState, useEffect} from 'react';
import '../style/app.css';
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import MyBtn from '../components/UI/button/MyBtn';
import PostFilter from '../components/PostFilter';
import MyModal from '../components/UI/MyModal/MyModal';
import {usePosts} from '../hooks/usePosts';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';
import { getPageCount} from '../utils/pages';
import Pagination from '../components/UI/MyPagination/Pagination';

function Posts() {
  const [posts,setPosts] = useState([]);
  const [filter,setFilter] = useState({sort:'',query:''});
  const [modal,setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit,page) =>{
    const response = await PostService.getAll(limit,page);
    setPosts(response.data)
    const totalCount = (response.headers['x-total-count'])
    setTotalPages(getPageCount(totalCount,limit))
  })

  useEffect(() => {
    fetchPosts(limit,page)
  },[])

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const changePage = (page) => {
    setPage(page)
    fetchPosts(limit,page)
  }

  return (
    <div className="App" style={{marginBottom:'30px'}}>
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
      {postError && 
        <h1>Error ${postError}</h1>
      }
      {isPostsLoading
        ? <div style={{display:'flex',justifyContent:'center',marginTop:'50px'}}> 
            <Loader/>
          </div>
        : <PostList remove={removePost} posts={sortedAndSearchPosts} title={'List Posts 1'}/>
      }
      <Pagination
        page={page}
        changePage={changePage}
        totalPages={totalPages}
      />
    </div>
  );
}

export default Posts;
