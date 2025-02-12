import { useState, useEffect } from 'react'
import React from 'react'
import circle_icon from '../assets/circle.png'
import cross_icon from '../assets/cross.png'

let data = ["", "", "", "", "", "", "", "", ""]

const TicTacToe = () => {

    const [Game, setGame] = useState(true)
    const [player, setPlayer] = useState("X")
    const [count, setCount] = useState(0)
    
    let lock = false;

    const onReset = () => {
        data = ["", "", "", "", "", "", "", "", ""];
        lock = false;
        setCount(0)
        setPlayer("X")
        setGame(true);
        {
            let box = document.getElementsByClassName('boxes');
            for (let index = 0; index < box.length; index++) {
                box[index].innerHTML = '';
            }

            let title = document.getElementsByClassName('title');
            title[0].innerHTML = `Tic Tac Toe Game In <span class='text-[#348cff]'>React</span>`;
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
                lock = true;
                let title = document.getElementsByClassName('title');
                title[0].innerHTML = `Player ${data[a].toUpperCase()} Wins!`;
                setGame(false);
                return;
            }
        }
    }

    const checkDraw = () => {
        if (count === 8) {
            let title = document.getElementsByClassName('title');
            title[0].innerHTML = `Match is <span class="text-red-500">Drawn</span>`;
            setGame(false);
            return;
        }
    }


    const toggleInput = (e, num) => {
        if (lock || data[num] !== "") return;

        if (Game) {
            let img = document.createElement("img");
            img.src = count % 2 === 0 ? cross_icon : circle_icon;
            img.className = "w-full h-full transform scale-0 opacity-0 transition-all duration-300";
            
            e.target.appendChild(img);
            setTimeout(() => {
                img.classList.add("scale-100", "opacity-100");
            }, 10); // Slight delay to trigger animation
            
            data[num] = count % 2 === 0 ? 'x' : 'o';
            setPlayer(count % 2 === 0 ? "O" : "X");
            
            setCount(count + 1);
            checkDraw();
            checkWin();
        }
    }

    return (
        <div className='main flex flex-col items-center pt-3 h-[100vh] text-white gap-3 justify-around pb-3'>
            <div className='flex flex-col gap-2'>
                <div className='title font-bold text-4xl'>
                    Tic Tac Toe Game In <span className='text-[#348cff]'>React</span>
                </div>
                {Game ? <div className='text-center font-semibold text-gray-400'>Current Player: {player}</div> : ""}
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