import Link from 'next/link'
import React from 'react'

export default function Layout({children}) {
  return (
    <div>

        {children}
        <div className='flex gap-10'>
        <Link href="/admin/dashboard">Dashboard</Link>
        <Link href="/admin/products">products</Link>
        <Link href="/admin/analytics">analytics</Link>
        <Link href="/admin/orders">orders</Link>
        <Link href="/admin/customers">customers</Link>
        <Link href="/admin/vendors">vendors</Link>
        <Link href="/admin/campaigns">campaigns</Link>

    

        </div>
    </div>
    
  )
}
