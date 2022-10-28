import { FC, useEffect, useState } from "react";
import { ILink } from "@/components/Sidebar/Sidebar";
import SidebarLink from "@/components/SidebarLink";
import styles from "./SidebarSublinks.module.scss";
import TextField from "../UI/TextField";
import Image from "next/image";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { selectSidebar } from "@/store/reducers/sidebar/selectors";

interface SidebarSublinksProps {
    link: ILink;
    title: string;
}

const SidebarSublinks: FC<SidebarSublinksProps> = ({ link, title }) => {
    const { active } = useTypedSelector(selectSidebar)
    const [ open, setOpen ] = useState(false)

    const handleClick = () => {
        setOpen(old => !old)
    }

    useEffect(() => {
        active ? null : setOpen(false)
    }, [active])

    const items = link.subLinks?.map((link, index) => { // намеренно использую index в качестве ключа, потому-что список не будет видоизменяться
        return (
            <li key={index}> 
                <SidebarLink
                    className={styles.link}
                    href={link.href}
                    icon={link.icon}
                >
                    {link.title}
                </SidebarLink>
            </li>
        )
    })

    return (
        <li className={styles.content}>
            <button className={styles.button} onClick={handleClick}>
                <Image className={styles.icon} src={link.icon} alt='' />
                <TextField className={styles.text}>{title}</TextField>
                <div className={`${styles.triangle} ${open ? styles.triangle_active : null}`} />
            </button>
            <ul className={`${styles.list} ${open ? styles.list_active : null}`}>
                {items}
            </ul>
        </li>
    )
}

export default SidebarSublinks