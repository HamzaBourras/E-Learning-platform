/* eslint-disable react/prop-types */

import { Divider } from "@nextui-org/react"

const WelcomeBanner = ({ children, user }) => {
    return (
        <div className="space-y-3">
            <div className="flex justify-between items-center rounded border p-3 ">
                <h1 className="h2 text-gray-600">Welcome back, <span className="font-normal"> {user} !</span></h1>
                <div>
                    {children}
                </div>
            </div>
            <Divider />
        </div>
    )
}
export default WelcomeBanner