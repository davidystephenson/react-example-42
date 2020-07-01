import React from 'react'

export default function Articles () {
  const articles = [
    { id: 4, author: 'rein', title: 'always be nice' },
    { id: 1, author: 'david', title: 'always separate everything' },
    { id: 2, author: 'bruinsma', title: 'always be hard working' },
    { id: 3, author: 'rein', title: 'always help people' },
  ]

  // map over the array
  // data { id, author, title } -> jsx <p>{title} {author} {id}</p>

  function makeParagraph (article) {
    const { title, author, id } = article

    return <p key={id}>
      {title} ({author}) - {id}
    </p>
  }

  const paragraphs = articles.map(makeParagraph)

  return <div>
    {paragraphs}
  </div>
}