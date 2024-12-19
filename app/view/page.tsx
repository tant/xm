'use client'
import { useSearchParams } from 'next/navigation'

export default function Viewuser() {
  const searchParams = useSearchParams()
  const username = searchParams.get('username')
 
  let content = ''

  if (!username) {
    content = 'Error: Username not provided'
  } else {
    content = username
  }

  return (
    <div>
      {content}
    </div>
  )
  
}
