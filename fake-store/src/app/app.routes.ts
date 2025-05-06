import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => {
            return import('./screens/home/home.component').then((m) => m.HomeComponent)
        },
    },
    {
        path: 'login',
        pathMatch: 'full',
        loadComponent: () => {
            return import('./screens/login/login.component').then((m) => m.LoginComponent)
        },
    },
    {
        path: 'all-products',
        pathMatch: 'full',
        loadComponent: () => {
            return import('./screens/all-products/all-products.component').then((m) => m.AllProductsComponent)
        },
    },
    {
        path: 'women-products',
        pathMatch: 'full',
        loadComponent: () => {
            return import('./screens/women-products/women-products.component').then((m) => m.WomenProductsComponent)
        },
    },
    {
        path: 'men-products',
        pathMatch: 'full',
        loadComponent: () => {
            return import('./screens/men-products/men-products.component').then((m) => m.MenProductsComponent)
        },
    },
    {
        path: 'electronics-products',
        pathMatch: 'full',
        loadComponent: () => {
            return import('./screens/electronics-products/electronics-products.component').then((m) => m.ElectronicsProductsComponent)
        },
    },
    {
        path: 'jewelry-products',
        pathMatch: 'full',
        loadComponent: () => {
            return import('./screens/jewelry-products/jewelry-products.component').then((m) => m.JewelryProductsComponent)
        },
    },
];
