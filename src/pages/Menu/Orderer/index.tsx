import React, { useState } from 'react';
import styles from './Orderer.module.scss';
import options from './options.json';

import classNames from 'classnames';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

interface OrdererProps {
  orderer: string;
  setOrderer: React.Dispatch<React.SetStateAction<string>>;
}


export default function Orderer({ orderer, setOrderer }: OrdererProps) {
  const [open, setOpen] = useState(false);
  const nameOrderer = orderer && options.find(option => option.value === orderer)?.nome;

  return (
    <button
      className={classNames({
        [styles.ordenador]: true,
        [styles["ordenador--ativo"]]: orderer !== '',
      })}
      onClick={() => setOpen(!open)}
      onBlur={() => setOpen(false)}
    >
      <span>
        {
          nameOrderer || 'Ordenar por'
        }
      </span>
      {open
        ? <MdKeyboardArrowUp size={20} />
        : <MdKeyboardArrowDown size={20} />
      }
      <div className={
        classNames({
          [styles.ordenador__options]: true,
          [styles["ordenador__options--ativo"]]: open,
        })
      }>
        {
          options.map(option => (
            <div
              className={styles.ordenador__option}
              key={option.value}
              onClick={() => setOrderer(option.value)}
            >
              {option.nome}
            </div>
          ))
        }
      </div>
    </button>
  );
}