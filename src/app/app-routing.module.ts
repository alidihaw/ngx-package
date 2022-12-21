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
        path: 'ngx-rupiah',
        loadChildren: () =>
          import('./packages/ngx-rupiah/ngx-rupiah.module').then((m) => m.PackageNgxRupiahModule),
        canActivate: []
      },
      {
        path: 'ngx-currency',
        loadChildren: () =>
          import('./packages/ngx-currency/ngx-currency.module').then((m) => m.PackageNgxCurrencyModule),
        canActivate: []
      },
      {
        path: 'ngx-copy',
        loadChildren: () =>
          import('./packages/ngx-copy/ngx-copy.module').then((m) => m.PackageNgxCurrencyModule),
        canActivate: []
      },
      {
        path: 'ngx-image-tagger',
        loadChildren: () =>
          import('./packages/ngx-image-tagger/ngx-image-tagger.module').then((m) => m.PackageNgxImageTaggerModule),
        canActivate: []
      },
      {
        path: 'ngx-whatsapp',
        loadChildren: () =>
          import('./packages/ngx-whatsapp/ngx-whatsapp.module').then((m) => m.PackageNgxWhatsappModule),
        canActivate: []
      },
      {
        path: 'ngx-scroll-to-top',
        loadChildren: () =>
          import('./packages/ngx-scroll-to-top/ngx-scroll-to-top.module').then((m) => m.PackageNgxScrollToTopModule),
        canActivate: []
      },
      {
        path: 'ngx-timezone',
        loadChildren: () =>
          import('./packages/ngx-timezone/ngx-timezone.module').then((m) => m.PackageNgxTimezoneModule),
        canActivate: []
      },
      {
        path: 'ngx-country',
        loadChildren: () =>
          import('./packages/ngx-country/ngx-country.module').then((m) => m.PackageNgxCountryModule),
        canActivate: []
      },
      {
        path: 'ngx-ip',
        loadChildren: () =>
          import('./packages/ngx-ip/ngx-ip.module').then((m) => m.PackageNgxIPModule),
        canActivate: []
      },
      {
        path: 'ngx-device',
        loadChildren: () =>
          import('./packages/ngx-device/ngx-device.module').then((m) => m.PackageNgxDeviceModule),
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
