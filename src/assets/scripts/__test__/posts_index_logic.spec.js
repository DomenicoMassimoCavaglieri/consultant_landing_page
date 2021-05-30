import {getNextIndexPost} from "../posts_index_logic";


describe("Counter posts function", () => {
  test("It should advance by one or return to zero", () => {
      
  
    expect(getNextIndexPost(3,4)).toEqual(0);
  
  });
  });
  