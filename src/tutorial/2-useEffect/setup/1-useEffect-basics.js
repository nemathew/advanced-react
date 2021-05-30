import React, { useState, useEffect } from 'react'
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    console.log('call useEffect')
    if (value > 0) {
      document.title = `New Messages(${value})`
    }
  }, [value])

  // * Below only runs on first load due to not being dependent on any variable
  useEffect(() => {
    console.log('hello world')
  }, [])

  console.log('render component')

  return (
    <>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        Increase Value
      </button>
    </>
  )
}

export default UseEffectBasics
