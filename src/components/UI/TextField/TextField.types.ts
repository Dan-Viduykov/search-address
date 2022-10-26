const enum Tags {
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'p',
    'span'
}

const enum TextTypes {
    'headerLink',
    'sidebarLink',
    'base'
}

export interface TextFieldProps {
	className?: string;
	tag?: keyof typeof Tags;
    textStyle?: keyof typeof TextTypes;
}