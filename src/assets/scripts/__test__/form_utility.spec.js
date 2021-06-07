import { isOneFieldEmpty, isValidUsername, isValidPassword } from "../form_utility";

//Test of filling in the form fields


describe("Form validations functions", () => {
   //Empty field
    test("It should return true if the input is an empty string", () => {
        const inputString = "";
        expect(isOneFieldEmpty(inputString)).toEqual(true);
    }),

    //User name field
    test(`It should return true if the input is a string 
          with a minimum of 8 characters and a maximum of 12`, () => {
        const inputString = "Domenico";
        expect(isValidUsername(inputString)).toEqual(true);
    }),

    //Password field
    test(`It should return true if the input is a string
          with a minimum of 8 characters and a maximum of 12, 
          least 1 uppercase character, 1 lowercase character, 
          1 number and 1 symbol`, () => {
        const inputString = "Domenico1!";
        expect(isValidPassword(inputString)).toEqual(true);
    });
});
