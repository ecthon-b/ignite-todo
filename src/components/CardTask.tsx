import { CheckCircle, Circle, Trash } from 'phosphor-react';
import { useState } from 'react';

import styled from './CardTask.module.css';

interface CardProps {
    id: string;
    title: string;
    isComplet: boolean;
}

export function CardTask({ id, title, isComplet }: CardProps) {
    const [taskComplete, setTaskComplete] = useState<boolean>(false);

    function handleTaskComplete() {
        setTaskComplete(!taskComplete)
    }

    return (
        <li>
            <div className={styled.card}>
                <button
                    onClick={handleTaskComplete}
                >{taskComplete === false ? <Circle color='#4EA8DE' size={18} /> : <CheckCircle color='#5E60CE' size={18} weight="fill" />}</button>
                <p className={taskComplete === false ? styled.title : styled.complete}>
                    {title}
                </p>
                <button><Trash color='#808080' size={18} /></button>
            </div>
        </li>
    )
}