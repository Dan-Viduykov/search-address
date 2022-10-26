import { FC, PropsWithChildren } from "react";
import styles from "./Container.module.scss";

interface ContainerProps {
    className?: string;
}

const Container: FC<PropsWithChildren<ContainerProps>> = ({ children, className }) => {
    return (
        <div className={`${styles.container} ${className}`}>
            {children}
        </div>
    )
}

export default Container