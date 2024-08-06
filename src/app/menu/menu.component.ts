import { ChangeDetectionStrategy, Component, EventEmitter, Output, Signal, signal, WritableSignal } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PanelMenuModule } from 'primeng/panelmenu';
import { BadgeModule } from 'primeng/badge';
import { RippleModule } from 'primeng/ripple';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [PanelMenuModule, BadgeModule, RippleModule, CommonModule, InputTextModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent {

  isExpanded: WritableSignal<boolean> = signal(true);
  @Output() changeStatusExpanded: EventEmitter<boolean> = new EventEmitter<boolean>();
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
        }
      ]
    }
  ]);

  changeExpanded(): void {
    this.isExpanded.set(!this.isExpanded());
    this.changeStatusExpanded.emit(this.isExpanded());
  }

  get iconExpanded(): string {
    return this.isExpanded() ? 'pi pi-chevron-left' : 'pi pi-chevron-right';
  }
}
