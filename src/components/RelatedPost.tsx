import React from 'react'
import { CardDescription } from './ui/card'
import Link from 'next/link'

type Props = {}

const RelatedPost = (props: Props) => {
  return (
    
            <Link href={'#'} color="blue" className="text-blue-600">
              <CardDescription color="blue"className="text-blue-600 hover:underline">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sapiente veritatis at impedit perferendis dignissimos vel totam corrupti, minima quaerat dolores corporis. Natus, perspiciatis?</CardDescription>
            </Link>
         
  )
}

export default RelatedPost