import { ChangeDetectionStrategy, Component, EventEmitter, inject, Output, Signal, signal, WritableSignal } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PanelMenuModule } from 'primeng/panelmenu';
import { BadgeModule } from 'primeng/badge';
import { RippleModule } from 'primeng/ripple';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { AppService } from '../app.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [PanelMenuModule, BadgeModule, RippleModule, CommonModule, InputTextModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent {

  private readonly _appService = inject(AppService);

  items: Signal<MenuItem[]> = signal([
    {
      label: 'Home',
      icon: 'pi pi-home'
    },
    {
      label: 'Products',
      icon: 'pi pi-tag'
    },
    {
      label: 'Orders',
      icon: 'pi pi-list'
    },
    {
      label: 'Profile',
      icon: 'pi pi-user',
      items: [
        {
          label: 'Information',
          icon: 'pi pi-user-edit'
        },
        {
          label: 'Seguridad',
          icon: 'pi pi-user-edit',
          items: [
            {
              label: 'Test asd asda dasd asdads',
              icon: 'pi pi-user-edit',
              items: [
                {
                  label: 'Test asd asda dasd asdads',
                  icon: 'pi pi-user-edit',
                },
                {
                  label: 'Test asd asda dasd asdads',
                  icon: 'pi pi-user-edit',
                }
              ]
            }
          ]
        }
      ]
    }
  ]);

  changeExpanded(): void {
    this._appService.changeStatusExpanded();
  }

  get iconExpanded(): string {
    return this._appService.menuIsExpanded ? 'pi pi-chevron-left' : 'pi pi-chevron-right';
  }
}
