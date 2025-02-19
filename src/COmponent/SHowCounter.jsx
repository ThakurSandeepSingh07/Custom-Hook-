import React, { useEffect, useState } from 'react'
import { useCounter } from '../Custom/UseCustom'
import { use_fetch } from '../Custom/Fetch'

export default function SHowCounter() {
  const { count, increment, decrement } = useCounter(15)


  const { data } = use_fetch('https://jsonplaceholder.typicode.com/users')

let id = 1;
  return (
    <div>
      <button onClick={() => increment()}>increment</button>
      <h1>Count : {count}</h1>
      <button onClick={() => decrement()}>decrement</button>
      <ul>

        {data.length > 0 ? data.map((ele) => <p key={id++}> {ele.name}</p>) : <p>Loading...</p>}

      </ul>
    </div>
  )
}
