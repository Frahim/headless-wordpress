import React from 'react'
//import myPages from '../../Libary/pagebySlug';

export  default async function mypage() {
    const res = await fetch(`https://gblheadlesswp.uiexpertz.com/wp-json/wp/v2/pages?slug=about-us`);
    if (!res.ok) {
      throw new Error('Failed to load API');
    }
    const data = res.json();
    console.log(data)
    return(
        <div>
            <h2>About{data.id}</h2>
        </div>
    )

}
