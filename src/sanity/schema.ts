import { type SchemaTypeDefinition } from 'sanity'

import { authorType } from './schemaTypes/authorType'
import { blockContentType } from './schemaTypes/blockContentType'
import { blogCategoryType } from './schemaTypes/blogCategoryType'
import { careerType } from './schemaTypes/careerType'
import { postType } from './schemaTypes/postType'
import { projectCategoryType } from './schemaTypes/projectCategoryType'
import { projectType } from './schemaTypes/projectType'
import { teamMemberType } from './schemaTypes/teamMemberType'
import jobApplicationType from './schemaTypes/jobApplicationType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, blogCategoryType, projectCategoryType, postType, authorType, projectType, teamMemberType, careerType, jobApplicationType],
}
