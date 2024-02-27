import 'react-native';
import React from 'react';
import {Login} from '../src/modules';
import {render, screen, fireEvent} from '@testing-library/react-native';

test('form submits two answers', () => {
  const allQuestions = ['q1', 'q2'];
  const mockFn = jest.fn();

  render(<Login />);

  const answerInputs = screen.getAllByLabelText('answer input');
});
