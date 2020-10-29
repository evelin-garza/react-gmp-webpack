import '@testing-library/jest-dom/extend-expect';
import { render } from "@testing-library/react";
import React from "react";

import Footer from "./Footer";
import Logo from "../Logo/Logo";

describe('Footer Component', () => {
    it('should render footer by text', () => {
        const { getByText } = render(<Footer><Logo /></Footer>);

        expect(getByText(/netflix/i)).toBeInTheDocument();
        expect(getByText(/roulette/i)).toBeInTheDocument();
    });
});