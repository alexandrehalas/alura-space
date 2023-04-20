import React from 'react'
import homeAtivo from '../../assets/icones/home-ativo.png'
import maisCurtidasInativo from '../../assets/icones/mais-curtidas-inativo.png'
import maisVistasInativo from '../../assets/icones/mais-vistas-inativo.png'
import novasInativo from '../../assets/icones/novas-inativo.png'
import surpreendaMe from '../../assets/icones/surpreenda-me-inativo.png'
import styles from './Menu.module.scss'


export default function Menu() {
  return (
    <nav className={styles.menu}>
        <ul className={styles.menu__lista}>
            <li className={styles.menu__item}>
                <img src={homeAtivo} alt="Página inicial"/>
                <a href="/">Início</a>
            </li>
            <li className={styles.menu__item}>
                <img src={maisVistasInativo} alt="Página mais vistas"/>
                <a href="/">Mais vistas</a>
            </li>
            <li className={styles.menu__item}>
                <img src={maisCurtidasInativo} alt="Página mais curtidas"/>
                <a href="/">Mais curtidas</a>
            </li>
            <li className={styles.menu__item}>
                <img src={novasInativo} alt="Página novas"/>
                <a href="/">Novas</a>
            </li>
            <li className={styles.menu__item}>
                <img src={surpreendaMe} alt="Página surpreenda-me"/>
                <a href="/">Surpreenda-me</a>
            </li>
        </ul>
    </nav>
  )
}
