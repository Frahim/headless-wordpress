import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import social1 from '@/app/image/social1.svg'
import social2 from '@/app/image/social2.svg'
import social3 from '@/app/image/social3.svg'
import social4 from '@/app/image/social4.svg'


export default function footer() {
    return (
        <div className="footer bg-dark pt-5">
            <div className="footer-top">
                <div className="container py-5">

                    <div className="row footer-grid">
                        <div className="col-6 col-xl-3 col-md-3 grid-item">
                            <div className="footer-widget mb-4 wow fadeInDown">
                                <h6 className="text-white mb-4 fs-24 fw-semiBold">{"Global Life"}</h6>
                                <ul className="list-unstyled mb-0">
                                    <li className="mb-2"><Link href="#">{"About"}</Link> </li>
                                    <li className="mb-2"><Link href="#">{"career"}</Link> </li>
                                    <li className="mb-2"><Link href="#">{"Contact"}</Link> </li>
                                    <li className="mb-2"><Link href="#">{"Terms & Conditions"}</Link> </li>
                                    <li className="mb-2"><Link href="#">{"Privacy Policy"}</Link> </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-6 col-xl-3 col-md-4 grid-item">
                            <div className="footer-widget mb-4 wow fadeInDown">
                                <h6 className="text-white mb-4 fs-24 fw-semiBold">{"Explore"}</h6>
                                <ul className="list-unstyled mb-0">
                                    <li className="mb-2"><Link href="#">{"What's happening?"}</Link> </li>
                                    <li className="mb-2"><Link href="#">{"Recommendations"}</Link> </li>
                                    <li className="mb-2"><Link href="#">{"Trading Post"}</Link> </li>
                                    <li className="mb-2"><Link href="#">{"Challenges"}</Link> </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-6 col-xl-3 col-md-4 grid-item">
                            <div className="footer-widget mb-4 wow fadeInDown">
                                <h6 className="text-white mb-4 fs-24 fw-semiBold">{"Stay Connected"}</h6>
                                <ul className="list-unstyled mb-0">
                                    <li className="mb-2"><span><Image src={social1} width={25} height={15} className="img-fluid pe-2" alt="social" /></span><Link href="#">{"Facebook"}  </Link> </li>
                                    <li className="mb-2"><span><Image src={social2} width={25} height={15}  className="img-fluid pe-2" alt="social" /></span><Link href="#">{"Twitter"}  </Link> </li>
                                    <li className="mb-2"><span><Image src={social3} width={25} height={15} className="img-fluid pe-2" alt="social" /></span><Link href="#">{"Instagram"}  </Link> </li>
                                    <li className="mb-2"><span><Image src={social4} width={25} height={15}  className="img-fluid pe-2" alt="social" /></span><Link href="#">{"LinkedIn"}  </Link> </li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-6 col-xl-3 col-md-4 grid-item">
                            <div className="footer-widget mb-4 wow fadeInDown">
                                <h6 className="text-white mb-5 fs-24 fw-semiBold">{"Newsletter Signup"}</h6>
                                <ul className="list-unstyled mb-0 NewsletterWrapper">
                                    <li className="mb-1">
                                        <input type="email" placeholder="Email" className="emailControl ff-inter text-white" />
                                    </li>
                                </ul>
                                <button type="subscribe" className="subscribe d-flex align-items-center justify-content-center mt-4 ls-1 text-white fs-12 fw-semiBold ff-inter text-uppercase border-0">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom py-4">
                <div className="container">
                    <p className="mb-0 ff-14 fw-medium text-dark4 text-center  mb-4 mb-xl-0 text-center ff-inter w-100 d-flex justify-content-center">
                        <small>{"© 2022 Global Life. All rights reserved."}</small>
                    </p>
                </div>
            </div>
        </div>

    )
}
