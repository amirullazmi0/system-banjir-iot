import React from 'react'
import '../../../css/webgis.css';

const Navbar = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="navbar">
                    <div className="nav-item">
                        <img className='img-logo' src="/img/logo.png" alt="" />
                        <div className="nav-brand">
                            <h1>Sistem Pemantauan Banjir</h1 >
                            <p>Kota Putusibau Kab. Kapuas Hulu</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar