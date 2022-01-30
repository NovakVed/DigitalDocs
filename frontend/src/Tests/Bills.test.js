import {render, screen} from "@testing-library/react";
import Bills from "../Pages/Bills";

test('test bills page title', () => {
    render(<Bills/>)
    expect(screen.getByText('Popis računa'))
})