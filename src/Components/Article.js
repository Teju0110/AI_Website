import React from 'react'
import './Article.css'

const Article = ({imageURL,date,text}) => {
  return (
    <div className='article'>
      <div className='article_image'>
        <img src={imageURL} alt="Blog Image"/>
      </div>
      <div className='article_content'>
        <div>
          <p>{date}</p>
          <h3>{text}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article