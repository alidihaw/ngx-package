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
      {
        path: 'ngx-image-tagger',
        loadChildren: () =>
          import('./packages/ngx-image-tagger/ngx-image-tagger.module').then((m) => m.PackageNgxImageTaggerDirectiveModule),
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
