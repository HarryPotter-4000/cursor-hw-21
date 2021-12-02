import React from "react";
import Card from "../components/Cards/Card";
import styles from "./styles.module.css"
import avatarAnakin from "../assets/img/a-anakin.jpg"
import avatarChwe from "../assets/img/a-chwe.jpg"
import avatarYoda from "../assets/img/a-yoda.jpg"
import ray from "../assets/img/ray.jpg"
import bb8 from "../assets/img/BB-8.jpg"
import ray2 from "../assets/img/ray2.jpg"

const authors = [
  {
    name: "Anakin skywalker",
    nickname: "@dart_vader",
    content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
    date: "26 feb",
    comment: '482',
    retweet: '146',
    likes: '887',
    avatar: avatarAnakin,
    image: ray,
    id: 1,
  },
  {
    name: "Chewbacca",
    nickname: "@chewbacca",
    content: "Where is the full map, BB-8?",
    date: "26 feb",
    comment: '234',
    retweet: '354',
    likes: '999',
    avatar: avatarChwe,
    image: bb8,
    id: 2,
  },
  {
    name: "Yoda",
    nickname: "@grand_master_yoda",
    content: "The balance of the universe is shaking again...",
    date: "27 feb.",
    comment: '123',
    retweet: '11',
    likes: '222',
    avatar: avatarYoda,
    image: ray2,
    id: 3,
  }
]

function StarWarsPage() {
  return (
    <div className={styles.container}>
      <div className={styles.starwars}>
        {authors.map(author => {
          return (
            <Card
              avatar={author.avatar}
              name={author.name}
              nickname={author.nickname}
              content={author.content}
              date={author.date}
              image={author.image}
              comment={author.comment}
              retweet={author.retweet}
              likes={author.likes}
              key={ author.id }/>
          )
        })}
      </div>
    </div>
  )
}

export default StarWarsPage;
