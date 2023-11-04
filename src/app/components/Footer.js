import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black px-10">
      <div className="bg-white dark:bg-black text-black dark:text-white py-4 border-t-2  border-black dark:border-white">
        <div className="container mx-auto text-center font-medium">
          <p>&copy; {new Date().getFullYear()} Web Portfolio {"("}MIZU216{")"}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer