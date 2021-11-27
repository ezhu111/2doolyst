import {useState, useEffect} from 'react'
import {onAuthStateChanged} from 'firebase/auth'

import {auth} from 'libs/firebase'

function useAuth (props) {
    const [user, setUser] = useState(null)

    useEffect(()=>{
        
        onAuthStateChanged(auth, (clientCredential)=>{
            if (clientCredential) {
                setUser(clientCredential)
            } else {
                setUser(null)
            }
        })
    })

    return user
}

export {useAuth}