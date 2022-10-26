import { FC, useState } from "react";
import Burger from "@/components/Burger";
import styles from "./Sidebar.module.scss";

const Sidebar: FC = () => {
    const [ active, setActive ] = useState(false)

    const sidebarShow = active ? styles.sidebar_active : null

    return (
        <aside className={`${styles.sidebar} ${sidebarShow}`}>
            <Burger className={styles.burger} />
            <div className={styles.content}>
                <h3 className={styles.title}>Меню</h3>
                <ul className={styles.list}>
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar