'use client'

import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function page() {
    const [posts, setPosts] = useState<any[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts`)
            setPosts(data.data)
        }
    
        fetchData()
    }, [])

    return (
        <div className='flex flex-col w-screen h-screen items-center justify-center'>
            <h1 className='mb-3 text-lg'>Holy Ugly Blog</h1>
            
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <span>{post.id} - </span>
                        <span>{post.title}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
