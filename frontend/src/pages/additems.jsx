import { useEffect, useState } from 'react'
import ItemDetails from '../components/items/ItemDetails'
import ItemForm from '../components/items/ItemForm'
import Layout from '../components/layout'

const Additems = () =>{
    const [items , setitems] = useState(null)

    useEffect (()=>{
        const fetchitems = async() => {
            const response = await fetch('http://localhost:4001/api/itemmanagement')
            const json = await response.json()

            if(response.ok){
                setitems(json)
            }
        }
        fetchitems()
    },[])

    

    return(
        <div className="home">
            <Layout>
            <ItemForm/>
            </Layout>
             
        </div>
    )
}

export default Additems