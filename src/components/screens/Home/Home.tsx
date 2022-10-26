import { FC } from "react";
import Image from "next/image";
import TextField from "@/components/UI/TextField";
import styles from "./Home.module.scss";

const Home: FC = () => {
    return (
        <div className={styles.wrap}>
            <TextField tag="h1" textStyle={'sidebarLink'}>
                Приветствую вас на поисковике адрессов от Данила!
            </TextField>
            <Image
                className={styles.image}
                loader={() => 'https://sun3.userapi.com/sun3-10/s/v1/ig2/fua5xLfKoJlnv21WVubmZ-MnbLm7I2bSnYW3Y6OyeYluC467p4HXmM2UQGqd6ekz848MKdxRwWSspm5W941dHgHP.jpg?size=504x1080&quality=95&type=album'}
                src={'https://sun3.userapi.com/sun3-10/s/v1/ig2/fua5xLfKoJlnv21WVubmZ-MnbLm7I2bSnYW3Y6OyeYluC467p4HXmM2UQGqd6ekz848MKdxRwWSspm5W941dHgHP.jpg?size=504x1080&quality=95&type=album'}
                alt={'Лучший кандидат на должность в вашей компании!'}
                width={200}
                height={400} />
        </div>
    )
}

export default Home