//import {changeQuestionsPhase} from "../questions";
//import {phaseAppendQuestions} from "../questions";


let globalPhase = 0;
let globalQuestion = 1;

function mockChangeQuestionsPhase(global,nextCase) {
    return global = nextCase;
} 

function mockChangeQuestionsNumber(global) {
    return global+1;
} 

describe("change the global state", () => {

    test("it should change the Phase for the addition of the questions number", () => {
   
        expect(mockChangeQuestionsPhase(globalPhase, 2)).toEqual(2);
    }),

    test("it should change the questions numbering", () => {
       
        expect(mockChangeQuestionsNumber(globalQuestion)).toEqual(2);

    });
});

