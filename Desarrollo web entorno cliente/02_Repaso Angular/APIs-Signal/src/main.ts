import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { PaisComponent } from './app/componets/pais-component/pais-component';

bootstrapApplication(PaisComponent, {
  providers: [provideHttpClient(withFetch())],
}).catch((err) => console.error(err));
