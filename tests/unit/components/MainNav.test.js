import { render, screen } from '@testing-library/vue';
import MainNav from '@/components/MainNav.vue';

describe('MainNav', () => {
  it('displays the company name', () => {
    render(MainNav);
    const companyName = screen.getByText('Epiq Careers');
    expect(companyName).toBeInTheDocument();
  });
});
