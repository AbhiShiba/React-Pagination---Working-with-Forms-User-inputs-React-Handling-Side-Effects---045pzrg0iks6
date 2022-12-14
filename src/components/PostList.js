import React, { Fragment, Suspense, useEffect, useState } from 'react'
import { PaginationButtonsList } from './PaginationButtonsList'
import { Post } from './Post';


const PostList = () => {
    
    const [data,setData1] = useState([]);
    const [buttonData,setButtonData] = useState("1");
    const [loading,setLoading] = useState(true)
    

    let url = "https://jsonplaceholder.typicode.com/posts?_page="+buttonData+"&_limit=5";
    

    useEffect(() => {
        setLoading(true);
        const fetchPost = async () => {
            const response = await fetch(url);
            
            const newData = await response.json();
            setLoading(false)
            
           setData1(newData);
        }
        fetchPost()
    },[buttonData])
    
    const ButtonFunc = (numb) => {
        setButtonData(numb);
    }
   
        
    return (
        <>
        <div className="post-list">
                {
                    loading ?
                        <div className="loader">Loading...</div>
                        : data.map(post => <Post body={post.body} title={post.title} key={post.id} />)
                }
            </div>
            
            
            <PaginationButtonsList buttonPressed={ButtonFunc}/>
        </>
    )
}

export { PostList }

