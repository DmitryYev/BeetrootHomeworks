import React from 'react'
import Item from './Item';
import Filter from './Filter';

function ListItems(props) {

    const [searchTerm, setSearchTerm] = React.useState('');

    const updateSearchTerm = event => {
        setSearchTerm(event.target.value);
    };

    const { items, removeItem, toggleItem, title } = props;

    return (
        <section>
            <h3 className='mb-3'>{title}</h3>
            <Filter searchTerm={searchTerm} onChange={updateSearchTerm} />

            <ul className='list-group mb-3'>{
                items
                    .filter(item => item.value.toLowerCase().includes(searchTerm.toLowerCase()))
                    .map(item => (
                        <Item
                            key={item.id}
                            item={item}
                            removeItem={removeItem}
                            toggleItem={toggleItem}
                        />
                    ))
            }</ul>
        </section>
    )
}


export default ListItems;
