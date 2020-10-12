import React, { Component } from 'react'
import ItemCategorys from '../components/Item Category/ItemCategory'
import NavigationBar from '../components/Navbar/NavigationBar'

class ItemCategory extends Component {
    render() {
        return (
            <>
            <NavigationBar/>
            <ItemCategorys/>
            </>
        )
    }
}

export default ItemCategory
