import React from 'react'
import Card from './Card'
function Cards() {
    return (
        <div className='w-full'>
            <div className='max-w-screen-xl mx-auto py-20 gap-2 flex'>
                <Card width={'basis-2/2'} start={false} para={true} />
                <Card width={'basis-2/3'} start={true} para={false} hover={'true'}/>
            </div>
        </div>
    )
}

export default Cards