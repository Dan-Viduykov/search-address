import { FC } from "react";
import Burger from "@/components/Burger";
import styles from "./Sidebar.module.scss";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { selectSidebar } from "@/store/reducers/sidebar/selectors";

const Sidebar: FC = () => {
    const { show } = useTypedSelector(selectSidebar);

    const sidebarShow = show ? styles.sidebar_active : null

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