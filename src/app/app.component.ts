import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { NavigationComponent } from "./navigation/navigation.component";
import { CommonModule } from '@angular/common';
import { AppService } from './app.service';
import { PanelModule } from 'primeng/panel';
import { MenuItem } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, NavigationComponent, CommonModule, PanelModule, BreadcrumbModule],
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

  items: MenuItem[] | undefined;

  home: MenuItem | undefined;

  ngOnInit() {
      this.items = [
          { label: 'Electronics' },
          { label: 'Computer' },
          { label: 'Accessories' },
          { label: 'Keyboard' },
          { label: 'Wireless' }
      ];

      this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
}
