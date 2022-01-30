import {render} from "@testing-library/react";
import App from "../App";
import Cookies from "universal-cookie/lib";

test('render App.jsx', () => {
    render(<App/>)
})

test('render login page if cookie is undefined', () => {
    // Arrange
    render(<App/>)

    // Act
    const cookies = new Cookies()

    // Assert
    expect(cookies.get('access_token')).toBe(undefined)
})