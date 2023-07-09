import { useEffect, useState } from 'react'
import ItemDetails from '../components/items/ItemDetails'
import ItemForm from '../components/items/ItemForm'
import Layout from '../components/layout'

const Additems = () =>{
    return(
        <div className="home">
            <Layout>
            <ItemForm/>
            </Layout>
             
        </div>
    )
}

export default Additems