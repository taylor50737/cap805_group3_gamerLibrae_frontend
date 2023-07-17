// Name: Cheuk Hei Fung
// Student ID: 136587227
// "Testing Client Side Data Validation Channel URL and email address required, T&C Agreement Checkbox checked"

import React, { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import InquiryForm from '../ContactUs/components/InquiryForm';

describe('The Inquiry Form show show a form that can be submitted to reach us', () => {
  //Testing Item 1, Row 9
  test('Renders all Inquiry Form elements', () => {
    render(<InquiryForm />);

    const inquiryFormArea = screen.getByLabelText('Area of Inquiries');
    const inquiryFormArea1 = screen.getByText('General Inquiry');
    const inquiryFormArea2 = screen.getByText('Affiliation Program');
    const inquiryFormArea3 = screen.getByText('Technical Support');
    const inquiryFormArea4 = screen.getByText('Marketing/Partnership');
    const inquiryFormArea5 = screen.getByText('Complaint');
    const inquiryFormArea6 = screen.getByText('Others');
    const inquiryFormName = screen.getByLabelText('Name');
    const inquiryFormEmail = screen.getByLabelText('Email');
    const inquiryFormSubjectLine = screen.getByLabelText('Subject Line');
    const inquiryFormMessage = screen.getByLabelText('Message (Maximum 200 characters)');
    const submitButton = screen.getByText('SUBMIT');
    const resetButton = screen.getByText('RESET');

    expect(inquiryFormArea).toBeInTheDocument();
    expect(screen.getAllByRole('option').length).toBe(6); //Six options for the Inquiry Area Dropdown
    expect(inquiryFormArea1).toBeInTheDocument();
    expect(inquiryFormArea2).toBeInTheDocument();
    expect(inquiryFormArea3).toBeInTheDocument();
    expect(inquiryFormArea4).toBeInTheDocument();
    expect(inquiryFormArea5).toBeInTheDocument();
    expect(inquiryFormArea6).toBeInTheDocument();
    expect(inquiryFormName).toBeInTheDocument();
    expect(inquiryFormEmail).toBeInTheDocument();
    expect(inquiryFormSubjectLine).toBeInTheDocument();
    expect(inquiryFormMessage).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
    expect(resetButton).toBeInTheDocument();
  });

  //   Testing Item 2, Row 10
  test('Updates input values on change', () => {
    render(<InquiryForm />);

    const inquiryFormName = screen.getByLabelText('Name');
    const inquiryFormEmail = screen.getByLabelText('Email');
    const inquiryFormSubjectLine = screen.getByLabelText('Subject Line');
    const inquiryFormMessage = screen.getByLabelText('Message (Maximum 200 characters)');

    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'Technical Support' } });
    fireEvent.change(inquiryFormName, { target: { value: 'Clint' } });
    fireEvent.change(inquiryFormEmail, { target: { value: 'clint@gmail.com' } });
    fireEvent.change(inquiryFormSubjectLine, { target: { value: "I don't like this game." } });
    fireEvent.change(inquiryFormMessage, { target: { value: 'I like this game.' } });

    expect(screen.getByText('Technical Support')).toBeInTheDocument;
    expect(screen.getByText('Marketing/Partnership')).not.toBeInTheDocument;
    expect(inquiryFormName.value).toBe('Clint');
    expect(inquiryFormEmail.value).toBe('clint@gmail.com');
    expect(inquiryFormSubjectLine.value).toBe("I don't like this game.");
    expect(inquiryFormMessage.value).toBe('I like this game.');
  });

  //Testing Item 3, Row 11
  test('Error message displayed when any of the fields are empty', () => {
    render(<InquiryForm />);

    const inquiryFormName = screen.getByLabelText('Name');
    const inquiryFormEmail = screen.getByLabelText('Email');
    const inquiryFormSubjectLine = screen.getByLabelText('Subject Line');
    const inquiryFormMessage = screen.getByLabelText('Message (Maximum 200 characters)');

    fireEvent.change(inquiryFormName, { target: { value: '' } });
    fireEvent.blur(inquiryFormName);
    fireEvent.change(inquiryFormEmail, { target: { value: '' } });
    fireEvent.blur(inquiryFormEmail);
    fireEvent.change(inquiryFormSubjectLine, { target: { value: '' } });
    fireEvent.blur(inquiryFormSubjectLine);
    fireEvent.change(inquiryFormMessage, { target: { value: '' } });
    fireEvent.blur(inquiryFormMessage);

    const nameErrorMessage = screen.getByText('Please enter your name');
    const emailErrorMessage = screen.getByText('Please enter your email address');
    const subjectLineErrorMessage = screen.getByText('Please enter a subject line');
    const messageErrorMessage = screen.getByText('Please enter a message within 200 characters');

    expect(nameErrorMessage).toBeInTheDocument();
    expect(emailErrorMessage).toBeInTheDocument();
    expect(subjectLineErrorMessage).toBeInTheDocument();
    expect(messageErrorMessage).toBeInTheDocument();
  });

  //Testing Item 4, Row 12
  test('Error message displayed when the Email Address is not in email address format and the message is too long', () => {
    render(<InquiryForm />);

    const inquiryFormEmail = screen.getByLabelText('Email');
    const inquiryFormMessage = screen.getByLabelText('Message (Maximum 200 characters)');

    fireEvent.change(inquiryFormEmail, { target: { value: 'hello@world' } });
    fireEvent.blur(inquiryFormEmail);
    fireEvent.change(inquiryFormMessage, {
      target: {
        value:
          'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
      },
    });
    fireEvent.blur(inquiryFormMessage);

    const emailErrorMessage = screen.getByText('Please enter your email address');
    const messageErrorMessage = screen.getByText('Please enter a message within 200 characters');

    expect(emailErrorMessage).toBeInTheDocument();
    expect(messageErrorMessage).toBeInTheDocument();
  });
});
