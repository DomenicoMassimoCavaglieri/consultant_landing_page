import {loremGenerator} from "../lorem";

//Test of random string generator

describe("Lorem Generator", () => {
  test("it should return random string", () => {
    const input = "Lorem, ipsum dolor sit amet";

    const output = "Lorem, ipsum dolor sit";

    expect(loremGenerator(input,4)).toEqual(output);

  });
});
