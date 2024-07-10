'use client';
import React, { useState, useEffect } from 'react';
import { MdOutlinePhoneInTalk, MdOutlineLocationOn } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";


export default function Contact() {
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');
    const [facebookUrl, setFacebookUrl] = useState('');



    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "947f44a3-ac8e-47a9-96bf-16810a5e9f0a");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        if (result.success) {
            // Update message element with success message
            document.getElementById("message").innerText = "Form submitted successfully!";
        } else {
            // Handle errors if submission was not successful
            document.getElementById("message").innerText = "Form submission failed. Please try again.";
        }
    }

    useEffect(() => {
        async function fetchThemeData() {
            try {
                const res = await fetch('https://gblheadlesswp.uiexpertz.com/wp-json/custom-fields/theme_options');
                if (!res.ok) {
                    throw new Error('Failed to load API');
                }
                const data = await res.json();
                // Assuming data is an object with keys corresponding to option names
                setPhone(data._crb_phone_number);  // Replace 'phone_option' with the actual key name
                setEmail(data._crb_email);  // Replace 'email_option' with the actual key name
                setLocation(data._crb_address);
                const facebookUrl = data['_crb_socialmedia|url|0|0|value'];
                setFacebookUrl(facebookUrl);
            } catch (error) {
                console.error('Error fetching theme options:', error);
            }
        }
        fetchThemeData();
    }, []);

    return (
        <>
            <div className="container sectionPadding">
                <div className="justify-content-center row">
                    <div className="col-lg-12 col-12">
                        <div className="commonTitle mb-5">
                            <h2 className="m-0 py-4 text-center fs-36 fw-medium text-dark1">Contact Us</h2>
                        </div>
                        <div className="itemwrap">
                            <div className="item1 itemcomon ">
                                <div className="coont-wrwp">
                                    <div className='social'>{facebookUrl}</div>
                                    <div className="iconwrap"><MdOutlinePhoneInTalk /></div>
                                    <div className="right-part">
                                        <strong>Phone:</strong>
                                        <div className="cta-item">
                                            <a href={`tel:${phone}`}> {phone || 'Loading...'}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item2 itemcomon ">
                                <div className="coont-wrwp">
                                    <div className="iconwrap"><TfiEmail /></div>
                                    <div className="right-part">
                                        <strong>Email:</strong>
                                        <div className="cta-item">
                                            <a href={`mailto:${email}`}>  {email || 'Loading...'}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item3 itemcomon ">
                                <div className="coont-wrwp">
                                    <div className="iconwrap"><MdOutlineLocationOn /></div>
                                    <div className="right-part">
                                        <strong>Location:</strong>
                                        <div className="cta-item">
                                            {location || 'Loading...'}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-12">
                        <div className="commonTitle mb-5">
                            <h2 className="m-0 py-4 text-center fs-36 fw-medium text-dark1">Or fill the form below</h2>
                        </div>
                        <div id="message"></div>
                        <form onSubmit={handleSubmit}>
                            <div className="form-left">
                                <input type="text" name="name" placeholder="Your Name" required />
                                <input type="email" name="email" placeholder="Your Email" required />
                                <input type="text" name="phone" placeholder="Your Phone" required />
                            </div>
                            <div className="form-right">
                                <textarea rows="4" name="message" placeholder="Your Message"></textarea>
                                <button type="submit">Submit</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </>
    );
}
