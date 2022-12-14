import { FC, PropsWithChildren } from "react";
import { selectSidebar } from "@/store/reducers/sidebar/selectors";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import Container from "@/components/Container";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import styles from "./Layout.module.scss";

const Layout: FC<PropsWithChildren> = ({ children }) => {
    const { active } = useTypedSelector(selectSidebar)

    return (
        <>
            <Header />
            <div className={styles.content}>
                <Sidebar />
                <main className={`${styles.main} ${active ? styles.main_fixed : null}`}>
                    <Container>
                        {children}
                    </Container>
                </main>
            </div>
        </>
    )
}

export default Layout