import React from 'react';
import { defaultState } from './data';
import ListItems from './components/ListItems';
import NewItem from './components/NewItem';
import ErrorBoundary from './components/ErrorBoundary'

function App() {
    const [items, setItems] = React.useState(defaultState)

    const addItem = newItem => setItems((items) => (
        [newItem, ...items]
    ))

    const removeItem = id => setItems((items) => (
        items.filter(item => item.id !== id)
    ))

    const toggleItem = toggledItem => setItems((items) => (
        items.map(item => item.id !== toggledItem.id
            ? item : { ...toggledItem, packed: !toggledItem.packed }
        )
    ));

    const markAllPacked = () => setItems((items) => (
        items.map(item => ({ ...item, packed: true }))
    ))

    const markAllUnPacked = () => setItems((items) => (
        items.map(item => ({ ...item, packed: false }))
    ))


    const packedItems = items.filter(item => item.packed)
    const unpackedItems = items.filter(item => !item.packed)

    return (
        <div className='container py-3'>
            <ErrorBoundary>
                <h2>TODO list:</h2>
                <br />
                <NewItem addItem={addItem} />

                <div className='row'>
                    <div className='col-md-5'>
                        <ListItems
                            title="Active items"
                            items={unpackedItems}
                            toggleItem={toggleItem}
                            removeItem={removeItem}
                        />
                    </div>
                    <div className='offset-md-2 col-md-5'>
                        <ListItems
                            title="Completed items"
                            items={packedItems}
                            toggleItem={toggleItem}
                            removeItem={removeItem}
                        />
                    </div>
                </div>
                <button className='btn btn-success btn-lg btn-block' onClick={markAllPacked}>Mark all as packed</button>
                <button className='btn btn-danger btn-lg btn-block' onClick={markAllUnPacked}>Mark all as unpacked</button>
            </ErrorBoundary>
        </div>
    )
}


export default App;
