export type BlogBodyChildren = {
    marks: string[];
    text: string;
    _key: string;
};

export type BlogBody = {
    children: BlogBodyChildren[];
    style: "normal" | "h4";
    _key: string;
    _type: "block" | "span";
};

export type Blog = {
    author: {
        _type: string;
        _ref: string;
        name: string;
        image: { asset: { url: string } };
    }[];
    body: BlogBody[];
    slug: {
        current: string;
    };
    title: string;
    _createdAt: string;
    _updatedAt: string;
    _id: string;
    mainImage: {
        asset: { url: string };
    };
    summary: string;
    categories: {
        title: string;
    }[];
    relatedBlogs: Omit<Blog, "relatedBlogs" | "body">[];
};


export type Category = {
    _id: string;
    title: string;
}

export type Project = {
    _id: string;
    title: string;
    description: string;
    categories: Category[];
    url: string;
    thumbnail: {
        asset: { url: string };
    };
}

export type TeamMember = {
    _id: string;
    name: string;
    role: string;
    bio: string;
    avatar: {
        asset: { url: string };
    };
}

export type JobType = {
    _id: string;
    title: string;
    slug: { current: string };
    jobType: string;
    location: string;
    description: string;
    shortDescription: string;
    tags: string[];
}