import React, { Children } from 'react'

export default function ClimateAnalysisLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <div>
      {children}
    </div>
  )
}
