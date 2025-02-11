'use client';
import React, { useState, useEffect } from 'react';
import { MdOutlinePhoneInTalk, MdOutlineLocationOn } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";

export default function Contact() {
    const [phone, setPhone] = useState('Loading...');
    const [email, setEmail] = useState('Loading...');
    const [location, setLocation] = useState('Loading...');
    const [facebookUrl, setFacebookUrl] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(event) {
        event.preventDefault();
        setLoading(true); // Start loading
        const formData = new FormData(event.target);
    
        formData.append("access_key", "947f44a3-ac8e-47a9-96bf-16810a5e9f0a");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            });
    
            // Check for valid response
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            const result = await response.json();
    
            // Check success status
            if (result && result.success) {
                setMessage("Form submitted successfully!");
            } else {
                setMessage("Form submission failed. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setMessage("Form submission failed. Please try again.");
        } finally {
            setLoading(false); // End loading
        }
    }
    
    useEffect(() => {
        async function fetchThemeData() {
            try {
                const res = await fetch('https://gblheadlesswp.enamahamed.site/wp-json/custom-fields/theme_options');
                if (!res.ok) {
                    throw new Error(`Failed to load API: ${res.status} ${res.statusText}`);
                }
                const data = await res.json();
    
                // Safely access properties
                setPhone(data?._crb_phone_number || 'Not available');
                setEmail(data?._crb_email || 'Not available');
                setLocation(data?._crb_address || 'Not available');
                setFacebookUrl(data?.['_crb_socialmedia|url|0|0|value'] || '');
            } catch (error) {
                console.error('Error fetching theme options:', error);
                setPhone('Error loading phone');
                setEmail('Error loading email');
                setLocation('Error loading location');
                setFacebookUrl('');
            }
        }
    
        fetchThemeData();
    }, []);
    

    return (
        <div className="container sectionPadding">
            <div className="justify-content-center row">
                <div className="col-lg-12 col-12">
                    <div className="commonTitle mb-5">
                        <h2 className="m-0 py-4 text-center fs-36 fw-medium text-dark1">Contact Us</h2>
                    </div>
                    <div className="itemwrap">
                        <div className="item1 itemcomon">
                            <div className="coont-wrwp">
                                <div className="social">
                                    <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
                                        {facebookUrl || 'Facebook'}
                                    </a>
                                </div>
                                <div className="iconwrap"><MdOutlinePhoneInTalk /></div>
                                <div className="right-part">
                                    <strong>Phone:</strong>
                                    <div className="cta-item">
                                        <a href={`tel:${phone}`}>{phone}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item2 itemcomon">
                            <div className="coont-wrwp">
                                <div className="iconwrap"><TfiEmail /></div>
                                <div className="right-part">
                                    <strong>Email:</strong>
                                    <div className="cta-item">
                                        <a href={`mailto:${email}`}>{email}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item3 itemcomon">
                            <div className="coont-wrwp">
                                <div className="iconwrap"><MdOutlineLocationOn /></div>
                                <div className="right-part">
                                    <strong>Location:</strong>
                                    <div className="cta-item">{location}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 col-12">
                    <div className="commonTitle mb-5">
                        <h2 className="m-0 py-4 text-center fs-36 fw-medium text-dark1">Or fill the form below</h2>
                    </div>
                    <div id="message">{message}</div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-left">
                            <input type="text" name="name" placeholder="Your Name" required />
                            <input type="email" name="email" placeholder="Your Email" required />
                            <input type="text" name="phone" placeholder="Your Phone" required />
                        </div>
                        <div className="form-right">
                            <textarea rows="4" name="message" placeholder="Your Message"></textarea>
                            <button type="submit" disabled={loading}>{loading ? 'Submitting...' : 'Submit'}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
