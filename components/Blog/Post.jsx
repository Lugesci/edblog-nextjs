import React from 'react'
import Link from 'next/link';

const Post = ({ post }) => (
  <div>
    <h2>{post.title}</h2>
    <p>{post.body}</p>
    <span>{`Escrito por el usuario ${post.userId}`}</span>
    <Link href={`/blog/${post.id}`}><a>Leer más</a></Link>
  </div>
)

export default Post