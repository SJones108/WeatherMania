import React from 'react';
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import About from "../pages/About";
import Weather from "../pages/Weather";
import Stormchasers from "../pages/Stormchasers";


interface RouteType {
    path: string,
    component: React.ComponentType<any>,
    name: string,
    protected: boolean
}

const routes: RouteType[] = [
    {
      path: "",
      component: Home,
      name: "Home Screen",
      protected: false,
    },
    {
      path: "/dashboard",
      component: Dashboard,
      name: "Dashboard",
      protected: true,
    },
    {
      path: "/weather",
      component: Weather,
      name: "Weather",
      protected: false,
    },
    {
      path: "/stormchasers",
      component: Stormchasers,
      name: "Stormchasers",
      protected: false,
    },
    {
      path: "/about",
      component: About,
      name: "About",
      protected: false,
    }
];

export default routes;
