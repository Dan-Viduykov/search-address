import { FC, PropsWithChildren } from "react";
import styles from "./TextField.module.scss";
import { TextFieldProps } from "./TextField.types";

const TextField: FC<PropsWithChildren<TextFieldProps>> = ({className, tag = 'p', textStyle = 'base', children, ...props}) => {
	const Tag = `${tag}` as keyof JSX.IntrinsicElements;

	return (
		<Tag className={`${styles.text} ${styles[textStyle]} ${className}`} {...props}>
			{children}
		</Tag>
    )
}
export default TextField