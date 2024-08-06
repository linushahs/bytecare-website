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
        name?: string;
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
};
