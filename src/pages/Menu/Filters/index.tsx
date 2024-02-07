import React from 'react';
import filters from './filters.json';
import styles from './Filters.module.scss';
import classNames from 'classnames';

type IOption = typeof filters[0];

interface FiltersProps {
  filter: number | null;
  setFilter: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Filters({ filter, setFilter }: FiltersProps) {
  function selectFilter(option: IOption) {
    return filter === option.id
      ? setFilter(null)
      : setFilter(option.id);
  }
  return (
    <div className={styles.filtros}>
      {filters.map((option) => (
        <button
          className={
            classNames({
              [styles.filtros__filtro]: true,
              [styles['filtros__filtro--ativo']]: filter === option.id,
            })
          }
          key={option.id}
          onClick={() => selectFilter(option)}
        >
          {option.label}
        </button>
      ))
      }
    </div >
  );
}