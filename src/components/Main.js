import React from 'react'
import { useState, useEffect } from "react"
import { db } from "../Pages/firebae-config"
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore"
// import { async } from "@firebase/util";
import Cards from './Cards';


function Mainprop() {
    const [Viewers, SetViewer] = useState([])
    const ViewersCollection = collection(db, "Viewers")

    const deleteReserv = async (id) => {
        const userDoc = doc(db, "Viewers", id)
        await deleteDoc(userDoc);
        window.location.reload()
    }

    useEffect(() => {
        const GetUsers = async () => {
            const data = await getDocs(ViewersCollection)
            SetViewer(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        GetUsers()
    }, [])

    return (
        <div className='main'>
            <Cards items={Viewers} />
        </div>

    )
}
export default Mainprop