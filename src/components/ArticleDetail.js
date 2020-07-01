import React from 'react'
 
export default function ArticleDetail ({ article, up }) {
  const { title, author, id, likes } = article

  function upOne () {
    up(id)
  }

  return <div>
    <h5>
      {title}
      {' '}
      (#{id})
      {' '}
      <button onClick={upOne}>like</button>
    </h5>

    <p><i>Written by {author}</i></p>

    <p>This article was liked {likes} times</p>
  </div>
}