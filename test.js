import { expect } from "chai";
import { determineWinner } from "./index.js";

describe('determineWinner', () => {
    it('should determine that X won diagonal game', () => {
        const gameBoard = [
            ['X', 'O', 'X'],
            ['X', 'X', 'O'],
            ['O', 'O', 'X']
        ];

        const winner = determineWinner(gameBoard);

        expect(winner).to.equal('X');
    })
    
    it('should determine that O won diagonal game', () => {
        const gameBoard = [
            ['X', 'O', 'O'],
            ['X', 'O', 'O'],
            ['O', 'X', 'X']
        ];

        const winner = determineWinner(gameBoard);

        expect(winner).to.equal('O');
    })
    
    it('should determine that X won horizontal game', () => {
        const gameBoard = [
            ['X', 'X', 'X'],
            ['X', 'O', 'O'],
            ['O', 'O', 'X']
        ];

        const winner = determineWinner(gameBoard);

        expect(winner).to.equal('X');
    })
    
    it('should determine that X won vertical game', () => {
        const gameBoard = [
            ['X', 'O', 'O'],
            ['X', 'X', 'O'],
            ['X', 'O', 'X']
        ];

        const winner = determineWinner(gameBoard);

        expect(winner).to.equal('X');
    })
    
    it('should determine that O won vertical game', () => {
        const gameBoard = [
            ['X', 'O', 'X'],
            ['X', 'O', 'O'],
            ['O', 'O', 'X']
        ];

        const winner = determineWinner(gameBoard);

        expect(winner).to.equal('O');
    })
})