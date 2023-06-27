import React from 'react'

const ErrorPage = (props) => {
    return (
        <div className='d-flex flex-column max-mh-100 text-center align-items-center justify-content-center' style={{ height: '50vh', fontSize: '30px', lineHeight: '250px' }}>
            <span className='text-danger opacity-25' style={{ fontSize: "200px", fontWeight: "bold" }}>404</span>
            <span className='h6' style={{ color: props.mode === 'light' ? "black" : "white", fontSize: "20px" }}>page not found!!</span>
        </div >
    )
}

export default ErrorPage