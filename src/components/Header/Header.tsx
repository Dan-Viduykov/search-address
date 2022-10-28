import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import TextField from "@/components/UI/TextField";
import wrenchSVG from '@/assets/wrench.svg'
import personSVG from '@/assets/person.svg'
import styles from "./Header.module.scss";

const Header: FC = () => {

    return (
        <header className={styles.header}>
            <Container className={styles.container}>
                <Link href={'/'} className={styles.link}>
                    <Image src={wrenchSVG} alt='' />
                    <TextField textStyle={'headerLink'}>
                        Wrench CRM
                    </TextField>
                </Link>
                <Link href={'/user'} className={styles.link}>
                    <Image src={personSVG} alt='' />
                    <TextField textStyle={'headerLink'}>
                        Имя Фамилия
                    </TextField>
                </Link>
            </Container>
        </header>
    )
}

export default Header