export const postGroq = () => {
    return `*[_type == 'post']{
        author -> {name},
        _id,
        title,
        _createdAt,
        _updatedAt,
        slug,
        mainImage{
            asset -> {url}
        }
    }`;
};

export const postSlugGroq = (slug: string | string[]) => {
    return `*[slug.current == "${slug}"]{
          title,
          slug,
          mainImage{
            asset->{url}
          },
          author -> {
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