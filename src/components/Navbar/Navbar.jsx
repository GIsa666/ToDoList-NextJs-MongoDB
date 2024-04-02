import Link from 'next/link'
import React from 'react'
import styles from "./navbar.module.css"
const Navbar = () => {
  return (
    <nav className={styles.NavbarWrapper}>
        <Link className={styles.FirstLink} href={'/'}>
          Home  
        </Link>
        <Link className={styles.SecondLink} href={'/pages/AddTopic'}>Add Topic</Link>
    </nav>
  )
}

export default Navbar







