import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
export interface Icone {
  nome: string;
  classes?: string;
  active?: string;
}
@Component({
  standalone: true,
  selector: 'app-icon',
  imports: [CommonModule],
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css'],
})
export class IconComponent {
  @Input() icone?: Icone;
}
