import React from 'react'

const Posts = ({posts,loading}) => {
    if (loading){
        return<h1>loading...</h1>
    }
  return (
    <div>
        <ul className='list-group mb-4'>
        {posts.map(post=>(
            <li key={post.id} className="list-group-item">
                {post.name}
            </li>
        ))}
        </ul>
    </div>
  )
}

export default Posts