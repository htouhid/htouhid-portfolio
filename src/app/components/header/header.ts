import { afterNextRender, Component, DestroyRef, inject, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.scss',
  host: { '(document:keydown.escape)': 'closeMenu(true)' },
})
export class Header {
  protected readonly menuOpen = signal(false);
  protected readonly scrolled = signal(false);
  protected readonly activeSection = signal('');
  protected readonly links = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'expertise', label: 'Expertise' },
    { id: 'work', label: 'Work' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      let frame = 0;
      const update = () => {
        this.scrolled.set(window.scrollY > 16);
        let active = '';
        for (const link of this.links) {
          const section = document.getElementById(link.id);
          if (section && section.getBoundingClientRect().top <= 160) active = link.id;
        }
        if (
          window.scrollY > 0 &&
          window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4
        )
          active = 'contact';
        this.activeSection.set(active);
      };
      const onScroll = () => {
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(update);
      };
      const desktop = window.matchMedia('(min-width: 861px)');
      const onResize = () => {
        if (desktop.matches) this.menuOpen.set(false);
        onScroll();
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onResize, { passive: true });
      update();
      this.destroyRef.onDestroy(() => {
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onResize);
        cancelAnimationFrame(frame);
      });
    });
  }

  protected closeMenu(restoreFocus = false): void {
    if (restoreFocus && this.menuOpen()) document.getElementById('menu-toggle')?.focus();
    this.menuOpen.set(false);
  }

  protected navigate(id: string): void {
    this.closeMenu();
    document.getElementById(id)?.focus({ preventScroll: true });
  }
}
