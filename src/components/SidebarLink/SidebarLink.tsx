import Image from "next/image";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";
import TextField from "../UI/TextField";
import styles from "./SidebarLink.module.scss";

interface SidebarLinkProps {
    className?: string;
    href: string;
    icon: string;
}

const SidebarLink: FC<PropsWithChildren<SidebarLinkProps>> = (props) => {
    const { className, children, href, icon } = props;
    
    return (
        <Link className={`${styles.link} ${className}`} href={href}>
            <Image className={styles.icon} src={icon} alt='' />
            <TextField className={styles.text}>{children}</TextField>
        </Link>
    )
}

export default SidebarLink