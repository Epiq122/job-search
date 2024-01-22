import { render, screen } from '@testing-library/vue';
import MainNav from '@/components/MainNav.vue';

describe('MainNav', () => {
  it('displays the company name', () => {
    render(MainNav);
    const companyName = screen.getByText('Epiq Careers');
    expect(companyName).toBeInTheDocument();
  });
  it('displays nav items for navigation bar', () => {
    render(MainNav);
    const navItems = screen.getAllByRole('listitem');
    const navText = navItems.map((item) => item.textContent);
    expect(navText).toEqual([
      'Teams',
      'Location',
      'Life at Epiq Careers',
      'How we hire',
      'Students',
      'Jobs'
    ]);
  });
});
