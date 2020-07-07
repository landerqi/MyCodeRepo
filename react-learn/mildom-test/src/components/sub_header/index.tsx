import React, { useState, useEffect } from 'react'

const SubHeader = () => {
    const [name, setName] = useState('sub-header')

    const subHeaderStyle = {
        fontSize: '12px'
    }

    useEffect(() => {

    })

    return (
        <div className="sub-header" onClick={() => setName('aaa')} style={subHeaderStyle}>
            {name}
        </div>
    )
}

export default SubHeader