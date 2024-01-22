import { render, screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
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
      'Jobs',
    ]);
  });
  describe('when the user logs in', () => {
    it('displays the user profile picture', async () => {
      render(MainNav);
      let profileImage = screen.queryByRole('img', { name: /user profile image/i });
      expect(profileImage).not.toBeInTheDocument();

      const loginButton = screen.getByRole('button', { name: /sign in/i });
      await userEvent.click(loginButton);

      profileImage = screen.getByRole('img', { name: /user profile image/i });
      expect(profileImage).toBeInTheDocument();
    });
  });
});
