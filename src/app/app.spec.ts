import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('Portfolio', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [App] }).compileComponents();
  });

  async function render() {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    return { fixture, element: fixture.nativeElement as HTMLElement };
  }

  it('renders the owner and resolves every section navigation link', async () => {
    const { element } = await render();
    expect(element.querySelectorAll('h1').length).toBe(1);
    expect(element.querySelector('h1')?.textContent).toContain('Hussain Touhid');
    const links = element.querySelectorAll<HTMLAnchorElement>('nav a[href^="#"]');
    expect(links.length).toBe(6);
    for (const link of links) {
      const section = element.querySelector(link.getAttribute('href')!);
      expect(section?.tagName).toBe('SECTION');
      expect(section?.querySelector('h2')).toBeTruthy();
    }
  });

  it('opens mobile navigation and closes it with Escape', async () => {
    const { fixture, element } = await render();
    const toggle = element.querySelector<HTMLButtonElement>('#menu-toggle')!;
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
    toggle.click();
    await fixture.whenStable();
    expect(toggle.getAttribute('aria-expanded')).toBe('true');
    expect(element.querySelector('nav')?.classList.contains('open')).toBe(true);
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    await fixture.whenStable();
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
  });

  it('closes mobile navigation after selecting a section', async () => {
    const { fixture, element } = await render();
    element.querySelector<HTMLButtonElement>('#menu-toggle')!.click();
    await fixture.whenStable();
    element.querySelector<HTMLAnchorElement>('nav a[href="#work"]')!.click();
    await fixture.whenStable();
    expect(element.querySelector('#menu-toggle')?.getAttribute('aria-expanded')).toBe('false');
  });

  it('provides resume links, public project links, email, and current copyright', async () => {
    const { element } = await render();
    expect(element.querySelectorAll('a[href="/Hussain-Touhid-Resume.pdf"]').length).toBe(2);
    expect(element.querySelector('a[href="mailto:htouhid@yahoo.com"]')).toBeTruthy();
    const cards = element.querySelectorAll('app-projects article');
    expect(cards.length).toBe(3);
    const expectedLinks = [
      ['https://rewards.ups.com/'],
      ['https://www.chevrolet.com/owners', 'https://my.chevroletarabia.com/ae/en/home'],
      ['https://www.verizonconnect.com/company/fleetmatics/'],
    ];
    cards.forEach((card, index) => {
      expect(card.textContent).toContain('My Contribution');
      const links = Array.from(card.querySelectorAll('a'));
      expect(links.map((link) => link.getAttribute('href'))).toEqual(expectedLinks[index]);
      for (const link of links) {
        expect(link.getAttribute('target')).toBe('_blank');
        expect(link.getAttribute('rel')).toBe('noopener noreferrer');
        expect(link.getAttribute('aria-label')).toContain('opens in a new tab');
      }
    });
    expect(cards[1].textContent).toContain('Chevrolet · Buick · Cadillac · GMC');
    expect(cards[2].textContent).toContain('the current Verizon Connect website is not my work');
    expect(element.querySelector('footer')?.textContent).toContain(
      String(new Date().getFullYear()),
    );
  });
});
