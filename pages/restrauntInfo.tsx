import React from 'react'
import Router from 'next/router'

const RestrauntInfo = () => {
    const restrauntName = (Router.query.restrauntName)
    return (
        <div>
            <div className="flex justify-center my-9 items-center text-2xl font-sans font-medium">
                お店は「{restrauntName}」に決定しました！
            </div>
        </div>
    )
}

export default RestrauntInfo
