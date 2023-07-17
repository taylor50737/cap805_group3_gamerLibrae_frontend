// Kenneth Wong
// Test case 1
// Testing goToNextPage function

import { render, screen, fireEvent } from '@testing-library/react';
import GameTab from '../AdminPanel/GameTab';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Link: jest.fn().mockImplementation(({ to, children }) => <a href={to}>{children}</a>),
}));

describe('GameTab', () => {
  it('more than 1 page of content, changes the page when next page button is clicked', () => {
    const games = Array.from({ length: 10 }, (_, index) => ({
      _id: index + 1,
      name: `Game ${index + 1}`,
      developer: `Developer ${index + 1}`,
      publisher: `Publisher ${index + 1}`,
      releaseDate: `Release Date ${index + 1}`,
      status: `Status ${index + 1}`,
    }));

    // Render the component with the initial state
    render(<GameTab games={games} />);

    // Find the next page button
    const nextPageButton = screen.getByText('»');

    // Simulate a click on the next page button
    fireEvent.click(nextPageButton);

    const currentPageButton = screen.getByRole('button', { name: '2' });
    expect(currentPageButton).toHaveClass('btn-active');
  });
  it('1 page of content, remain on the same page when next page button is clicked', () => {
    const games = Array.from({ length: 5 }, (_, index) => ({
      _id: index + 1,
      name: `Game ${index + 1}`,
      developer: `Developer ${index + 1}`,
      publisher: `Publisher ${index + 1}`,
      releaseDate: `Release Date ${index + 1}`,
      status: `Status ${index + 1}`,
    }));

    // Render the component with the initial state
    render(<GameTab games={games} />);

    // Find the next page button
    const nextPageButton = screen.getByText('»');

    // Simulate a click on the next page button
    fireEvent.click(nextPageButton);

    const currentPageButton = screen.getByRole('button', { name: '1' });
    expect(currentPageButton).toHaveClass('btn-active');
  });
});
