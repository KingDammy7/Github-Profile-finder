import React from 'react'

const Alerts = ({ alert }) => {
  return (
    alert !== null && (
      <div
        class="p-2 justify-center bg-indigo-500 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
        role="alert"
      >
        <span class="font-semibold mr-2 text-left flex-auto">{alert.msg}</span>
        <svg
          class="fill-current opacity-75 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
        </svg>
      </div>
    )
  )
}

export default Alerts