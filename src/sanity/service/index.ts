import { blogPostGroq, blogPostSlugGroq } from "../groq"
import { Blog, Category, Project } from "../groq/interface"
import { sanityClient } from "../lib/client"

const BASE_URL = 'https://94zkm4p5.api.sanity.io/v2024-08-05/data/mutate/production'

export async function saveContactInfo() {
    const data = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `mutation {
                createContactInfo(data: {
                    name: "John Doe",
                    email: "    
                    message: "Hello, I would like to know more about your services."
                }) {
                    _id
                }
            }`
        })
    })

    return data.json()
}

export async function fetchBlogPost(slug: string): Promise<Blog> {
    const response = await sanityClient.fetch<Blog[]>(blogPostSlugGroq(slug), {}, { cache: "no-store" })

    return response[0];
}

export async function fetchBlogPosts(): Promise<Blog[]> {
    return await sanityClient.fetch<Blog[]>(blogPostGroq(), {}, { cache: "no-store" });
}


export async function filterBlogPosts(categoryId: string): Promise<Blog[]> {
    const response = await sanityClient.fetch<Blog[]>(
        `*[_type == "post" && references(*[_type == "blogCategory" && _id == $categoryId]._id)]{
            author[] -> {name},
            _id,
            title,
            _createdAt,
            _updatedAt,
            slug,
            mainImage{
                asset -> {url}
            },
            categories[] -> {
                title
            },
            summary
        }`,
        { categoryId },
        { cache: "no-store" }
    );

    return response;
}

export async function filterProjects(categoryId: string): Promise<Project[]> {
    const response = await sanityClient.fetch<Project[]>(
        `*[_type == "project" && references(*[_type == "projectCategory" && _id == $categoryId]._id)]{
            _id,
            title,
            url,
            thumbnail{
                asset -> {url}
            },
            categories[] -> {
                title
            },
            description
        }`,
        { categoryId },
        { cache: "no-store" }
    );

    return response;
}