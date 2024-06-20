import React from 'react';
import { fireEvent, render } from '@testing-library/react'

import { ColumnToggle } from '../components/ColumnToggle';
import { MOCK_COLUMNS_ALL_BUT_ID } from './mocks';

describe('ColumnToggle', () => {
  
  const toggles = MOCK_COLUMNS_ALL_BUT_ID

  for (const toggle in toggles) {
    it(`should invoke the onToggle callback after "${toggle}" checkbox was clicked`, () => {
      // given
      const spy = jest.fn();
      const { getByLabelText } = render(<ColumnToggle
        toggles={toggles}
        onToggle={spy}
      />);

      // when
      const checkbox = getByLabelText(toggle)
      fireEvent.click(checkbox, { target: { name: toggle }})

      // then
      expect(spy).toHaveBeenCalledWith(toggle, !toggles[toggle]);
    });
  }

  const toggleShouldBeChecked = (toggles, columnName) => toggles[columnName]

  it('should display (un)checked column checkboxes after initial render', () => {
    for (const column in toggles) {
      // given
      const { getByLabelText } = render(<ColumnToggle
        toggles={toggles}
        onToggle={() => {}}
      />);

      // then
      const checkbox = getByLabelText(column)
      if (toggleShouldBeChecked(toggles, column)){
        expect(checkbox).toBeChecked();
      } else {
        expect(checkbox).not.toBeChecked();
      }
    }
  });
});
