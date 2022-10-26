import homeSVG from "@/assets/home.svg"

export const links = [
    {
        icon: homeSVG,
        title: 'Главная',
        href: '/'
    },
    {
        icon: homeSVG,
        title: 'Поиск адресов',
        href: '/address'
    },
    {
        icon: homeSVG,
        title: 'Таблицы',
        href: '/tables'
    },
    {
        icon: homeSVG,
        title: 'Календарь',
        href: '/calendar'
    },
    {
        icon: homeSVG,
        title: 'Карты',
        href: '/maps'
    },
    {
        icon: homeSVG,
        title: 'Виджеты',
        href: '/widgets'
    },
    {
        icon: homeSVG,
        title: 'Настройки',
        href: '/settings',
        subLinks: [
            {
                icon: homeSVG,
                title: 'Настройки профиля',
                href: '/user-settings/',
            },
            {
                icon: homeSVG,
                title: 'Управление финансами',
                href: '/finance-settings',
            }
        ]
    },
    {
        icon: homeSVG,
        title: 'Выход',
        href: '/output'
    }
]