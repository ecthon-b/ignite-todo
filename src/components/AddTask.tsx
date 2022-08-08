import styled from './AddTask.module.css';

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


export function AddTask() {
    const [tasks, setTasks] = useState<Task[]>([
        {
            id: uuidv4(),
            title: 'Minha task',
            isComplete: true
        }
    ]);


    return (
        <main className={styled.container}>
            <div className={styled.content}>
                <form
                    className={styled.newTaskBar}
                >
                    <input
                        type="text"
                        name='titletask'
                        placeholder="Adicione uma nova tarefa"
                    />
                    <button
                        type='submit'
                        className={styled.btnAdd}
                    > Criar <PlusCircle size={16} />
                    </button>
                </form>

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