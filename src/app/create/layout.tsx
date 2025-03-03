import React, { Children } from 'react'

export default function CreateLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <div>
      {children}
    </div>
  )
}
