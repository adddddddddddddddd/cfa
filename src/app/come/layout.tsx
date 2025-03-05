import React, { Children } from 'react'

export default function ComeLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <div>
      {children}
    </div>
  )
}
