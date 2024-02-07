import styles from './Menu.module.scss';
import { ReactComponent as Logo } from 'assets/logo.svg';
import SearchEngine from './SearchEngine';
import { useState } from 'react';
import Filters from './Filters';
import Orderer from './Orderer';
import Itens from './Itens';

export default function Menu() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<number | null>(null);
  const [orderer, setOrderer] = useState('');

  return (
    <main>
      <nav className={styles.menu}>
        <Logo />
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>
          A casa do código e da massa
        </div>
      </header>

      <section className={styles.cardapio}>
        <h3 className={styles.cardapio__titulo}>Cardápio</h3>
        <SearchEngine
          search={search}
          setSearch={setSearch}
        />
        <div className={styles.cardapio__filtros}>
          <Filters
            filter={filter}
            setFilter={setFilter}
          />

          <Orderer
            orderer={orderer}
            setOrderer={setOrderer}
          />
        </div>
        <Itens
          search={search}
          filter={filter}
          orderer={orderer}
        />
      </section>
    </main>
  );
}