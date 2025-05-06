import { Component, HostListener, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isHeaderShrunk = signal(false);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isHeaderShrunk.set(window.scrollY > 20);
  }
}
