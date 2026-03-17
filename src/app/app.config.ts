import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';

import { provideFormlyCore } from '@ngx-formly/core';
import { withFormlyPrimeNG } from '@ngx-formly/primeng';
import Lara from '@primeng/themes/lara';
import { provideEditor } from '@sesan07/ngx-formly-editor';
import { providePrimeNG } from 'primeng/config';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
    providers: [
        provideHttpClient(),
        provideAnimations(),
        providePrimeNG({
            ripple: true,
            theme: {
                preset: Lara,
                options: {
                    darkModeSelector: false || 'none',
                },
            },
        }),
        provideFormlyCore(withFormlyPrimeNG()),
        provideRouter(routes),
        provideEditor(),
    ],
};
