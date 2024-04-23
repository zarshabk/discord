'use client'
import {Circles} from 'react-loader-spinner'
export default function loading(){
    return ( 
        <div className="h-[90vh] w-full flex justify-center items-center">
            <Circles
    height="80"
    width="80"
    color="green"
    ariaLabel="circles-loading"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
    />
        </div>
    )
}
