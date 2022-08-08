import styled from './ShowTodos.module.css';

import { v4 as uuidv4 } from 'uuid';
import { PlusCircle } from 'phosphor-react';
import { NoTasks } from './NoTasks';
import { TaskList } from './TaskList';
import { FormEvent, useState } from 'react';

interface Task {
    id: string;
    title: string;
    isComplete: boolean;
}


export function ShowTodos() {
    // const [tasks, setTasks] = useState<Task[]>([]);
    // const [taskTitle, setTaskTitle] = useState('');

    // function setNewTaskTitle(event: FormEvent) {
    //     event.preventDefault();

    // }

    return (
        <main className={styled.container}>
            <div className={styled.content}>
                <form
                    // onSubmit={setNewTaskTitle}
                    className={styled.newTaskBar}
                >
                    <input
                        // type="text"
                        name='nametask'
                        placeholder="Adicione uma nova tarefa"
                    />
                    <button
                        type='submit'
                        className={styled.btnAdd}
                    > Criar <PlusCircle size={16} />
                    </button>
                </form>

            </div>

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
                {/* <NoTasks /> */}
                <TaskList />

            </div>

        </main>
    )
}