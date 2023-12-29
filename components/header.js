"use client"
import React, { useState } from 'react';

import Link from 'next/link'
import Image from 'next/image'
import logo from '@/app/image/logo.svg'

export default function Header() {

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
    
    return (
        <>
        <div className="header py-2 bg-gray3">
            <div className="container">
                <div className="header-grid-container align-items-center gap-3">
                    <div className="grid-item d-xl-block">
                        <div className="globalSearch">                            
                        </div>
                    </div>
                    <div className="grid-item text-xl-center d-flex align-items-center gap-4">
                        <p className="mb-0 ff-inter text-dark3 fs-14 fw-medium">{"Propose a user to Join Global Life Community"}</p>
                        <Link href="/" className="ff-inter bg-green proposeBtn d-flex align-items-center justify-content-center text-white text-decoration-none px-2 py-1 fs-12">propose <span><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.2295 5.64551L5.69531 0.842285C5.65283 0.805664 5.59863 0.785156 5.5415 0.785156H4.24512C4.13672 0.785156 4.08691 0.919922 4.16895 0.990234L9.29883 5.44336H0.726562C0.662109 5.44336 0.609375 5.49609 0.609375 5.56055V6.43945C0.609375 6.50391 0.662109 6.55664 0.726562 6.55664H9.29736L4.16748 11.0098C4.08545 11.0815 4.13525 11.2148 4.24365 11.2148H5.58398C5.61182 11.2148 5.63965 11.2046 5.66016 11.1855L11.2295 6.35449C11.2802 6.3104 11.3209 6.25593 11.3487 6.19478C11.3766 6.13362 11.391 6.0672 11.391 6C11.391 5.9328 11.3766 5.86638 11.3487 5.80522C11.3209 5.74407 11.2802 5.6896 11.2295 5.64551Z"
                                fill="white" /> </svg></span></Link>
                    </div>
                    <div className="grid-item d-flex align-items-center justify-content-center justify-content-sm-end gap-3">
                        <Link href="/" className="fs-12 fw-semiBold text-dark1 ff-inter text-uppercase text-decoration-none">Login</Link>
                        <Link href="/" className="fs-12 fw-semiBold text-dark1 ff-inter text-uppercase text-decoration-none">Apply</Link>
                    </div>
                </div>
            </div>
        </div>

        <nav className="navigation py-3 py-md-4 bg-white">
            <div className="container">
                <div className="nav-grid-container d-flex d-md-block align-items-center justify-content-between gap-3">
                    <button
                        className="btn btn-menu-toggle btn-default d-flex d-md-none align-items-center justify-content-center" onClick={toggleMobileMenu}> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ff5f50" className="bi bi-list"
                            viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </button>
                    <Link href="/" className="brand-logo logo is-active-mobile d-md-none">
                        <Image src={logo}  alt="img" className="img-fluid" width={119} height={66}/>
                    </Link>
                    <div className={`navbar px-3 py-4 py-md-0 px-md-0 ${isMobileMenuOpen ? 'show' : ''}`}>
                        {/* <div className="navbar-header d-flex d-md-none align-items-center justify-content-between mb-4">
                            <Link href="/" className="brand-logo logo is-active-mobile d-md-none">
                                <Image src={logo} alt="img" className="img-fluid" width={119} height={66}/>
                            </Link>
                            <button
                                className="btn btn-menu-toggle btn-default d-flex d-md-none align-items-center justify-content-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ff5f50"
                                    className="bi bi-x" viewBox="0 0 16 16">
                                    <path
                                        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </button>
                        </div> */}
                        <ul id="menu" className="d-md-flex align-items-center justify-content-between m-0 p-0 gap-5 w-100">
                            <li><Link href="/category/whats-happening-next" className=" ff-inter navLink">What&apos;s happening?</Link></li>
                            <li>
                                <Link href="/category/latest-recommendations" className="menuLink ff-inter navLink">Recommendations</Link>
                            </li>
                            <li className="d-none d-md-block">
                                <Link href="/" className="logo">
                                    <Image src={logo} alt="img" className="img-fluid" width={119} height={66} />
                                </Link>
                            </li>
                            <li><Link href="/category/most-trading-post" className="menuLink ff-inter navLink">Trading Post</Link></li>
                            <li><Link href="/category/most-discussed-challenges" className="menuLink ff-inter navLink">Challenges</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        </>
    )
}
