import { useLoaderData } from "react-router-dom"
import { useQuery } from "@tanstack/react-query";
import { useFetchPosts } from "../api/api";
import { AuthStore } from "../state/AuthStore";

export const Posts = () => {
    console.log(AuthStore.getUser());
    const {isLoading: arePostsLoading, isError: isPostsLoadingError, error: postsLoadingError, data: posts} = useQuery({
        queryKey: ["posts"],
        queryFn: useFetchPosts,
        enabled: !!AuthStore.getUser()    
    });    
    return (<>
    {
        arePostsLoading ? <h1>Loading...</h1> :
        (<ul className="list">
            {
                posts.map(post => <li id={post.id}>{post.title}</li>)
            }            
        </ul>)
    }
    </>)
}