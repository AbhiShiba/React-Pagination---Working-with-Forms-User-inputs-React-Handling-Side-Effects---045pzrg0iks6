import React, { Fragment, Suspense, useEffect, useState } from 'react'
import { PaginationButtonsList } from './PaginationButtonsList'
import { Post } from './Post';


const PostList = () => {
    
    const [data1,setData1] = useState("");
    const [buttonData,setButtonData] = useState("");
    

    let url = buttonData == "" ? "https://jsonplaceholder.typicode.com/posts?_page=1&_limit=5" : "https://jsonplaceholder.typicode.com/posts?_page="+buttonData+"&_limit=5";
    

    useEffect(() => {
        const fetchPost = async () => {
            const response = await fetch(url);
            
            const newData = await response.json();
            
           setData1(newData);
        }
        fetchPost()
    },[buttonData])
    
    const ButtonFunc = (numb) => {
        setButtonData(numb);
    }
   
        
    return (
        <>
        
        <Post data = {data1}/>
      
            
            
            <PaginationButtonsList buttonPressed={ButtonFunc}/>
        </>
    )
}

export { PostList }

