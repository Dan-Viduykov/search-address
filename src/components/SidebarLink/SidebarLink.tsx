import { useActions } from "@/hooks/useActions";
import Image from "next/image";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";
import TextField from "../UI/TextField";
import styles from "./SidebarLink.module.scss";

interface SidebarLinkProps {
    className?: string;
    href: string;
    icon: string;
    active?: boolean;
}

const SidebarLink: FC<PropsWithChildren<SidebarLinkProps>> = (props) => {
    const { className, children, href, icon, active = false } = props;
    const { setActive } = useActions()

    const handleClick = () => {
        setActive(false)
    }
    
    return (
        <Link
            className={`${styles.link} ${className} ${active ? styles.link_active : null}`}
            href={href}
            onClick={handleClick}
        >
            <Image className={styles.icon} src={icon} alt='' />
            <TextField className={styles.text}>{children}</TextField>
        </Link>
    )
}

export default SidebarLink