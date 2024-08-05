import { defineField, defineType } from "sanity";

export const projectType = defineType({
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        defineField({
            name: "title",
            type: "string"
        }),
        defineField({
            name: "description",
            type: "string",
        }),
        defineField({
            name: "thumbnail",
            type: "image",
            options: {
                hotspot: true
            },
            fields: [{
                name: "alt",
                type: "string",
                title: "Alternative Text"
            }]
        }),
        defineField({
            name: "url",
            type: "url"
        }),
        defineField({
            name: "tags",
            type: "array",
            of: [{
                type: "string"
            }]
        }),
    ]
})