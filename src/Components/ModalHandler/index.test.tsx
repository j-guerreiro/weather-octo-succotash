import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ModalOpenerButton } from './index';

// We test that clicking the opener button reveals the SearchModal
// by verifying that the input field becomes available in the DOM.

describe('ModalOpenerButton', () => {
    it('opens and closes the search modal', async () => {
        render(<ModalOpenerButton />);

        // initially there should be no search input
        expect(screen.queryByTestId('search-input')).toBeNull();

        const button = screen.getByRole('button', { name: /search/i });
        await userEvent.click(button);

        // after clicking, the search input should appear
        expect(screen.getByTestId('search-input')).toBeInTheDocument();

        // click the close button (the 'X') and ensure the modal disappears
        const close = screen.getByText('X');
        await userEvent.click(close);
        expect(screen.queryByTestId('search-input')).toBeNull();
    });
});
