import React from 'react';
import Image from 'next/image';
async function getPages(slug) {
    try {
        const query = `
          query GetPageBySlug($slug: String!) {
            pageBy(uri: $slug) {
              slug
              title
              content
              featuredImage {
      node {
        mediaItemUrl
      }
    }
            }
          }
        `;
        const variables = {
            slug,
        };

        const res = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                query,
                variables,
            }),
        });

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const { data } = await res.json();
        return data.pageBy; // Return the single page object, not an array
    } catch (error) {
        console.error("Error fetching page:", error);
        return null; // Return null or handle the error as needed
    }
}

function formatSlugAsTitle(slug) {
    // Example: convert "hello-world" to "Hello World"
    return slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

export default async function Page({ params }) {
    const slug = params.slug;
    const page = await getPages(slug);

    if (!page) {
        return <div>Loading...</div>;
    }
    if (!page.content) {
        return <div>No content available for this page.</div>;
    }

    return (
        <>
            <div className="container">
                <div className="commonTitle">
                    <h2 className="m-0 py-4 text-center fs-36 fw-medium text-dark1">{formatSlugAsTitle(slug)}</h2>
                </div>
            </div >
            <section className="heppeningNext mb-5">
                <div className="container">                    
                    <div className="happeningNextWrapper mt-5">
                        <div className="row justify-content-center">
                        <div className='col-xl-12 col-md-12 mb-5'>
                                <Image src={page.featuredImage.node.mediaItemUrl} width={450} height={450} className="card-Image-top Image-fluid" alt="card" />
                            </div>
                         
                            <div className="col-xl-8 col-md-12 ">
                                <div dangerouslySetInnerHTML={{ __html: page.content }} />
                            </div>
                          
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
