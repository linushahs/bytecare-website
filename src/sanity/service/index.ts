import { blogPostGroq, blogPostSlugGroq } from "../groq"
import { Blog, Category } from "../groq/interface"
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

export async function fetchBlogCategories(): Promise<Category[]> {
    const response = await sanityClient.fetch<Category[]>(
        `*[_type == "category"]{_id, title}`
    );

    return response;
}

export async function filterBlogPosts(categoryId: string): Promise<Blog[]> {
    const response = await sanityClient.fetch<Blog[]>(
        `*[_type == "blog" && references(*[_type == "category" && _id == $categoryId]._id)]`,
        { categoryId },
        { cache: "no-store" }
    );

    return response;
}