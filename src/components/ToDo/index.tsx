import styled from './styles.module.css';

import { v4 as uuidv4 } from 'uuid';
import { CheckCircle, Circle, PlusCircle, Trash } from 'phosphor-react';
import { NoTasks } from '../NoTasks';
import { ChangeEvent, MouseEvent, useState } from 'react';

export interface TaskProps {
    id: string;
    title: string;
    isComplete: boolean;
}

export function ToDo() {
    const [tasks, setTasks] = useState<TaskProps[]>([
        {
            id: uuidv4(),
            title: 'Refactor',
            isComplete: false
        }
    ])
    const [newTaskTitle, setNewTaskTitle] = useState('');

    function hendleCreateNewTask() {
        if (!newTaskTitle) {
            return alert("O campo não pode estar vazio.")
        }

        const task = {
            id: uuidv4(),
            title: newTaskTitle,
            isComplete: false
        }

        setTasks([...tasks, task]);
        setNewTaskTitle("");
    }

    return (
        <main className={styled.container}>
            <div className={styled.content}>
                <div
                    className={styled.newTaskBar}
                >
                    <input
                        type="text"
                        placeholder="Adicione uma nova tarefa"
                        value={newTaskTitle}
                        onChange={(e) => setNewTaskTitle(e.target.value)}
                    />
                    <button
                        type='submit'
                        className={styled.btnAdd}
                        onClick={hendleCreateNewTask}
                    > Criar <PlusCircle size={16} />
                    </button>
                </div>

            </div>

            {/* INFORMAÇÕES: Tasks criadas/concluídas */}
            <div className={styled.contentInfoTasks}>
                <div className={styled.infoTasks}>
                    <span className={styled.firstSpan}>Tarefas criadas</span>
                    <p className={styled.count}>{tasks.length}</p>
                </div>

                <div className={styled.infoTasks}>
                    <span className={styled.secondSpan}>Concluídas</span>
                    <p className={styled.count}>0 de {tasks.length}</p>
                </div>
            </div>

            <div className={styled.showTasks}>
                {tasks.length === 0
                    ? <NoTasks />
                    : <ul>

                        <li>
                            <div className={styled.card}>
                                <button><Circle color='#4EA8DE' size={18} /></button>
                                <p className={styled.title}>
                                    Lorem Ipsum Dolor
                                </p>
                                <button className={styled.btnDelete}><Trash size={18} /></button>
                            </div>
                        </li>

                    </ul>}
            </div>
        </main>
    )
}