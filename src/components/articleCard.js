import React from 'react';
import './articleCard.css'

const ArticleCard = (props) => (
    <div className='article-card'>
      <div className='card-content'>
        <div 
          className='image-head'
          style={{backgroundImage: `url(${props.img})`}}
        >
        </div>
        <div className='card-body'>
          <div>
              <h3>{props.title}</h3>
              <p>{props.publisher}</p>
          </div>
          <div className='article-stats'>
              <p>{props.time}</p>
              <p>{props.views}</p>
          </div>
        </div>
      </div>
    </div>
)

export default ArticleCard