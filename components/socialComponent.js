'use client';
import React from 'react'
import { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import social1 from '../app/image/social1.svg';
import social2 from '../app/image/social2.svg';
import social3 from '../app/image/social3.svg';
import social4 from '../app/image/social4.svg';


export default function socialComponent() {
    const [facebookUrl, setFacebookUrl] = useState('');
    const [twitterUrl, setTwitterUrl] = useState('');
    const [instaUrl, setInstaUrl] = useState('');
    const [linkUrl, setLinkUrl] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://gblheadlesswp.uiexpertz.com/wp-json/custom-fields/theme_options');
                const data = await response.json();
                // Extract the Facebook URL
                const facebookUrl = data['_crb_socialmedia|url|0|0|value'];
                setFacebookUrl(facebookUrl);
                // Extract the twitterUrl URL
                const twitterUrl = data['_crb_socialmedia|url|1|0|value'];
                setTwitterUrl(twitterUrl);
                // Extract the instaUrl URL
                const instaUrl = data['_crb_socialmedia|url|2|0|value'];
                setInstaUrl(instaUrl);
                // Extract the linkUrl URL
                const linkUrl = data['_crb_socialmedia|url|3|0|value'];
                setLinkUrl(linkUrl);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <div className='socialmodel'>
        <ul className="list-unstyled mb-0">
            <li className="mb-2"><span><Image src={social1} width={25} height={15} className="img-fluid pe-2" alt="social" /></span><Link href={facebookUrl}>{"Facebook"}  </Link> </li>
            <li className="mb-2"><span><Image src={social2} width={25} height={15} className="img-fluid pe-2" alt="social" /></span><Link href={twitterUrl}>{"Twitter"}  </Link> </li>
            <li className="mb-2"><span><Image src={social3} width={25} height={15} className="img-fluid pe-2" alt="social" /></span><Link href={instaUrl}>{"Instagram"}  </Link> </li>
            <li className="mb-2"><span><Image src={social4} width={25} height={15} className="img-fluid pe-2" alt="social" /></span><Link href={linkUrl}>{"LinkedIn"}  </Link> </li>
        </ul>
        </div>
    )
}
