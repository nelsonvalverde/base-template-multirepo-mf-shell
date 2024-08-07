import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { NavigationComponent } from "./navigation/navigation.component";
import { CommonModule } from '@angular/common';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, NavigationComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [AppService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  private readonly _appService = inject(AppService);

  get menuIsExpanded(): boolean {
    return this._appService.menuIsExpanded;
  }
}
