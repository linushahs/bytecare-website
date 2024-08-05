import { defineField, defineType } from "sanity";

export const careerType = defineType({
    name: "projetType",
    title: "Career",
    type: "document",
    fields: [
        defineField({
            name: "title",
            type: "string"
        }),
        defineField({
            name: "jobType",
            type: "string",
        }),
        defineField({
            name: "location",
            type: "string",
            options: {
                list: [
                    { title: "On-site", value: "on-site" },
                    { title: "Off-site", value: "off-site" },
                    { title: "Hybrid", value: "hybrid" }
                ]
            }
        }),
        defineField({
            name: "description",
            type: "blockContent",
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