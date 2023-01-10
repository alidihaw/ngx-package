import { NgModule } from '@angular/core';
import { SplashScreenService } from '@providers/splash-screen/splash-screen.service';

@NgModule({
    providers: [
        SplashScreenService
    ]
})
export class SplashScreenModule
{
    /**
     * Constructor
     */
    constructor(private _fuseSplashScreenService: SplashScreenService)
    {
    }
}
