import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import "./table.css"

const Table = (props) => {
    const [myData, setMyData] = useState([])

    useEffect(() => {

        axios

            .get("https://jsonplaceholder.typicode.com/users")

            .then((response) => setMyData(response.data))

    }, [])
    return (
        <div className="container">
            <table className="table">
                <thead>

                    <tr>

                        <th>User Id</th>

                        <th>User Name</th>

                        <th>Email</th>

                    </tr>

                </thead>
                <tbody>

                    {

                        myData.map((data, index) => {

                            return (

                                <tr key={index}>

                                    <td>{data.id}</td>

                                    <td>{data.username}</td>

                                    <td>{data.email}</td>

                                    <td></td>

                                </tr>

                            )
                        })

                    }

                </tbody>

            </table>

        </div>

    )

}
export default Table