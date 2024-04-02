import { Roboto } from "next/font/google";
import './reset.css'
import Navbar from "@/components/Navbar/Navbar";
import styles from './layout.module.css'
const roboto = Roboto({weight:'400' , subsets: ["latin"],style:'normal' });

export const metadata = {
  title: "ToDoList",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div className={styles.layoutWrapper}>
       <Navbar/>
        <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
