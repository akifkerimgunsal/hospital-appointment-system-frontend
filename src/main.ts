import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// Eski Yapı:
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));