import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import SelectCard from './../components/SelectCard';


jest.mock('react-i18next', () => ({
    useTranslation: () => {
        return {
            t: (str) => str,
            i18n: {
                changeLanguage: () => new Promise(() => { }),
            },
        };
    },
}));

const data = [
    { id: "CONCERN_02", value: "LEGAL_REQUIREMENT 1" },
    { id: "CONCERN_04", value: "LEGAL_REQUIREMENT 2 " },
    { id: "CONCERN_05", value: "LEGAL_REQUIREMENT 3" },]

describe('<SelectCard />', () => {

    it('renders 3 items', () => {
        const setSelected = jest.fn(item => item);
        render(<SelectCard className="grid-item btn-product suggestion" options={data} setSelected={setSelected} selectedItems={[]} ></SelectCard>)
        expect(screen.getAllByRole('button')).toHaveLength(3)
    });

    it('setSelected its called onClick', () => {
        const setSelected = jest.fn(item => item);
        render(<SelectCard className="grid-item btn-product suggestion" options={data} setSelected={setSelected} selectedItems={[]} ></SelectCard>)
        fireEvent.click(screen.getByText(/CONCERN_02/i));
        expect(setSelected).toHaveReturnedWith([{ id: "CONCERN_02", value: "LEGAL_REQUIREMENT 1" }]);

    });

});
