import { FC } from "react";
import { selectSidebar } from "@/store/reducers/sidebar/selectors";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import SidebarLink from "@/components/SidebarLink";
import SidebarSublinks from "@/components/SidebarSublinks";
import Burger from "@/components/UI/Burger";
import TextField from "@/components/UI/TextField";
import { links } from "./Sidebar.constans";
import styles from "./Sidebar.module.scss";
import { useRouter } from "next/router";

export interface ILink {
    icon: any;
    title: string;
    href: string;
    subLinks?: ILink[];
}

const Sidebar: FC = () => {
    const router = useRouter()
    const { active } = useTypedSelector(selectSidebar);

    const sidebarShow = active ? styles.sidebar_active : null

    const items = links.map((link, index) => { // намеренно использую index в качестве ключа, потому-что список не будет видоизменяться

        if (link.subLinks) {
            return <SidebarSublinks link={link} key={'sublist'} title={link.title} />
        }

        return (
            <li key={index}>
                <SidebarLink
                    className={styles.link}
                    href={link.href}
                    icon={link.icon}
                    active={link.href === router.pathname}
                >
                    {link.title}
                </SidebarLink>
            </li>
        )
    })

    return (
        <aside className={`${styles.sidebar} ${sidebarShow}`}>
            <Burger className={`${styles.burger} ${active ? styles.burger_active : null}`} />
            <div className={styles.content}>
                <TextField textStyle={'title'}>Меню</TextField>
                <ul className={styles.list}>
                    {items}
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar