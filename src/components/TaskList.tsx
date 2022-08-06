import { Circle, Trash } from 'phosphor-react';
import styled from './TaskList.module.css';

export function TaskList() {
    return (
        <main className={styled.container}>
            <ul>
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
            </ul>
        </main>
    )
}