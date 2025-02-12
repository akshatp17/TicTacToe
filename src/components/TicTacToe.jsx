import { useState, useEffect } from 'react'
import React from 'react'
import circle_icon from '../assets/circle.png'
import cross_icon from '../assets/cross.png'

let data = ["", "", "", "", "", "", "", "", ""]

const TicTacToe = () => {

    let [count, setCount] = useState(0)
    let [lock, setLock] = useState(false)

    const onReset = () => {
        data = ["", "", "", "", "", "", "", "", ""];
        setLock(false);
        {
            let box = document.getElementsByClassName('boxes');
            for (let index = 0; index < box.length; index++) {
                box[index].innerHTML = '';
            }

            let title = document.getElementsByClassName('title');
            title[0].innerHTML = `Tic Tac Toe Game In <span className='text-[#348cff]'>React</span>`;
        }
    }

    const checkWin = () => {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6] // Diagonals
        ];
        
        for (let pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (data[a] && data[a] === data[b] && data[a] === data[c]) {
                setLock(true);
                let title = document.getElementsByClassName('title');
                title[0].innerHTML = `Player ${data[a].toUpperCase()} Wins!`;
                return;
            }
        }
    }

    const toggleInput = (e, num) => {
        if (lock || data[num] !== "") {
            return;
        }

        if (count % 2 === 0) {
            e.target.innerHTML = `<img class='w-full h-full' src='${cross_icon}'>`;
            data[num] = 'x';
        } else {
            e.target.innerHTML = `<img class='w-full h-full' src='${circle_icon}'>`;
            data[num] = 'o';
        }
        
        setCount(count + 1);
        checkWin();
    }


    return (
        <div className='main flex flex-col items-center pt-3 h-[100vh] text-white gap-3 justify-around pb-3'>
            <div className='title font-bold text-4xl'>
                Tic Tac Toe Game In <span className='text-[#348cff]'>React</span>
            </div>
            <div className="board flex flex-col gap-1.5">
                <div className="row1 flex gap-1.5">
                    <div className="boxes w-36 h-36 rounded-xl bg-[#1a2d47]" onClick={(e) => toggleInput(e, 0)}></div>
                    <div className="boxes w-36 h-36 rounded-xl bg-[#1a2d47]" onClick={(e) => toggleInput(e, 1)}></div>
                    <div className="boxes w-36 h-36 rounded-xl bg-[#1a2d47]" onClick={(e) => toggleInput(e, 2)}></div>
                </div>
                <div className="row2 flex gap-1.5">
                    <div className="boxes w-36 h-36 rounded-xl bg-[#1a2d47]" onClick={(e) => toggleInput(e, 3)}></div>
                    <div className="boxes w-36 h-36 rounded-xl bg-[#1a2d47]" onClick={(e) => toggleInput(e, 4)}></div>
                    <div className="boxes w-36 h-36 rounded-xl bg-[#1a2d47]" onClick={(e) => toggleInput(e, 5)}></div>
                </div>
                <div className="row3 flex gap-1.5">
                    <div className="boxes w-36 h-36 rounded-xl bg-[#1a2d47]" onClick={(e) => toggleInput(e, 6)}></div>
                    <div className="boxes w-36 h-36 rounded-xl bg-[#1a2d47]" onClick={(e) => toggleInput(e, 7)}></div>
                    <div className="boxes w-36 h-36 rounded-xl bg-[#1a2d47]" onClick={(e) => toggleInput(e, 8)}></div>
                </div>
            </div>
            <button className="reset bg-[#1a2d47] w-20 h-fit px-2 py-1 rounded-2xl text-[#348cff] font-bold hover:cursor-pointer" onClick={onReset}>Reset</button>
        </div>
    )
}

export default TicTacToe