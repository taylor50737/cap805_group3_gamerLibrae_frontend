// Name: Cheuk Hei Fung
// Student ID: 136587227
// "Testing Client Side Data Validation Channel URL and email address required, T&C Agreement Checkbox checked"

import React, { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AffReg from '../Affiliation/AffReg';

describe('Register for the affiliation program', () => {
  test('Renders all form elements', () => {
    render(<AffReg />);

    const affChannelUrl = screen.getByLabelText(
      'Channel URL (e.g. https://www.youtube.com/@gamerlibrae)',
    );
    const affEmail = screen.getByLabelText('Email Address');
    const tncCheckbox = screen.getByLabelText(
      'By clicking on the below Register button, I agree on the above Terms and Conditions.',
    );
    const submitButton = screen.getByText('SUBMIT');
    const resetButton = screen.getByText('RESET');

    expect(affChannelUrl).toBeInTheDocument();
    expect(affEmail).toBeInTheDocument();
    expect(tncCheckbox).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
    expect(resetButton).toBeInTheDocument();
  });

  test('Updates input values on change', () => {
    render(<AffReg />);

    const currentAffChannelUrl = screen.getByLabelText(
      'Channel URL (e.g. https://www.youtube.com/@gamerlibrae)',
    );
    const currentAffEmail = screen.getByLabelText('Email Address');

    fireEvent.change(currentAffChannelUrl, { target: { value: 'hello' } });
    fireEvent.change(currentAffEmail, { target: { value: 'world' } });

    expect(currentAffChannelUrl.value).toBe('hello');
    expect(currentAffEmail.value).toBe('world');
  });

  test('Error message displays stating valid Email Address is required when Email Address is empty', () => {
    render(<AffReg />);

    const currentAffEmail = screen.getByLabelText('Email Address');

    fireEvent.change(currentAffEmail, { target: { value: '' } });
    fireEvent.blur(currentAffEmail);

    const errorMessage = screen.getByText('Please enter a valid email address');
    expect(errorMessage).toBeInTheDocument();
  });

  test('Error message displays stating valid Channel URL is required when Channel URL is empty', () => {
    render(<AffReg />);

    const currentAffChannelUrl = screen.getByLabelText(
      'Channel URL (e.g. https://www.youtube.com/@gamerlibrae)',
    );

    fireEvent.change(currentAffChannelUrl, { target: { value: '' } });
    fireEvent.blur(currentAffChannelUrl);

    const errorMessage = screen.getByText('Please enter a valid YouTube/Twitch channel URL');
    expect(errorMessage).toBeInTheDocument();
  });

  test('Error message displays stating valid Channel URL AND valid Email Address are required when both fields are empty', () => {
    render(<AffReg />);

    const currentAffChannelUrl = screen.getByLabelText(
      'Channel URL (e.g. https://www.youtube.com/@gamerlibrae)',
    );
    const currentAffEmail = screen.getByLabelText('Email Address');

    fireEvent.change(currentAffChannelUrl, { target: { value: '' } });
    fireEvent.blur(currentAffChannelUrl);
    fireEvent.change(currentAffEmail, { target: { value: '' } });
    fireEvent.blur(currentAffEmail);

    const channelURLErrorMessage = screen.getByText(
      'Please enter a valid YouTube/Twitch channel URL',
    );
    const emailErrorMessage = screen.getByText('Please enter a valid email address');
    expect(channelURLErrorMessage).toBeInTheDocument();
    expect(emailErrorMessage).toBeInTheDocument();
  });

  test('Error message displays stating valid Channel URL AND valid Email Address are require when the Channel URL is not in URL format and Email Address is not in email address format', () => {
    render(<AffReg />);

    const currentAffChannelUrl = screen.getByLabelText(
      'Channel URL (e.g. https://www.youtube.com/@gamerlibrae)',
    );
    const currentAffEmail = screen.getByLabelText('Email Address');

    fireEvent.change(currentAffChannelUrl, { target: { value: 'https://www.google.com/' } });
    fireEvent.blur(currentAffChannelUrl);
    fireEvent.change(currentAffEmail, { target: { value: 'hello@world' } });
    fireEvent.blur(currentAffEmail);

    const channelURLErrorMessage = screen.getByText(
      'Please enter a valid YouTube/Twitch channel URL',
    );
    const emailErrorMessage = screen.getByText('Please enter a valid email address');
    expect(channelURLErrorMessage).toBeInTheDocument();
    expect(emailErrorMessage).toBeInTheDocument();
  });

  test('Disallow user from clicking submit button if the values of Channel URL and Email Address are invalid, and the T&C checkbox is unchecked', () => {
    render(<AffReg />);

    const currentAffChannelUrl = screen.getByLabelText(
      'Channel URL (e.g. https://www.youtube.com/@gamerlibrae)',
    );
    const currentAffEmail = screen.getByLabelText('Email Address');
    const tncCheckbox = screen.getByLabelText(
      'By clicking on the below Register button, I agree on the above Terms and Conditions.',
    ); //default is unchecked
    const submitButton = screen.getByText('SUBMIT');

    fireEvent.change(currentAffChannelUrl, { target: { value: 'https://www.google.com/' } }); //Invalid Input
    fireEvent.change(currentAffEmail, { target: { value: '' } }); //Missing input

    expect(currentAffChannelUrl.value).toBe('https://www.google.com/');
    expect(currentAffEmail.value).toBe('');
    expect(tncCheckbox.checked).toBe(false);
    expect(submitButton).toBeDisabled(); // Expect the button to be disabled
  });

  test('Allow user to click the submit button if the values of Channel URL and Email Address are valid, and the T&C checkbox is checked', () => {
    render(<AffReg />);

    const currentAffChannelUrl = screen.getByLabelText(
      'Channel URL (e.g. https://www.youtube.com/@gamerlibrae)',
    );
    const currentAffEmail = screen.getByLabelText('Email Address');
    const tncCheckbox = screen.getByLabelText(
      'By clicking on the below Register button, I agree on the above Terms and Conditions.',
    ); //default is unchecked
    const submitButton = screen.getByText('SUBMIT');

    fireEvent.change(currentAffChannelUrl, {
      target: { value: 'https://www.youtube.com/@gamerlibrae' },
    }); //Valid Input checked by Regex
    fireEvent.change(currentAffEmail, { target: { value: '123@gmail.com' } }); //Valid Input checked by Regex
    fireEvent.click(tncCheckbox);

    expect(currentAffChannelUrl.value).toBe('https://www.youtube.com/@gamerlibrae');
    expect(currentAffEmail.value).toBe('123@gmail.com');
    expect(tncCheckbox.checked).toBe(true);
    expect(submitButton).toBeEnabled(); // Expect the button to be clickable
  });

  test('By clicking on the Reset button, all the input field values will be restored to origin value', () => {
    render(<AffReg />);

    const currentAffChannelUrl = screen.getByLabelText(
      'Channel URL (e.g. https://www.youtube.com/@gamerlibrae)',
    );
    const currentAffEmail = screen.getByLabelText('Email Address');
    const tncCheckbox = screen.getByLabelText(
      'By clicking on the below Register button, I agree on the above Terms and Conditions.',
    ); //default is unchecked
    const resetButton = screen.getByText('RESET');

    fireEvent.change(currentAffChannelUrl, {
      target: { value: 'https://www.youtube.com/@gamerlibrae' },
    }); //Valid Input checked by Regex
    fireEvent.change(currentAffEmail, { target: { value: '123@gmail.com' } }); //Valid Input checked by Regex
    fireEvent.click(tncCheckbox);
    fireEvent.click(resetButton);

    expect(currentAffChannelUrl.value).toBe('');
    expect(currentAffEmail.value).toBe('');
    expect(tncCheckbox.checked).toBe(false);
  });
});
