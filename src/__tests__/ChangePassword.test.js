// Name: Pak Hei Lo
// Student ID: 132631227
// Test case 2
// Testing ChangePassword form elements and validations

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ChangePassword from '../MemberPanel/pages/ChangePassword';

describe('ChangePassword', () => {
  test('Renders all form elements', () => {
    render(<ChangePassword />);

    const currentPasswordInput = screen.getByLabelText('Current Password');
    const newPasswordInput = screen.getByLabelText('New Password');
    const confirmNewPassword = screen.getByLabelText('Confirm New Password');
    const submitButton = screen.getByText('SUBMIT');

    expect(currentPasswordInput).toBeInTheDocument();
    expect(newPasswordInput).toBeInTheDocument();
    expect(confirmNewPassword).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test('Updates input values on change', () => {
    render(<ChangePassword />);

    const currentPasswordInput = screen.getByLabelText('Current Password');
    const newPasswordInput = screen.getByLabelText('New Password');
    const confirmNewPassword = screen.getByLabelText('Confirm New Password');

    fireEvent.change(currentPasswordInput, { target: { value: '12345' } });
    fireEvent.change(newPasswordInput, { target: { value: '67890' } });
    fireEvent.change(confirmNewPassword, { target: { value: '67890' } });

    expect(currentPasswordInput.value).toBe('12345');
    expect(newPasswordInput.value).toBe('67890');
    expect(confirmNewPassword.value).toBe('67890');
  });

  test('Displays error message when current password field is empty', () => {
    render(<ChangePassword />);

    const currentPasswordInput = screen.getByLabelText('Current Password');

    fireEvent.change(currentPasswordInput, { target: { value: '' } });
    fireEvent.blur(currentPasswordInput);

    const errorMessage = screen.getByText(
      'Please enter a valid current password, at least 5 characters.',
    );
    expect(errorMessage).toBeInTheDocument();
  });

  test('Displays error message when user enter invalid new password', () => {
    render(<ChangePassword />);

    const newPasswordInput = screen.getByLabelText('New Password');

    fireEvent.change(newPasswordInput, { target: { value: '123' } }); // user only enter 3 characters
    fireEvent.blur(newPasswordInput);

    const errorMessage = screen.getByText(
      'Please enter a valid new password, at least 5 characters.',
    );
    expect(errorMessage).toBeInTheDocument();
  });

  test('Displays error message when confirm new password does not match with new password', () => {
    render(<ChangePassword />);

    const newPasswordInput = screen.getByLabelText('New Password');
    const confirmNewPassword = screen.getByLabelText('Confirm New Password');

    fireEvent.change(newPasswordInput, { target: { value: '12345' } });
    fireEvent.change(confirmNewPassword, { target: { value: '67890' } }); // user enter different confirm new password
    fireEvent.blur(confirmNewPassword);

    const errorMessage = screen.getByText(
      'Please check whether your password is entered correctly!',
    );
    expect(errorMessage).toBeInTheDocument();
  });

  test('Block user from clicking submit button if the values of currentPassword, newPassword and confirmNewPassword is invalid', () => {
    render(<ChangePassword />);

    const currentPasswordInput = screen.getByLabelText('Current Password');
    const newPasswordInput = screen.getByLabelText('New Password');
    const confirmNewPassword = screen.getByLabelText('Confirm New Password');
    const submitButton = screen.getByText('SUBMIT');

    fireEvent.change(currentPasswordInput, { target: { value: '' } }); // User did not enter the current password
    fireEvent.change(newPasswordInput, { target: { value: '12345' } });
    fireEvent.change(confirmNewPassword, { target: { value: '12345' } });

    expect(currentPasswordInput.value).toBe('');
    expect(newPasswordInput.value).toBe('12345');
    expect(confirmNewPassword.value).toBe('12345');
    expect(submitButton).toBeDisabled(); // Expect the button to be initially disabled
  });

  test('Allow user to click submit button if the values of currentPassword, newPassword and confirmNewPassword is valid', () => {
    render(<ChangePassword />);

    const currentPasswordInput = screen.getByLabelText('Current Password');
    const newPasswordInput = screen.getByLabelText('New Password');
    const confirmNewPassword = screen.getByLabelText('Confirm New Password');
    const submitButton = screen.getByText('SUBMIT');

    fireEvent.change(currentPasswordInput, { target: { value: '12345' } });
    fireEvent.change(newPasswordInput, { target: { value: '56789' } });
    fireEvent.change(confirmNewPassword, { target: { value: '56789' } });

    expect(currentPasswordInput.value).toBe('12345');
    expect(newPasswordInput.value).toBe('56789');
    expect(confirmNewPassword.value).toBe('56789');
    expect(submitButton).toBeEnabled(); // Expect the button to be enabled now
  });
});
