import React from 'react'
import PostTile from '../component/post-tile'

function Posts() {
    return (
        <React.Fragment>
            <section className='container'>
                <PostTile />
                <PostTile />
                <PostTile />
                <PostTile />
            </section>
        </React.Fragment>
    )
}

export default Posts