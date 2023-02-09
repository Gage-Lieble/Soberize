import QuotesRender from "./quotes/QuotesRender"
import Calendar from "./Calendar/Calendar"
import UserContext from "../../context/user-context"
import React, {useContext} from "react"

const DashboardContent = () => {
    const user = useContext(UserContext)
    return (
        <>
        <QuotesRender />
        <Calendar />
        <a href="/api/logout/">Logout {user}</a>
        </>
    )
}

export default DashboardContent