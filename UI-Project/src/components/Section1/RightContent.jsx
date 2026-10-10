import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {

    return (
        <div className="h-full w-2/3 p-6 bg-gray-200 relative flex flex-col flex-wrap overflow-x-auto gap-6 ">
             {props.users.map(function(elem,idx){

          return <RightCard key={idx} color={elem.color} id={idx} img={elem.img} tag={elem.tag} />
        })}
        </div>
    )
}

export default RightContent