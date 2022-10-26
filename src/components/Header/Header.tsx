import Image from "next/image";
import { FC } from "react";
import wrenchSVG from '@/assets/wrench.svg'
import personSVG from '@/assets/person.svg'
import Container from "@/components/Container";
import styles from "./Header.module.scss";
import Link from "next/link";

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <Container className={styles.container}>
                <Link href={'/'} className={styles.link}>
                    <Image src={wrenchSVG} alt='' />
                    <h3 className={styles.title}>Wrench CRM</h3>
                </Link>
                <Link href={'/user'} className={styles.link}>
                    <Image src={personSVG} alt='' />
                    <p className={styles.userName}>Имя Фамилия</p>
                </Link>
            </Container>
        </header>
    )
}

export default Header