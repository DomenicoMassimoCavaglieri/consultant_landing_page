import { isOneFieldEmpty, isValidUsername, isValidPassword } from "../form_utility";

describe("Form validations functions", () => {
   //Empty field
    test("It should return true if the pattern is respected", () => {
        const inputString = "";
        expect(isOneFieldEmpty(inputString)).toEqual(true);
    }),

    //Correct user name (min 8 - max 12 characters)
    test("It should return true if the pattern is respected", () => {
        const inputString = "Domenico";
        expect(isValidUsername(inputString)).toEqual(true);
    }),

    //Correct password (min 8 - max 12 characters, least 1 uppercase character, 1 lowercase character, 1 number and 1 symbol);)
    test("It should return true if the pattern is respected", () => {
        const inputString = "Domenico1!";
        expect(isValidPassword(inputString)).toEqual(true);
    });
});
