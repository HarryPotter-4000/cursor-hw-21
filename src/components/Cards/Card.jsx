import React from 'react'
import cardStyles from '../Cards/Card.module.css'

export default function Card(props) {
  const { name, nickname, content, date, comment, retweet, likes, image, avatar } = props;

  return (
    <div className={ cardStyles.container }>
      <img className={ cardStyles.avatar } src={ avatar } alt="" />
      <div className={ cardStyles.box }>
        <div className={ cardStyles.header }>
          <div className={ cardStyles.title }>
            <p className={ cardStyles.name }>{ name }</p>
            <p className={ cardStyles.check }><i className="fas fa-check-circle"></i></p>
            <p className={ cardStyles.nickname }>{ nickname }</p>
            <p className={ cardStyles.date }>· { date }</p>
            <p className={ cardStyles.arrow }><i className="fas fa-chevron-down"></i></p>
          </div>
          <div className={ cardStyles.content }>{ content }</div>
        </div>
        <img className={ cardStyles.photo } src={image} alt="" />
        <div className={ cardStyles.socials }>
          <p><i className="far fa-comment"></i> { comment }</p>
          <p><i className="fas fa-retweet"></i> { retweet }</p>
          <p><i className="fas fa-heart"></i> { likes }</p>
          <p><i className="fas fa-share-alt"></i></p>
        </div>
      </div>
    </div>
  )

}