import React from 'react'
import PostTile from '../component/post-tile'
import '../css/posts.css'

function Posts() {
    return (
        <React.Fragment>
            <section className='container posts-container'>
            {[...Array(3)].map(v => {
                return <PostTile 
                            tag="#TYPESCRIPT"
                            title="TypeScript Generics - Use Case and Examples"
                            time="2 DAYS AGO" 
                        />
            })}
            </section>
        </React.Fragment>
    )
}

export default Posts