import React from 'react'
import styles from "./TopicList.module.css"
import Button from '../Button/Button'
import Link from 'next/link'
import {HiPencilAlt} from "react-icons/hi"


const TopicList = async () => {

const getTopics=async()=>{
  try {
    const res = await fetch('http://localhost:3000/api/topics', 
    {cache: "no-store"})

if (!res.ok) {
  throw new Error('Failed to fetch topics')
} 
return res.json()
  } catch (error) {
    console.log("Error loading topics",error);
  }
}
const {topics}=await getTopics()
  return (
    <>
{topics.map(t=>(

<div key={t._id} className={styles.TopicListWrapper}>
    <div>
        <h2 className={styles.TopicTitle}><i>{t.title}</i></h2>
        <div className={styles.TopicDescription}>{t.description}</div>
    </div>
    <div className={styles.TopicBtns}>
        <Button id={t._id}/>
        <Link className={styles.LinkEdit} href={`/pages/EditTopic/${t._id}`}>
<HiPencilAlt size={25}/>
        </Link>
    </div>
</div>
))}
    </>
  )
}

export default TopicList