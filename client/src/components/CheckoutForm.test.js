import React from "react";
import { render, getByText, getByTestId, fireEvent, getByDisplayValue } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByText } = render(<CheckoutForm/>);

    const header = getByText(/checkout form/i)

    expect(header).toBeInTheDocument();
});
 
test("form shows success message on submit with form details", () => {

    const{ getByLabelText, getByTestId, getByDisplayValue } = render(<CheckoutForm/>);

    const firstName = getByLabelText(/first name/i);
    const lastName = getByLabelText(/last name/i);
    const address = getByLabelText(/address/i)
    const city = getByLabelText(/city/i)
    const state = getByLabelText(/state/i)
    const zip = getByLabelText(/zip/i)

    expect(firstName).toBeInTheDocument();
    expect(lastName).toBeInTheDocument();
    expect(address).toBeInTheDocument();
    expect(city).toBeInTheDocument();
    expect(state).toBeInTheDocument();
    expect(zip).toBeInTheDocument();

    fireEvent.change(firstName, { target: { value: "Fady"}})
    fireEvent.change(lastName, {target: {value: "Gouda"}})
    fireEvent.change(address, { target: {value: "12345 End of the Road Rd"}})
    fireEvent.change(city, {target: {value: "Rancho Cucamonga"}})
    fireEvent.change(state, {target: {value: "California"}})
    fireEvent.change(zip, {target: {value: 91786}})

    expect(getByDisplayValue(/fady/i)).toBeInTheDocument();
    expect(getByDisplayValue(/gouda/i)).toBeInTheDocument();
    expect(getByDisplayValue(/12345 end of the road rd/i)).toBeInTheDocument();
    expect(getByDisplayValue(/rancho cucamonga/i)).toBeInTheDocument();
    expect(getByDisplayValue(/california/i)).toBeInTheDocument();
    expect(getByDisplayValue(/91786/i)).toBeInTheDocument();
    


    const checkout = getByTestId(/submit/i)
    expect(checkout).toBeInTheDocument();
    fireEvent.click(checkout)

    const success = getByTestId(/success/i)
    expect(success).toBeInTheDocument()
});
