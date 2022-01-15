import ProfileContext from "./profileContext";
import { useState } from 'react'
const ProfileState = (props) => {
    const s1 = {
        "name": "Sid",
        "class": "A"
    }
    const [state, setstate] = useState(s1)
    const update = () => {
        setTimeout(() => {
            setstate({
                "name": "Paoli",
                "class": "5B"
            })
        }, 1000)
    }
    return (
        <ProfileContext.Provider value={{ state, update }}>
            {props.children}
        </ProfileContext.Provider>

    )
}

export default ProfileState;