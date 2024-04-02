"use client"
import { HiOutlineTrash } from "react-icons/hi";
import styles from "./Button.module.css";
import { useRouter } from "next/navigation";

const Button = ({ id }) => {
  const router=useRouter()
  const removeTopic = async () => {
    const confirmed = confirm("Are you sure ?");

    if (confirmed) {
      const res=await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        router.refresh()
      }
      
    }
  };

  return (
    <button onClick={removeTopic} className={styles.Btn}>
      <HiOutlineTrash className={styles.RemoveBtn} size={24} />
    </button>
  );
};

export default Button;
