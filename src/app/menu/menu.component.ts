import { Component, inject, Signal, signal } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { PanelMenuModule } from 'primeng/panelmenu';
import { BadgeModule } from 'primeng/badge';
import { RippleModule } from 'primeng/ripple';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [PanelMenuModule, BadgeModule, RippleModule, CommonModule, InputTextModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  private readonly _appService = inject(AppService);
  private readonly _router = inject(Router);

  items: Signal<MenuItem[]> = signal([
    {
      label: 'Dashboard',
      icon: PrimeIcons.CHART_BAR,
      url: '/dashboard'
    },
    {
      label: 'Products',
      icon: PrimeIcons.TAG,
      url: '/products'
    },
    {
      label: 'Orders',
      icon: PrimeIcons.LIST_CHECK,
      url: '/orders'
    }
  ]);

  changeExpanded(): void {
    this._appService.changeStatusExpanded();
  }

  selectMenuItem(menuItem: MenuItem): void {
    if (this.requiredExpanded) {
      this.changeExpanded();
      return;
    }
    if (menuItem.url) {
      this._router.navigate([menuItem.url])
    }

  }

  get iconExpanded(): string {
    return this._appService.menuIsExpanded ? 'pi pi-chevron-left' : 'pi pi-chevron-right';
  }

  get requiredExpanded(): boolean {
    return !this._appService.menuIsExpanded;
  }
}
