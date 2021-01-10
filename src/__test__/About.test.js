import { getAllByRole } from '@testing-library/react';
import React from 'react';
import App from './../App';
import { render, fireEvent, container , screen, waitFor } from './test-utils'
 
describe('<About />', () => {
    let wrapper, getByText;
    const initialState = { };

    beforeEach(() => {
        const utils = render(<App />, { initialState });
        wrapper = utils.container;
        getByText = utils.getByText;
    });

    it('renders the covers loaded from api', async () => {


        fireEvent.click(screen.getByText(/Dame un precio/i));

        await waitFor(() => {
            expect(getByText('legally required of me')).toBeInTheDocument()
        })

        fireEvent.click(screen.getByText(/legally required of me/i));
        fireEvent.click(screen.getByText(/I want to protect my equipment. Buying them was a great effort/i));

        fireEvent.click(screen.getByText(/Dame un precio/i));

        const inputLocation = screen.getByLabelText('location-input')
        fireEvent.change(inputLocation, { target: { value: 'my location' } })
        expect(inputLocation.value).toBe('my location')

        fireEvent.click(screen.getByText(/Siguiente/i));

        const inputName = screen.getByLabelText('name-input')
        fireEvent.change(inputName, { target: { value: 'my name' } })
        expect(inputName.value).toBe('my name')

        fireEvent.click(screen.getByText(/Siguiente/i));

        const inputPhone = screen.getByLabelText('phone-input')
        fireEvent.change(inputPhone, { target: { value: '678678678' } })
        expect(inputPhone.value).toBe('678678678')

        const inputEmail = screen.getByLabelText('email-input')
        fireEvent.change(inputEmail, { target: { value: 'email@server.com' } })
        expect(inputEmail.value).toBe('email@server.com')

        fireEvent.click(screen.getByLabelText('politica-input'));
        fireEvent.click(screen.getByLabelText('horario-input'));

        fireEvent.click(screen.getByText(/Siguiente/i));            
        expect(screen.getByText("my name")).toBeInTheDocument();

        fireEvent.click(screen.getAllByText(/I want to protect my income in case of any /i)[0])

        expect(screen.getByText(/Siguiente/i)).toBeInTheDocument();
        fireEvent.click(screen.getByText(/Siguiente/i));


    });
});
