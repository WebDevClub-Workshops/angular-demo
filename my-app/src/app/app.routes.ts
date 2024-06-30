import { Route, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AboutPageComponent } from './about-page/about-page.component';

export const routes: Routes = [
    {
        title: "Home Component",
        path: "",
        component: HomeComponentComponent
    },
    {
        title: "About Component",
        path: "about",
        component: AboutPageComponent
    }
];
