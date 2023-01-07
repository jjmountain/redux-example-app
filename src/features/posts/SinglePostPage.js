import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { PostAuthor } from './PostAuthor'

export const SinglePostPage = ({ match }) => {
  const { postId } = match.params

  console.log('postId', postId)

  const post = useSelector((state) => {
    const result = state.posts.find((post) => {
      return post.id === postId
    })
    return result
  })

  console.log('post is', post)

  if (!post) {
    console.log('in if statement', post)
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  return (
    <section>
      <article className="post">
        <PostAuthor userId={post.user} />
        <h2>{post.title}</h2>
        <p className="post-content">{post.content}</p>
        <Link to={`/editPost/${post.id}`} className="button">
          Edit Post
        </Link>
      </article>
    </section>
  )
}
