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
  return `*[_type == "post" && slug.current == "${slug}"]{
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
          },
          "relatedBlogs": *[_type == "post" && slug.current != "${slug}" && count(categories[@._ref in ^.^.    categories[]._ref]) > 0]{
             title,
              slug,
              mainImage{
                asset->{url}
              },
              _createdAt,
              categories[]->{title},
              summary
          }
      }`;
};

export const categoryGroq = () => {
  return `
  *[_type == 'category']{
    _id,
    title
  }`;
}