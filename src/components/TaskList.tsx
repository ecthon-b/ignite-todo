import { CardTask } from './CardTask';
import styled from './TaskList.module.css';

export function TaskList() {
    return (
        <main className={styled.container}>
            <ul>
                <CardTask />
                <CardTask />
                <CardTask />
            </ul>
        </main>
    )
}