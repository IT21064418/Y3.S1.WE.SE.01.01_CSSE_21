import { useEffect, useState } from 'react'
import ItemDetails from '../components/items/ItemDetails'
import ItemForm from '../components/items/ItemForm'
import Layout from '../components/layout'

const Displayitems = () =>{
    return(
        <div className="home">
            <Layout>
            <ItemDetails/>
            </Layout>

        </div>
    )
}

export default Displayitems