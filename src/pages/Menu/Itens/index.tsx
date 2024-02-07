import { useEffect, useState } from 'react';
import Item from './Item';
import styles from './Itens.module.scss';
import menu from './itens.json';

interface ItensProps {
  search: string;
  filter: number | null;
  orderer: string;
}

export default function Itens(props: ItensProps) {
  const [list, setList] = useState(menu);
  const { search, filter, orderer } = props;

  const orderPropAsc = (
    list: typeof menu,
    prop: "size" | "serving" | "price"
  ) => {
    return list.sort((a, b) => (a[prop] > b[prop] ? 1 : -1));
  };

  function testSearch(title: string) {
    const regex = new RegExp(search, 'i');
    return regex.test(title);
  }

  function testFilter(id: number) {
    if (filter !== null) return filter === id;
    return true;
  }

  function order(newList: typeof menu) {
    switch (orderer) {
      case 'porcao': {
        return orderPropAsc(newList, 'size')
      }
      case 'qtd_pessoas': {
        return orderPropAsc(newList, 'serving')
      }
      case 'preco': {
        return orderPropAsc(newList, 'price')
      }

      default: {
        return newList;
      }
    }
  }

  useEffect(() => {
    const newList = menu.filter(item => testSearch(item.title) && testFilter(item.category.id));
    setList(order(newList));
  }, [search, filter, orderer]);

  return (
    <div className={styles.itens}>
      {list.map(item =>
        <Item
          key={item.id}
          {...item}
        />
      )}
    </div>
  );
}