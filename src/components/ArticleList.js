import React, { useState } from 'react'
import ArticleDetail from './ArticleDetail'

export default function ArticleList () {
  const initialArticleDatas = [
    { id: 4, author: 'rein', title: 'always be nice', likes: 1 },
    { id: 1, author: 'david', title: 'always separate everything', likes: 0 },
    { id: 2, author: 'bruinsma', title: 'always be hard working', likes: 5 },
    { id: 3, author: 'rein', title: 'always help people', likes: 0 },
  ]

  const [articleDatas, setArticleDatas] = useState(initialArticleDatas)

  function up (id) {
    const newArticleDatas = articleDatas.map(articleData => {
      const match = articleData.id === id

      // if (match) {
      //   return { ...articleData, likes: articleData.likes + 1 }
      // }

      // return articleData

      return match
        ? { ...articleData, likes: articleData.likes + 1 }
        : articleData
    })

    console.log('newArticleDatas:', newArticleDatas)
    setArticleDatas(newArticleDatas)
  }

  // map over the array
  // data { id, author, title } -> jsx <p>{title} {author} {id}</p>

  const posts = articleDatas.map(articleData => (
    <ArticleDetail
      article={articleData}
      key={articleData.id}
      up={up}
    />
  ))

  const total = articleDatas.reduce(
    (total, articleData) => {
      return total + articleData.likes
    },
    0
  )

  return <div>
    <p><i>Our articles were liked a total of {total} times</i></p>

    {posts}
  </div>
}