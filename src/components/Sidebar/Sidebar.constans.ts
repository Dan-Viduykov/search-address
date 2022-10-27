import homeSVG from "@/assets/home.svg"
import searchSVG from "@/assets/search.svg"
import tableSVG from "@/assets/tables.svg"
import calendarSVG from "@/assets/calendar.svg"
import mapsSVG from "@/assets/maps.svg"
import widgetsSVG from "@/assets/widgets.svg"
import outSVG from "@/assets/out.svg"
import settingsSVG from "@/assets/settings.svg"

import financeSVG  from "@/assets/finance.svg"
import userSVG from "@/assets/user.svg"

export const links = [
    {
        icon: homeSVG,
        title: 'Главная',
        href: '/'
    },
    {
        icon: searchSVG,
        title: 'Поиск адресов',
        href: '/address'
    },
    {
        icon: tableSVG,
        title: 'Таблицы',
        href: '/tables'
    },
    {
        icon: calendarSVG,
        title: 'Календарь',
        href: '/calendar'
    },
    {
        icon: mapsSVG,
        title: 'Карты',
        href: '/maps'
    },
    {
        icon: widgetsSVG,
        title: 'Виджеты',
        href: '/widgets'
    },
    {
        icon: settingsSVG,
        title: 'Настройки',
        href: '/settings',
        subLinks: [
            {
                icon: userSVG,
                title: 'Настройки профиля',
                href: '/user-settings/',
            },
            {
                icon: financeSVG,
                title: 'Управление финансами',
                href: '/finance-settings',
            }
        ]
    },
    {
        icon: outSVG,
        title: 'Выход',
        href: '/output'
    }
]