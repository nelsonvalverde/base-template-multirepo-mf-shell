import { Injectable, signal, WritableSignal } from "@angular/core";

@Injectable()
export class AppService {
  private _menuIsExpanded: WritableSignal<boolean> = signal(true);

  public changeStatusExpanded(): void {
    this._menuIsExpanded.set(!this._menuIsExpanded());
  }
  public get menuIsExpanded() {
    return this._menuIsExpanded();
  }

}
