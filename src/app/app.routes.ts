import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('mf-dashboard/routes').then(mf => mf.routes),
    title: 'Dashboard',
  },
  {
    path: 'Dashboard',
    loadChildren: () => import('mf-dashboard/routes').then(mf => mf.routes),
    title: 'Dashboard'
  },
  {
    path: 'products',
    loadChildren: () => import('mf-products/routes').then(mf => mf.routes),
    title: 'Products'
  },
  {
    path: 'orders',
    loadChildren: () => import('mf-orders/routes').then(mf => mf.routes),
    title: 'Orders'
  }
];
