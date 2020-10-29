import { render } from "@testing-library/react";
import React from "react";

import Logo from "./Logo";

describe('Logo Component', () => {
    it('should render logo', () => {
        const { asFragment } = render(<Logo />);

        expect(asFragment()).toMatchSnapshot();
    });
});