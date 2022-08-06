import styled from './ShowTodos.module.css';

import { PlusCircle } from 'phosphor-react';
export function ShowTodos() {
    return (
        <main className={styled.container}>
            <div className={styled.content}>
                <form className={styled.newTaskBar}>
                    <input type="text" placeholder="Adicione uma nova tarefa" />
                    <button className={styled.btnAdd} >Criar <PlusCircle size={16} /></button>
                </form>
            </div>
        </main>
    )
}