import * as React from 'react';
import { log } from 'util';

export interface Props {
    name: string;
    enthusiasmLevel?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
    onChangeName: (name: string) => void;
}

function Hello({name, enthusiasmLevel = 1, onIncrement, onDecrement, onChangeName}: Props) {
    log('component: function Hello');
    if (enthusiasmLevel <= 0) {
        throw new Error('You could be a little more enthusiastic. :D');
    }

    return (
        <div className="hello">
            <input type={'text'} value={name} onChange={(e) => onChangeName(e.target.value)}/>
            <div className="greeting">
                Hello {name + getExclamationMarks(enthusiasmLevel)}
            </div>
            <div>
                <button onClick={onDecrement}>-</button>
                <button onClick={onIncrement}>+</button>
            </div>
        </div>
    );
}

export default Hello;

// helpers

function getExclamationMarks(numChars: number) {
    log('component: function getExclamationMarks');
    return Array(numChars + 1).join('!');
}