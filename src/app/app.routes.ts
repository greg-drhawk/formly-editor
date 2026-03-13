import { Routes } from '@angular/router';
import { provideEditorConfig } from '@sesan07/ngx-formly-editor';

import { drHawkEditorConfig } from 'src/app/drhawk/drhawk.config';
import { primengEditorConfig } from 'src/app/primeng/primeng.config';
import { providePrimeNG } from 'src/app/primeng/primeng.provider';
import { bootstrapEditorConfig } from './bootstrap/bootstrap.config';
import { provideBootstrap } from './bootstrap/bootstrap.provider';
import { provideDrhawk } from './drhawk/drhawk.provider';
import { materialEditorConfig } from './material/material.config';
import { provideMaterial } from './material/material.provider';
export const routes: Routes = [
    {
        path: 'primeng',
        loadComponent: () => import('./primeng/primeng.component').then(m => m.PrimeNGComponent),
        providers: [providePrimeNG(), provideEditorConfig(primengEditorConfig)],
    },
    {
        path: 'bootstrap',
        loadComponent: () => import('./bootstrap/bootstrap.component').then(m => m.BootstrapComponent),
        providers: [provideBootstrap(), provideEditorConfig(bootstrapEditorConfig)],
    },
    {
        path: 'material',
        loadComponent: () => import('./material/material.component').then(m => m.MaterialComponent),
        providers: [provideMaterial(), provideEditorConfig(materialEditorConfig)],
    },
    {
        path: 'drhawk',
        loadComponent: () => import('./drhawk/drhawk.component').then(m => m.DrHawkComponent),
        providers: [provideDrhawk(), provideEditorConfig(drHawkEditorConfig)],
    },
    { path: '**', redirectTo: 'material' },
];
