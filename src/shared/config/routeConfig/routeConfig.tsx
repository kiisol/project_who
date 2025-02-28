import { AboutPage } from "pages/AboutPage"
import { MainPage } from "pages/MainPage"
import { RouteProps } from "react-router-dom"

//Создаем перечисление внутри которого объявим список роутов
//которые есть в нашем приложении и название для них. Это если 
//мы захотим хранить название маршрутов в redux
export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about'
}
//создаем объект для каждого маршрута из enum AppRoutes укажем путь
//до соответствующего компонента
export const RoutePath:Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about'
}
//объявление роутов и компонент котрый мы должны отрисовывать
export const routeConfig:Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />
    }
}