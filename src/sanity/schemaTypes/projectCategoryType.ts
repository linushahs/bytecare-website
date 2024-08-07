import { defineField, defineType } from 'sanity'

export const projectCategoryType = defineType({
    name: 'projectCategory',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
        }),
        defineField({
            name: 'description',
            type: 'text',
        }),
    ],
})
