import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { en_US, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { httpInterceptor } from '../app/utils/http-interceptor';
import { LoadingService } from '../app/services/loading.service';
import { NzSpinModule } from 'ng-zorro-antd/spin';

registerLocaleData(en);


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideNzI18n(en_US), 
    importProvidersFrom(FormsModule, NzSpinModule), 
    provideAnimationsAsync(), 
    provideHttpClient(withInterceptors([httpInterceptor]))
  ]
};
