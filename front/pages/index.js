import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppLayout from "../components/AppLayout";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";
import { LOAD_POSTS_REQUEST } from "../reducers/post";


const Home = () => {
    const dispatch = useDispatch();
    const {isLoggedIn} = useSelector((state)=> state.user);
    const {mainPosts, hasMorePosts, loadPostsLoading} = useSelector((state)=> state.post);
    
    // 컴포넌트 디드마운트 효과 / 의존성 배열 비었을때.
    useEffect(() => {
        dispatch({
            type: LOAD_POSTS_REQUEST,
        })  

    }, []);
    
    useEffect(() => {

        function onScroll(){
          
            if(window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300){
                console.log(hasMorePosts);
                if(hasMorePosts && !loadPostsLoading){
                    dispatch({
                        type: LOAD_POSTS_REQUEST,
                    });
                }
            }
        }
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        }
    }, [hasMorePosts]);



    return (
        <AppLayout>
            {isLoggedIn && <PostForm/>}
            {mainPosts.map((post)=> <PostCard key={post.id} post={post} />)}
        </AppLayout>
    );
}

export default Home; 