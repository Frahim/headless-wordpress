import Image from "next/image";
import reader2 from '@/app/image/reader2.png';
import reader3 from '@/app/image/reader3.png';
import smallStar from '@/app/image/smallStar.png';
import Eye from '@/app/image/Eye.svg';
import { BasicModal } from '@/components/sherModel';
import Link from "next/link";

import Latestpost from '@/components/Homesection/sectiona'

interface Uri {
    toString(): string
    // Other properties if needed
  }

async function getPost(uri:Uri) {
    const query = `
  query GetPostByUri($uri: ID!) {
    post(id: $uri, idType: URI) {
      title
      content
      slug
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
      `;

    const variables = {
        uri,
    };
    const graphqlEndpoint = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;
    if (!graphqlEndpoint) {
        throw new Error("GraphQL endpoint is not defined in the environment variables.");
      }
    const res = await fetch(graphqlEndpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },

        next: {
            revalidate: 60,
        },
        body: JSON.stringify({ query, variables }),
    });

    const responseBody = await res.json();

    if (responseBody && responseBody.data && responseBody.data.post) {
        return responseBody.data.post;
    } else {
        throw new Error("Failed to fetch the post");
    }
}

interface Props {
    params: {
      postId: string;
      uri: number; // Adjust the type according to your actual parameter
    };
    searchParams: Record<string, string> | null | undefined;
    // Add other properties if needed
  }


export default async function PostDetails({ params, searchParams }: Props ,) {
    const showModal = searchParams?.modal;

    const post = await getPost(params.uri);


    return (

        <>
            <div className="event-details-banner">
                <div className="container">
                    <div className="event-details align-items-center py-3">
                        <div className="event-details-left ">
                            <div className="d-flex gap-2">
                                <div className="event-yellow bg-pale-goldenrod d-flex align-items-center justify-content-center">
                                    <p className="mb-0 ls-1 text-dark1 px-1 fw-semiBold ff-inter fs-12">Event</p>
                                </div>
                                <div className="event-gray bg-gray-2 d-flex align-items-center justify-content-center">
                                    <p className=" text-dark2 fw-semiBold px-1 fs-12 mb-0 ff-inter ls-1">Identity and Language</p>
                                </div>
                            </div>
                            <div className="event-heading">
                                <h2 className="fs-48 lh-58 text-dark1 mb-4">
                                    {post.title}
                                </h2>
                            </div>
                            <div className="event-information">
                                <div className="d-flex align-items-center gap-2">
                                    <div className=" d-flex align-items-center gap-2">
                                        <div className="d-flex align-items-center gap-1">
                                            <p className="mb-0 text-dark2 fs-14 fw-medium ff-inter">Organiser:</p>
                                            <a href="" className="text-dark1 fs-14 fw-medium ff-inter text-decoration-underline">Satoshi Nakamoto</a>
                                        </div>
                                        <div className="follow-btn d-flex align-items-center justify-content-center">
                                            <p className=" ff-inter text-clr-egyptian-green  p-1 bg-egyptian-green-light mb-0 ls-1">Follow</p>
                                        </div>
                                        <div className="line"></div>
                                    </div>
                                    <div className="view d-flex align-items-center gap-2">
                                        <Image src={Eye} className="img-fluid" alt="eye" />
                                        <p className=" text-dark2 fs-14 fw-medium ff-inter mb-0">3.4K</p>
                                    </div>
                                    <div className="line"></div>
                                    <div className="review d-flex align-items-center gap-2">
                                        <Image src={smallStar} className="img-fluid" alt="star" />
                                        <p className=" text-dark2 fs-14 fw-medium ff-inter mb-0">4.8/5 (230 reviews)</p>
                                    </div>
                                    <div className="line"></div>
                                    <div className="review d-flex align-items-center gap-3">
                                        <div className="card__content-body-users">
                                            <div className="image">
                                                <Image src={reader3} width={15} height={15} className="Image-fluid" alt="reader" />
                                                <Image src={reader2} width={15} height={15} className="Image-fluid" alt="reader" />
                                                <Image src={reader3} width={15} height={15} className="Image-fluid" alt="reader" />
                                                <Image src={reader3} width={15} height={15} className="Image-fluid" alt="reader" />
                                                <Image src={reader2} width={15} height={15} className="Image-fluid" alt="reader" />

                                            </div>
                                        </div>

                                        <p className=" text-dark2 fs-14 fw-medium ff-inter mb-0">480 Followers</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="event-details-right ms-auto ">
                            <div>

                                <Link
                                    href={`/post/${post.slug}/?modal=true`}
                                    className="single-border-btn ls-1 fs-12 text-uppercase d-flex align-items-center fw-semiBold ff-inter justify-content-center mb-3"
                                >
                                    Share this Post
                                </Link>

                                {showModal && <BasicModal />}
                            </div>
                        </div>
                    </div>

                    <div className="blog-details-wrapper mt-5 d-flex align-items-center gap-3">
                        <div className="blog-details-img">
                            <Image src={post.featuredImage.node.sourceUrl} width={480} height={350} className="img-fluid" alt="blog-details" />
                        </div>
                        <div className="blog-details-img">
                            <Image src={post.featuredImage.node.sourceUrl} width={480} height={350} className="img-fluid" alt="blog-details" />
                        </div>
                        <div className="blog-details-img">
                            <Image src={post.featuredImage.node.sourceUrl} width={480} height={350} className="img-fluid" alt="blog-details" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="blog-details-main bg-gray3 py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 ff-inter">
                            <div className="blog-content-wrapper">
                                <div className="inner-wrapper border-bottom d-flex gap-4 py-4">
                                    <div className="blog-details-title w-25">
                                        <h3 className="fs-4 fw-bold text-dark1">About this Post</h3>
                                    </div>
                                    <div className="blog-details-pra w-75">
                                        <div className="contentstyle" dangerouslySetInnerHTML={{__html: post.content }}/>
                                    </div>
                                </div>
                            </div>

                        </div>
                        
                    </div>
                </div>
            </div>
            <Latestpost/>

        </>


    );
}