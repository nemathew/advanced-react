import React from 'react'

const ErrorExample = () => {
  let title = 'random title'

  const handleClick = () => {
    title = 'hello people'
    console.log(title)
  }

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type='type' className='btn' onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  )
}

export default ErrorExample
