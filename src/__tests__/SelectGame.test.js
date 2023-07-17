// Kenneth Wong
// Test case 2
//Testing Select Game checkbox

import { render, fireEvent, act } from '@testing-library/react';
import GameTab from '../AdminPanel/GameTab';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Link: jest.fn().mockImplementation(({ to, children }) => <a href={to}>{children}</a>),
}));

describe('GameTab', () => {
  it('should select only one game ID by ticking the checkbox', async () => {
    const games = Array.from({ length: 7 }, (_, index) => ({
      _id: index + 1,
      name: `Game ${index + 1}`,
      developer: `Developer ${index + 1}`,
      publisher: `Publisher ${index + 1}`,
      releaseDate: `Release Date ${index + 1}`,
      status: `Status ${index + 1}`,
    }));

    const { container } = render(<GameTab games={games} />);

    // Select the first checkbox
    const checkbox1 = container.querySelector('[data-testid="selected-game-1"]');
    act(() => {
      fireEvent.click(checkbox1);
    });

    // Check the selectedGames state
    expect(container.querySelectorAll('.checkbox:checked')).toHaveLength(1);
  });

  it('should select multiple game IDs by ticking checkboxes', async () => {
    const games = Array.from({ length: 7 }, (_, index) => ({
      _id: index + 1,
      name: `Game ${index + 1}`,
      developer: `Developer ${index + 1}`,
      publisher: `Publisher ${index + 1}`,
      releaseDate: `Release Date ${index + 1}`,
      status: `Status ${index + 1}`,
    }));

    const { container } = render(<GameTab games={games} />);

    // Select the first and second checkboxes
    const checkbox1 = container.querySelector('[data-testid="selected-game-1"]');
    const checkbox2 = container.querySelector('[data-testid="selected-game-2"]');
    act(() => {
      fireEvent.click(checkbox1);
      fireEvent.click(checkbox2);
    });

    // Check the selectedGames state
    expect(container.querySelectorAll('.checkbox:checked')).toHaveLength(2);
  });
  it('should unselect a game ID by unticking the checkbox', async () => {
    const games = Array.from({ length: 7 }, (_, index) => ({
      _id: index + 1,
      name: `Game ${index + 1}`,
      developer: `Developer ${index + 1}`,
      publisher: `Publisher ${index + 1}`,
      releaseDate: `Release Date ${index + 1}`,
      status: `Status ${index + 1}`,
    }));

    const { container } = render(<GameTab games={games} />);

    // Select the first checkbox
    const checkbox1 = container.querySelector('[data-testid="selected-game-1"]');
    act(() => {
      fireEvent.click(checkbox1);
    });

    // Unselect the first checkbox
    act(() => {
      fireEvent.click(checkbox1);
    });

    // Check the selectedGames state
    expect(container.querySelectorAll('.checkbox:checked')).toHaveLength(0);
  });
});
