import {getNextIndexPost} from "../posts_index_logic";

//Test the progress of the index of posts to be printed

describe("Counter posts function", () => {
  test("It should advance by one or return to zero", () => {
      
  
    expect(getNextIndexPost(3,4)).toEqual(0);
  
  });
  });
  