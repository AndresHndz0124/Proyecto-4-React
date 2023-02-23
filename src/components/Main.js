import React from 'react'
import { useState, useEffect } from "react"
import { db } from "../Pages/firebae-config"
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore"
// import { async } from "@firebase/util";
// import Cards from './Cards';


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
            {/* <Cards items={Viewers} renderItem={(item) =><span>{item.title}</span>}/> */}
            <p>Hola ja</p>
        </div>
    )
}
export default Mainprop


// import React from 'react'
// import { useState, useEffect } from "react"
// import { db } from "../Pages/firebae-config"
// import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore"
// import { async } from "@firebase/util";

// function Main() {

//     const [NewName, SetNewName] = useState("")
//     const [NewPhone, SetPhone] = useState(0)
//     const [NewEmail, SetEmail] = useState("")
//     const [NewSize, SetSize] = useState(0)

//     const [users, SetUsers] = useState([])
//     const UsersCollectioRef = collection(db, "Viewers")


//     // const createReserv = async () => {
//     //     await addDoc(UsersCollectioRef, { name: NewName, Phone: Number(NewPhone), email: NewEmail, size: Number(NewSize) })
//     // }

//     const UpdateReserv = async (id, size) => {
//         const userDoc = doc(db, "Viewers", id)
//         const newFields = { size: size + 2 }
//         await updateDoc(userDoc, newFields)
//     }

//     const deleteReserv = async (id) => {
//         const userDoc = doc(db, "Viewers", id)
//         await deleteDoc(userDoc);
//     }


//     useEffect(() => {
//         const GetUsers = async () => {
//             const data = await getDocs(UsersCollectioRef)
//             SetUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
//         }
//         GetUsers()
//     }, [])


//     // let Menu = {
//     //   "entradas": [
//     //     {
//     //       "nombre": "Sopa del día",
//     //       "precio": 6.00
//     //     },
//     //     {
//     //       "nombre": "Ensalada César",
//     //       "precio": 8.00
//     //     },
//     //     {
//     //       "nombre": "Alitas de pollo",
//     //       "precio": 10.00
//     //     },
//     //     {
//     //       "nombre": "Bruschetta",
//     //       "precio": 9.00
//     //     },
//     //     {
//     //       "nombre": "Calamares fritos",
//     //       "precio": 11.00
//     //     }
//     //   ],
//     //   "platosPrincipales": [
//     //     {
//     //       "nombre": "Lomo de cerdo",
//     //       "precio": 18.00
//     //     },
//     //     {
//     //       "nombre": "Pescado fresco",
//     //       "precio": 22.00
//     //     },
//     //     {
//     //       "nombre": "Pasta con salsa de tomate",
//     //       "precio": 16.00
//     //     },
//     //     {
//     //       "nombre": "Pollo al curry",
//     //       "precio": 19.00
//     //     },
//     //     {
//     //       "nombre": "Bisteck a la parrilla",
//     //       "precio": 24.00
//     //     }
//     //   ],
//     //   "postres": [
//     //     {
//     //       "nombre": "Pastel de zanahoria",
//     //       "precio": 7.00
//     //     },
//     //     {
//     //       "nombre": "Helado de vainilla",
//     //       "precio": 5.00
//     //     },
//     //     {
//     //       "nombre": "Cheesecake",
//     //       "precio": 8.00
//     //     },
//     //     {
//     //       "nombre": "Tiramisú",
//     //       "precio": 6.00
//     //     },
//     //     {
//     //       "nombre": "Brownie con helado",
//     //       "precio": 8.00
//     //     }
//     //   ]
//     // }

//     // const createDoc = async () => {
//     //   const snapshot = await addDoc(collection(db, "Menu"), Menu)
//     // }

//     return (

//         <div className='container main'>
//             {/* <input placeholder="Name" onChange={(event) => { SetNewName(event.target.value) }} />
//             <input type="tel" placeholder="Phone" onChange={(event) => { SetPhone(event.target.value) }} />
//             <input type="email" placeholder="Email" onChange={(event) => { SetEmail(event.target.value) }} />
//             <input type="number" placeholder="Numero de personas" onChange={(event) => { SetSize(event.target.value) }} />

//             <button onClick={createReserv}>Create Reserv</button> */}
//             {users.map((user) => {
//                 return (
//                     <div>
//                         <h1> Name: {user.name}</h1>
//                         <h1> Email: {user.email}</h1>
//                         <h1> Phone: {user.Phone}</h1>
//                         <h1> size: {user.size}</h1>
//                         <button onClick={() => { UpdateReserv(user.id, user.size) }}>Edit</button>
//                         <button onClick={() => { deleteReserv(user.id) }}>Delete</button>
//                     </div>
//                 )
//             })}
//             {/* <button onClick={createDoc}>Create</button> */}
//         </div>
//     )
// }
// export default Main;