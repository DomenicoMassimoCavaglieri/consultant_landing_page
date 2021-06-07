import {getNextIndexPost} from "../posts_index_logic";

//Posts in Feature section
describe("Test the progress of the index of posts to be printed", () => {
  test("It should advance by one", () => {
      
  
    expect(getNextIndexPost(2,4)).toEqual(3);
  
  });
  test("It should return to zero", () => {
      
  
    expect(getNextIndexPost(3,4)).toEqual(0);
  
  });
  });
  