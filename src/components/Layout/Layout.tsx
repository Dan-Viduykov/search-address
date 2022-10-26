import { FC, PropsWithChildren } from "react";
import Container from "@/components/Container";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import styles from "./Layout.module.scss";

const Layout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <Header />
            <div className={styles.content}>
                <Sidebar />
                <main className={styles.main}>
                    <Container>
                        {children}
                    </Container>
                </main>
            </div>
        </>
    )
}

export default Layout