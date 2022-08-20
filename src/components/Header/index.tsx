import styled from './styles.module.css';

export function Header() {
    return (
        <header>
            <img className={styled.logo} src="../src/assets/logo.svg" />
        </header>
    )
}