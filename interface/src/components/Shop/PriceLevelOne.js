import axios from "axios"
import UserContext from "../../context/user-context"
import { useContext, useEffect, useState } from "react"

const PriceLevelOne = (props) => {
    const rewardTotal = 350

    // Auth
    const user = useContext(UserContext)
    const [csrfToken, setCsrfToken] = useState()
    useEffect(() => {
        axios.get('api/csrf').then(res => setCsrfToken(res.data.csrfToken))
    }, [])

    // Profile
    const [disabled, setDisabled] = useState(true)
    useEffect(() => {
        if (Number(user.coins) >= rewardTotal){
            setDisabled(false)
        }

    }, [setDisabled, user])
    const clickFunc =() => {
        axios.post('rewards/buyreward/', {
            user: user.user,
            price: rewardTotal,
            img: props.image
        },{
            headers: {'X-CSRFToken': csrfToken}
        }).then(res => console.log(res))
    }

    return (
        <>
        <img src={props.image} alt="present" />
        <h3>{props.name}</h3>
        <p>$350</p>
        <button onClick={clickFunc} disabled={disabled}>Buy</button>
        </>
    )
}

export default PriceLevelOne