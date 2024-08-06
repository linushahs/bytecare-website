export const projectGroq = () => {
  return `*[_type == 'project']{
        _id,  
        title,
        description,
        tags,
        url,
        thumbnail{
            asset -> {url}
        }
    }`;
}


export const blogPostGroq = () => {
  return `*[_type == 'post']{
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
    }`;
};

export const blogPostSlugGroq = (slug: string | string[]) => {
  return `*[slug.current == "${slug}"]{
          title,
          slug,
          mainImage{
            asset->{url}
          },
          author[] -> {
            name,
            image{
              asset->{url}
            }
          },
          _createdAt,
          _id,
          body,
          _updatedAt,
          categories[] ->{
            title
          }
      }`;
};