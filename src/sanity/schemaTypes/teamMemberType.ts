import { defineType } from "sanity";

export const teamMemberType = defineType({
    name: "teamMember",
    title: "Team Member",
    type: "document",
    fields: [
        {
            name: "name",
            type: "string"
        },
        {
            name: "role",
            type: "string"
        },
        {
            name: "description",
            type: "text"
        },
        {
            name: "avatar",
            type: "image",
            options: {
                hotspot: true
            },
        }
    ]
})