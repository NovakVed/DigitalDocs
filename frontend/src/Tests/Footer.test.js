import {render, screen} from "@testing-library/react";
import Footer from "../Components/Footer";

test('test footer component title', () => {
    render(<Footer/>)
    expect(screen.getByRole('heading')).toHaveTextContent('Footer')
})

test('test paragraph text inside footer component', () => {
    render(<Footer/>)
    expect(screen.getByText('Ovaj projekt se ostvario u suradnji s FOI ♥ SedamIT'))
})