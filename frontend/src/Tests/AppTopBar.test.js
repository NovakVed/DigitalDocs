import {render, screen} from "@testing-library/react";
import AppTopBar from "../Components/AppTopBar";

test('test app top bar component title', () => {
    render(<AppTopBar/>)
    expect(screen.getByRole('heading')).toHaveTextContent('DigitalDocs')
})

test('test app top bar component button', () => {
    render(<AppTopBar/>)
    expect(screen.getByRole('button')).toHaveTextContent(/^Odjavi se$/i)
})