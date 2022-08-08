import styled from './AddTask.module.css';

import { v4 as uuidv4 } from 'uuid';
import { PlusCircle } from 'phosphor-react';
import { NoTasks } from './NoTasks';
import { TaskList } from './TaskList';
import { ButtonHTMLAttributes, ChangeEvent, FormEvent, MouseEvent, useState } from 'react';

interface Task {
    id: string;
    title: string;
    isComplete: boolean;
}


export function AddTask() {
    const [titleTask, setTitleTask] = useState('');
    const [tasks, setTasks] = useState<Task[]>([
        // {
        //     id: uuidv4(),
        //     title: 'Minha task',
        //     isComplete: true
        // }
    ]);

    function getTitleNewTask(event: ChangeEvent<HTMLInputElement>) {
        setTitleTask(event.target.value);
    }

    function handleCreateNewTask(event: MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        const task = {
            id: uuidv4(),
            title: titleTask,
            isComplete: false
        }

        setTasks([...tasks, task]);
        setTitleTask("");
        // tasks.push(task);
        // console.log(tasks);
    }

    return (
        <main className={styled.container}>
            <div className={styled.content}>
                <div
                    className={styled.newTaskBar}
                >
                    <input
                        onSubmit={getTitleNewTask}
                        name='titletask'
                        type="text"
                        placeholder="Adicione uma nova tarefa"
                        value={titleTask}
                        onChange={getTitleNewTask}
                    />
                    <button
                        type='submit'
                        onClick={handleCreateNewTask}
                        className={styled.btnAdd}
                    > Criar <PlusCircle size={16} />
                    </button>
                </div>

            </div>

            {/* INFORMAÇÕES: Tasks criadas/concluídas */}
            <div className={styled.contentInfoTasks}>
                <div className={styled.infoTasks}>
                    <span className={styled.firstSpan}>Tarefas criadas</span>
                    <p className={styled.count}>0</p>
                </div>

                <div className={styled.infoTasks}>
                    <span className={styled.secondSpan}>Concluídas</span>
                    <p className={styled.count}>0</p>
                </div>
            </div>

            <div className={styled.showTasks}>
                {tasks.length === 0 ? <NoTasks /> : <TaskList />}
            </div>

        </main>
    )
}