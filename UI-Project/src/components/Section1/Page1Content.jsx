import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'


const Page1Content = (props) => {
    console.log(props.users)
    return (
        <div className="flex gap-10 pb-16 pt-6 items-center h-[90vh] px-18">
            <LeftContent />
            <RightContent users={props.users} />
        </div>
    )
}

export default Page1Content
