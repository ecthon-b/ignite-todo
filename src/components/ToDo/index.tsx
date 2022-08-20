import styled from './styles.module.css';

import { v4 as uuidv4 } from 'uuid';
import { PlusCircle } from 'phosphor-react';
import { NoTasks } from '../NoTasks';
import { ChangeEvent, MouseEvent, useState } from 'react';
import { CardTask } from '../CardTask';

export interface TaskProps {
    id: string;
    title: string;
    isComplete: boolean;
}

export function ToDo() {

    const [taskTitle, setTaskTitle] = useState("");
    const [tasks, setTask] = useState<TaskProps[]>([
        {
            id: uuidv4(),
            title: 'Refatorando ToDo',
            isComplete: false
        }
    ])

    function getTaskTitle(event: ChangeEvent<HTMLInputElement>) {
        setTaskTitle(event.target.value);
    }

    function hendleAddNewTask(event: MouseEvent<HTMLButtonElement>) {
        event.preventDefault();

        const task = {
            id: uuidv4(),
            title: taskTitle,
            isComplete: false
        }

        if (task.title !== "") {
            setTask([...tasks, task]);
        } else {
            alert("O campo não pode estar vazio.")
        }

        tasks.push(task);
        console.log(tasks)
        setTaskTitle("");
    }



    return (
        <main className={styled.container}>
            <div className={styled.content}>
                <div
                    className={styled.newTaskBar}
                >
                    <input
                        onSubmit={getTaskTitle}
                        name='titletask'
                        type="text"
                        placeholder="Adicione uma nova tarefa"
                        value={taskTitle}
                        onChange={getTaskTitle}
                    />
                    <button
                        type='submit'
                        onClick={hendleAddNewTask}
                        className={styled.btnAdd}
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
                    : <ul>{tasks.map(task => (
                        <CardTask
                            key={task.id}
                            id={task.id}
                            title={task.title}
                            isComplet={task.isComplete}
                        />
                    ))}</ul>}
            </div>
        </main>
    )
}