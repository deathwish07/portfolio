import React, { useEffect, useState } from 'react';
import "./blog.css";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase-config';
import AboutImg from "../../assets/about.jpg"


const Blog = () => {
    const [postLists, setPostList] = useState([]);
    const postCollectionRef = collection(db, 'blogs');
    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postCollectionRef);
            setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        };
        getPosts()
    })
    return (
        <div className='home'>
            <img src={AboutImg}/>
            <div className="post__container grid">
                {postLists.map((post) => {
                    return (
                        <div>
                            <div className='postInfo'>
                                <span className="postTitle">
                                    <div className="post__title">
                                        {post.title}
                                    </div>
                                </span>
                                <hr />
                                {/* <span className="postDate">{post.createdAt}</span> */}
                            </div>
                            <p className="postDesc">
                                {post.text}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Blog