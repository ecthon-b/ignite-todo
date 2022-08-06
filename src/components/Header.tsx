import styled from './Header.module.css';

export function Header() {
    return (
        <header>
            <img className={styled.logo} src="../src/assets/logo.svg" />
        </header>
    )
}