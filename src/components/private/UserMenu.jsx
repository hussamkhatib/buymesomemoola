/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const navBarList = [
    {
        key:0,
        title: 'Dashboard',
    },
    {
        key : 1,
        title: 'Support'
    }
]

function UserMenu() {
    const router = useRouter()
    return (
        <ul>
            {
                navBarList.map((item) => (
                    <li key={item.key} className={`p-2 font-semibold ${router.pathname.slice(1) === item.title.toLowerCase() ? 'bg-neutral-focus rounded' : ''}`}>
                        <Link href={`/${item.title.toLowerCase()}`}>
                            <a>
                            {item.title}
                            </a>
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}

export default UserMenu

