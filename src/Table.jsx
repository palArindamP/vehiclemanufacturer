import React, {useState} from 'react'
import { Users } from "./users"

import Popup from './Popup';

const Table = ({data}) => {
    const [popup, setPopup] = useState('close');


const open = () => {
    switch(popup){
        case "close":
            setPopup('open');
            return;
        case "open":  
            setPopup('close');  
            return;
        default:
            setPopup('close');
            return;
    }
}
    return (
        <div>
        <table>
            <tbody>
                <tr style={{ background: "black" }}>
                    <th style={{ paddingLeft: "100px", paddingRight: "100px", color: "white" }}>Name</th>
                    <th style={{ paddingLeft: "200px", paddingRight: "200px", color: "white" }}>Country</th>
                    <th style={{ paddingLeft: "200px", paddingRight: "200px", color: "white" }}>Type</th>
                </tr>
                {data.map((item) => (
                    <tr key={item.id} onClick={(e) => open()}>
                        <td style={{ paddingLeft: "100px" }}>{item.name}</td>
                        <td style={{ paddingLeft: "200px" }}>{item.country}</td>
                        <td style={{ paddingLeft: "200px" }}>{item.type}</td>
                    </tr>
                ))}

            </tbody>
        </table>
        <Popup data={open(Users)}/>
        </div>
    )
}

export default Table
