import React from 'react'

function Header() {
    return (
        <header className="bg-dark text-white">
            <div className="container py-3">
                <div className="row">
                    <div className="col-12 col-md-3 text-center text-md-left logo">
                        <h2 className="mb-0">JM</h2>
                    </div>
                    <div className="col-12 col-md-9 title text-center text-md-right">
                        <h2 className="mb-0">COVID-19 Info: React Example Code</h2>
                    </div>
                </div>
            </div>
        </header>
    )
} 

export default Header