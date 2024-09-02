import { Routes } from '@angular/router';
import { SampleComponent } from './components/sample.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '2',
  },
  {
    path: '2',
    component: SampleComponent,
  },
];
