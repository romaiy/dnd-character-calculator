import CalculatorPage from "../pages/CalculatorPage/CalculatorPage";
import CharactersPage from "../pages/CharactersPage/CharactersPage";
import ClassesPage from "../pages/ClassesPage/ClassesPage";
import HomePage from "../pages/HomePage/HomePage";
import OnePacePage from "../pages/OneRacePage/OneRacePage";
import RacePage from "../pages/RacePage/RacePage";
import { CHARACTERS_ROUTE, CLASSES_ROUTE, HOME_ROUTE, RACE_ROUTE, CALCULATOR_ROUTE } from "./const";
import { IconSwords, IconUsers, IconDeviceFloppy, IconCalculator } from '@tabler/icons-react';

interface Route {
  path: string,
  Component: () => JSX.Element,
  title: string,
  Icon: React.FC<any>
}

export const AppRoutes: Route[] = [
  {
    path: HOME_ROUTE,
    Component: HomePage,
    title: 'Главная страница',
    Icon: IconUsers,
  },
  {
    path: RACE_ROUTE,
    Component: RacePage,
    title: 'Расы',
    Icon: IconUsers
  },
  {
    path: CLASSES_ROUTE,
    Component: ClassesPage,
    title: 'Классы',
    Icon: IconSwords
  },
  {
    path: CHARACTERS_ROUTE,
    Component: CharactersPage,
    title: 'Мои персонажи',
    Icon: IconDeviceFloppy,
  },
  {
    path: CALCULATOR_ROUTE,
    Component: CalculatorPage,
    title: 'Калькулятор',
    Icon: IconCalculator,
  },
  {
    path: RACE_ROUTE + '/:id',
    Component: OnePacePage,
    title: 'Id',
    Icon: IconUsers,
  },
];