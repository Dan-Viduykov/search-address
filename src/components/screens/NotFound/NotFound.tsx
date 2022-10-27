import TextField from "@/components/UI/TextField";
import { FC } from "react";
import styles from "./NotFound.module.scss";

const NotFount: FC = () => {
    return (
        <>
            <TextField className={styles.title} tag="h2" textStyle={'title'}>К сожалению даннй страницы не существует{`(((`}</TextField>
        </>
    )
}

export default NotFount