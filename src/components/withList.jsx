import React from 'react';
import { Link } from 'react-router-dom';

const withList = (ListItemComponent, propName = 'list') => {
  function SearchListComponent(props) {
    const listItems = props[propName].map(item => (
      <li key={item.id}>
        <Link to={`/${item.id}`}>
          <ListItemComponent {...item} />
        </Link>
      </li>
    ));

    return (
      <ul>
        {listItems}
      </ul>
    );
  }

  SearchListComponent.displayName = `SearchListComponent(${ListItemComponent})`;
  return SearchListComponent;
};

export default withList;
