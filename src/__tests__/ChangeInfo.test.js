import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ChangeInfo from '../MemberPanel/pages/ChangeInfo';

describe('ChangeInfo', () => {
  test('renders input fields', () => {
    render(<ChangeInfo />);

    const usernameInput = screen.getByLabelText('Username');
    const urlInput = screen.getByLabelText('Youtube/Twitch URL');

    expect(usernameInput).toBeInTheDocument();
    expect(urlInput).toBeInTheDocument();
  });

  test('Updates input values on change', () => {
    render(<ChangeInfo />);

    const usernameInput = screen.getByLabelText('Username');
    const urlInput = screen.getByLabelText('Youtube/Twitch URL');

    fireEvent.change(usernameInput, { target: { value: 'newUsername' } });
    fireEvent.change(urlInput, { target: { value: 'https://youtube.com/channel/abc123' } });

    expect(usernameInput.value).toBe('newUsername');
    expect(urlInput.value).toBe('https://youtube.com/channel/abc123');
  });

  // Add more test cases as needed
});
