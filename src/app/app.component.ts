import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { NavigationComponent } from "./navigation/navigation.component";
import { CommonModule } from '@angular/common';
import { AppService } from './app.service';
import { PanelModule } from 'primeng/panel';
import { PrimeNGConfig } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, NavigationComponent, CommonModule, PanelModule, BreadcrumbModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [AppService],
})
export class AppComponent {

  private readonly _appService = inject(AppService);
  private readonly primengConfig = inject(PrimeNGConfig);

  get menuIsExpanded(): boolean {
    return this._appService.menuIsExpanded;
  }

  ngOnInit() {
    this.setRippleConfig();
    this.setTranslationConfig();
  }

  private setRippleConfig(): void {
    this.primengConfig.ripple = true;
  }

  private setTranslationConfig(): void {
    this.primengConfig.setTranslation({
      accept: 'Aceptar',
      reject: 'Cancelar',
      clear: 'Limpiar',
      matchAll: 'Combinar todo',
      dayNames: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado'],
      dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sáb'],
      dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],

    });
  }
}
