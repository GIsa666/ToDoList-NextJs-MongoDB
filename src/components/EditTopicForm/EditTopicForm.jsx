"use client"
import { useRouter } from "next/navigation";
import styles from "./EditTopicForm.module.css"
import { useState } from "react";
const EditTopicForm = ({id,title,description}) => {

  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  
  
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      
      router.push("/");
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };
  
  
  return (
    <form onSubmit={handleSubmit} className={styles.formWrapper}>
    <input
    onChange={(e) => setNewTitle(e.target.value)}
    value={newTitle}
      className={styles.inputStyle}
      type="text"
      placeholder="Topic Title"
    />
    <input
     onChange={(e) => setNewDescription(e.target.value)}
     value={newDescription}
      className={styles.inputStyle}
      type="text"
      placeholder="Topic Description"
    />

    <button className={styles.SubmitBtn}>Update Topic</button>
  </form>
  )
}

export default EditTopicForm