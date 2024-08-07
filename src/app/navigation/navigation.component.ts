import { Component, inject } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { AppService } from '../app.service';
@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [InputTextModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

  private readonly _appService = inject(AppService);

  changeExpanded(): void {
    this._appService.changeStatusExpanded();
  }

  get iconExpanded(): string {
    return this._appService.menuIsExpanded ? 'pi pi-chevron-left' : 'pi pi-chevron-right';
  }

}

