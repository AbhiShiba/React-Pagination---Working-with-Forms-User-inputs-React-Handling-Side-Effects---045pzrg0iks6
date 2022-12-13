import React from 'react'
const Post = (props) => {

    
    return (
        <div className="post">
        {   props.data == "" ? <div id="loader">Loading...</div>: 
        props.data.map((item,index) => {
                    return (<>
                      
                        <h3>Title: {item.title}</h3>
                        <p>{item.body}</p>
                
                        </>)
                    
                })
            }
        </div>
    )
}

export { Post }