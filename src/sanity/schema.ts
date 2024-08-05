import { type SchemaTypeDefinition } from 'sanity'

import { blockContentType } from './schemaTypes/blockContentType'
import { categoryType } from './schemaTypes/categoryType'
import { postType } from './schemaTypes/postType'
import { authorType } from './schemaTypes/authorType'
import { projectType } from './schemaTypes/projectType'
import { teamMemberType } from './schemaTypes/teamMemberType'
import { careerType } from './schemaTypes/careerType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, authorType, projectType, teamMemberType, careerType],
}
