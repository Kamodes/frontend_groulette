/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import Router from 'next/router'
import { useAuthContext } from '../authContext'

const restaurantInfo = () => {
  const restaurantName = (Router.query.restaurantName)
  const { restaurantList } = useAuthContext()
  return (
    <div>
      <div className="flex justify-center my-9 items-center text-2xl font-sans font-medium">
        お店は「{restaurantName}」に決定しました！
      </div>
    </div>
  )
}

export default restaurantInfo
