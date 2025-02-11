// pages/categories.js

import React from 'react';
import Link from 'next/link';


async function getCats() {
  const query = `
        query GetCategoryEdges {
            categories {
                edges {
                    node {
                        id
                        name
                        uri
                        categoryId
                        slug
                    }
                }
            }
        }
    `;

    const graphqlEndpoint = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;

    const res = await fetch(graphqlEndpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: query,
        }),
    });

    const { data } = await res.json();

    return data.categories.edges;
}


export default async function PostDetails() {
  const catdata = await getCats();
  return (
    <section className="heppeningNext sectionPadding">
      <div className="container">
        <div className="commonTitle">
          <h2 className="m-0 py-4 text-center fs-36 fw-medium text-dark1">Our Categories</h2>
        </div>
        <div className="happeningNextWrapper mt-5">
          <div className="row">
            {catdata.map((item) => (
              <div key={item.node.id} className="col-xl-6 my-5 catwraper">
                <Link href={`/category/${item.node.slug}`} className="card border-0 text-decoration-none">               
                  <div className="card-body">
                    <h5 className="card-title fs-24 fw-medium lh-34 mt-3">  {item.node.name}</h5>
                    <div
                      className="ff-inter readMore d-flex align-items-center justify-content-start text-dark3 text-decoration-none py-1 fs-12 fw-semiBold">View Details
                      <span className="ps-1">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M12.7295 7.14551L7.19531 2.34229C7.15283 2.30566 7.09863 2.28516 7.0415 2.28516H5.74512C5.63672 2.28516 5.58691 2.41992 5.66895 2.49023L10.7988 6.94336H2.22656C2.16211 6.94336 2.10938 6.99609 2.10938 7.06055V7.93945C2.10938 8.00391 2.16211 8.05664 2.22656 8.05664H10.7974L5.66748 12.5098C5.58545 12.5815 5.63525 12.7148 5.74365 12.7148H7.08398C7.11182 12.7148 7.13965 12.7046 7.16016 12.6855L12.7295 7.85449C12.7802 7.8104 12.8209 7.75593 12.8487 7.69478C12.8766 7.63362 12.891 7.5672 12.891 7.5C12.891 7.4328 12.8766 7.36638 12.8487 7.30522C12.8209 7.24407 12.7802 7.1896 12.7295 7.14551Z"
                            fill="#0A8270" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}