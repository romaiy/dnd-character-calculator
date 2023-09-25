import ClassesPage from "../pages/ClassesPage/ClassesPage";
import HomePage from "../pages/HomePage/HomePage";
import RacePage from "../pages/RacePage/RacePage";
import { CLASSES_ROUTE, HOME_ROUTE, RACE_ROUTE } from "./const";

export const AppRoutes = [
    {
        path: HOME_ROUTE,
        Component: HomePage,
        title: 'Главная страница',
    },
    {
        path: RACE_ROUTE,
        Component: RacePage,
        title: 'Рассы',
    },
    {
        path: CLASSES_ROUTE,
        Component: ClassesPage,
        title: 'Классы',
    },
];