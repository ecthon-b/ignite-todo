import styled from './ShowTodos.module.css';

import { PlusCircle } from 'phosphor-react';
import { NoTasks } from './NoTasks';
export function ShowTodos() {
    return (
        <main className={styled.container}>
            <div className={styled.content}>
                <form className={styled.newTaskBar}>
                    <input type="text" placeholder="Adicione uma nova tarefa" />
                    <button className={styled.btnAdd} >Criar <PlusCircle size={16} /></button>
                </form>

            </div>

            <div className={styled.contentInfoTasks}>
                <div className={styled.infoTasks}>
                    <span className={styled.firstSpan}>Tarefas criadas</span>
                    <p className={styled.count}>1</p>
                </div>

                <div className={styled.infoTasks}>
                    <span className={styled.secondSpan}>Concluídas</span>
                    <p className={styled.count}>1</p>
                </div>
            </div>

            <div className={styled.showTasks}>
                <NoTasks />

            </div>

        </main>
    )
}