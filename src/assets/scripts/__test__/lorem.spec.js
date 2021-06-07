import {loremGenerator} from "../tools/lorem";



describe("Lorem Generator", () => {
  test("it should return the first three words", () => {
    const input = "Lorem, ipsum dolor sit amet";

    const output = "Lorem, ipsum dolor";

    expect(loremGenerator(input,3)).toEqual(output);

  });
});
