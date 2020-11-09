import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable()
export class PlatformService {

  private _isBrowser: boolean;
    constructor(@Inject(PLATFORM_ID) private platformId) {
        this._isBrowser = isPlatformBrowser(platformId);
    }

    isBrowser() {
        return this._isBrowser;
    }
}
