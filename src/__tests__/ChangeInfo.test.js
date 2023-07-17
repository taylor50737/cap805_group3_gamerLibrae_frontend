// Name: Pak Hei Lo
// Student ID: 132631227
// Test case 1
// Testing ChangeInfo form elements and validations

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ChangeInfo from '../MemberPanel/pages/ChangeInfo';

describe('ChangeInfo', () => {
  test('Renders all form elements', () => {
    render(<ChangeInfo />);

    const usernameInput = screen.getByLabelText('Username');
    const urlInput = screen.getByLabelText('Youtube/Twitch URL');
    const submitButton = screen.getByText('SUBMIT');

    expect(usernameInput).toBeInTheDocument();
    expect(urlInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test('Updates input values on change', () => {
    render(<ChangeInfo />);

    const usernameInput = screen.getByLabelText('Username');
    const urlInput = screen.getByLabelText('Youtube/Twitch URL');

    fireEvent.change(usernameInput, { target: { value: 'newUsername' } });
    fireEvent.change(urlInput, { target: { value: 'https://youtube.com/channel/@abc123' } });

    expect(usernameInput.value).toBe('newUsername');
    expect(urlInput.value).toBe('https://youtube.com/channel/@abc123');
  });

  test('Displays error message when username field is empty', () => {
    render(<ChangeInfo />);

    const usernameInput = screen.getByLabelText('Username');

    fireEvent.change(usernameInput, { target: { value: '' } });
    fireEvent.blur(usernameInput);

    const errorMessage = screen.getByText('You must enter your username');
    expect(errorMessage).toBeInTheDocument();
  });

  test('Displays error message when url field is empty', () => {
    render(<ChangeInfo />);

    const urlInput = screen.getByLabelText('Youtube/Twitch URL');

    fireEvent.change(urlInput, { target: { value: '' } });
    fireEvent.blur(urlInput);

    const errorMessage = screen.getByText('Please enter a valid Youtube/Twitch URL.');
    expect(errorMessage).toBeInTheDocument();
  });

  test('Displays error message when user enter incorrect youtube url format', () => {
    render(<ChangeInfo />);

    const urlInput = screen.getByLabelText('Youtube/Twitch URL');

    fireEvent.change(urlInput, { target: { value: 'https://www.facebook.com/' } });
    fireEvent.blur(urlInput);

    const errorMessage = screen.getByText('Please enter a valid Youtube/Twitch URL.');
    expect(errorMessage).toBeInTheDocument();
  });

  test('Block user from clicking submit button if the values of username and URL is invalid', () => {
    render(<ChangeInfo />);

    const usernameInput = screen.getByLabelText('Username');
    const urlInput = screen.getByLabelText('Youtube/Twitch URL');
    const submitButton = screen.getByText('SUBMIT');

    fireEvent.change(usernameInput, { target: { value: '' } });
    fireEvent.change(urlInput, { target: { value: 'https://facebook.com' } });

    expect(usernameInput.value).toBe('');
    expect(urlInput.value).toBe('https://facebook.com');
    expect(submitButton).toBeDisabled(); // Expect the button to be initially disabled
  });

  test('Allow user to click submit button if the values of username and URL is valid', () => {
    render(<ChangeInfo />);

    const usernameInput = screen.getByLabelText('Username');
    const urlInput = screen.getByLabelText('Youtube/Twitch URL');
    const submitButton = screen.getByText('SUBMIT');

    fireEvent.change(usernameInput, { target: { value: 'newUsername' } });
    fireEvent.change(urlInput, { target: { value: 'https://www.youtube.com/@abc123' } });

    expect(usernameInput.value).toBe('newUsername');
    expect(urlInput.value).toBe('https://www.youtube.com/@abc123');

    expect(submitButton).toBeEnabled(); // Expect the button to be enabled now
  });
});
