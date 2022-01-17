import React from 'react'
import CustomerList from '../components/Customer'
//import Search from '../components/Search';
import { useState, useEffect } from 'react';

const ShowCustomers = () => {
const [value, GetList] = useState([])
useEffect(() => {
    async function fetchData() {
       const res = fetch('https://ecexam-webapi.azurewebsites.net/api/Customers')
        GetList(await res.json())
    }

    fetchData() 
}, [])

    return (
        <div class="row">
            <div class="col-12">
                <h1>Customer Register</h1>
            </div>
            <div className ="col-12">
                {
            value.map(customer => (
                <div key={customer.userId}>
                    <CustomerList item={customer} />
                </div>
                ))
            }
            </div>
        </div>
    )
}

export default ShowCustomers