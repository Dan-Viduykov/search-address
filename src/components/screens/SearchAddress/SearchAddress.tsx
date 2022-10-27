import { FC, useState } from "react";
import Image from "next/image";
import { AddressSuggestions, DaDataSuggestion, DaDataAddress } from 'react-dadata';
import TextField from "@/components/UI/TextField";
import searchSVG from '@/assets/search.svg'
import styles from "./SearchAddress.module.scss";
import 'react-dadata/dist/react-dadata.css';

const SearchAddress: FC = () => {
    const [value, setValue] = useState<DaDataSuggestion<DaDataAddress> | undefined>();

    return (
        <div className={styles.wrap}>
            <TextField className={styles.title} textStyle={'title'}>Поиск адресов</TextField>
            <TextField className={styles.subtitle}>Введите интересующий вас адрес</TextField>
            <div className={styles.inputField}>
                <AddressSuggestions
                    containerClassName={styles.input}
                    suggestionClassName={styles.item}
                    hintText={<TextField className={styles.hintText} textStyle={"title"}>Адреса</TextField>}
                    token="152096684702ea6bcab8b37251db07e80f0ab2db"
                    value={value}
                    onChange={setValue}
                    delay={300}
                    count={15}
                />
                <button className={styles.buttonSearch}>
                    <Image src={searchSVG} alt='' />
                    <TextField textStyle={'title'}>Поиск</TextField>
                </button>
            </div>
        </div>
    )
}

export default SearchAddress