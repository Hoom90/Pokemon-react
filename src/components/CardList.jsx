import Card from "./Card"
import { Fragment } from 'react';

export default function CardList(props) {
    const items = props.items
  return (
    <ul className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-5 px-5">
      {items.map((item,index) => {
        return (
          <Fragment key={`poketmons ${index}`} >
            <Card name={item.name} url={item.url} />
          </Fragment>
        );
      })}
    </ul>
  );
}
