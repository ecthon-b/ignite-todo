import { Circle, Trash } from 'phosphor-react';

import styled from './CardTask.module.css';

export function CardTask() {
    return (
        <li>
            <div className={styled.card}>
                <button><Circle color='#4EA8DE' size={18} /></button>
                <p>
                    Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames
                    integer.
                </p>
                <button><Trash color='#808080' size={18} /></button>
            </div>
        </li>
    )
}