import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
    canActivate: []
  },
  {
    path: 'packages',
    canActivate: [],
    children: [
      {
        path: 'ngx-currency-directive',
        loadChildren: () =>
          import('./packages/ngx-currency-directive/ngx-currency-directive.module').then((m) => m.PackageNgxCurrencyDirectiveModule),
        canActivate: []
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
