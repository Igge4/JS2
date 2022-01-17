import React from 'react'

const CustomerList = ({item}) => {
    return (
                <div class="row">
                    <div class="col-12">
                         <h2>Contact info: </h2>
                    </div> 
                    <div class="col-12">
                        <p>{item.firstName} {item.lastName} </p>
                    </div>
                    <div class="col-12">
                        <p>{item.email} </p>
                    </div>
                </div>
    )
}

export default CustomerList