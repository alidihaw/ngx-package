import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppData } from './app.data';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(
    public appData: AppData,  
    private swUpdate: SwUpdate
  ) {
  }

  ngOnInit(): void {
    this.checkVersion();
  }

  checkVersion() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.versionUpdates.subscribe(async (evt) => {
          switch (evt.type) {
              case 'VERSION_DETECTED':
                  console.log(
                      `Downloading new app version: ${evt.version.hash}`
                  );
                  break;
              case 'VERSION_READY':
                  console.log(
                      `Current app version: ${evt.currentVersion.hash}`
                  );
                  console.log(
                      `New app version ready for use: ${evt.latestVersion.hash}`
                  );
                  await this.swUpdate.activateUpdate();
                  document.location.reload();
                  break;
              case 'VERSION_INSTALLATION_FAILED':
                  console.log(
                      `Failed to install app version '${evt.version.hash}': ${evt.error}`
                  );
                  break;
          }
      });
    }
  }

  ngOnDestroy(): void {
    
  }
}
