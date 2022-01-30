import {fireEvent, render, screen} from "@testing-library/react";
import Login from "../Pages/Auth/Login";

const setup = () => {
    const utils = render(<Login/>)
    const inputEmail = utils.getByTestId('email-address')
    const passwordInput = utils.getByTestId('password')
    return {
        inputEmail,
        passwordInput,
        ...utils,
    }
}

test('test login page title', () => {
    render(<Login/>)
    expect(screen.getByRole('heading')).toHaveTextContent('Sign in')
})

test('test login page button', () => {
    render(<Login/>)
    expect(screen.getByRole('button')).toHaveTextContent(/^sign in$/i)
})

// test('test login page email and password input', () => {
//     // Arrange
//     // render(<Login/>)
//     const {inputEmail} = setup()
//     expect(inputEmail.value).toBe(undefined)
//     fireEvent.change(inputEmail, {target: {value: 'vedrannovak1@gmail.com'}})
//     expect(inputEmail.value).toBe('vedrannovak1@gmail.com')
//
//     // Act
//     // Assert
// })