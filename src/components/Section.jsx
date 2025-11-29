import React from 'react'

const Section = ({ title, children }) => {
  return (
    <section className="w-full">
      {title && (
        <h2 className="mb-8 font-bold text-gray-900 border-l-4 border-primary-500 pl-4">
          {title}
        </h2>
      )}
      {children}
    </section>
  )
}

export default Section