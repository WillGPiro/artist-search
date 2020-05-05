import React from 'react';

const withList = (ListItemComponent, propName = 'list') => {
  function SearchListComponent(props) {
    const listItems = props[propName].map(item => (
      <li key={item.id}>
        <ListItemComponent {...item} />
      </li>
    ));

    return (
      <ol>
        {listItems}
      </ol>
    );
  }

  SearchListComponent.displayName = `SearchListComponent(${ListItemComponent.name})`;
  return SearchListComponent;
};

export default withList;
