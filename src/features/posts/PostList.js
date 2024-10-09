import { useSelector } from "react-redux";
import {selectAllPosts} from './postsSlice';
import React from 'react';
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";

const PostList = () => {
    const posts = useSelector(selectAllPosts);
    const orderedPosts = posts.slice().sort((a,b)=>b.date.localeCompare(a.date));
    console.log("posts", posts)
    const renderPosts = posts.map(post=>(
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0,100)}</p>
            <PostAuthor userId={post.userId} />
            <TimeAgo timeStamp={post.date} /> 
        </article>
    ))
  return (
    <section>
        <h2>Posts</h2>
        {renderPosts}
    </section>
  )
}

export default PostList