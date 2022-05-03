
export const getGifs = async(category) => {
      
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=DOF36ev4DbGWdwViuX0eZ6Mrvw2nMl59`;

    const req = await fetch(url);
    const { data } = await req.json();
    const gifs = data.map(({id, title, images:{downsized:{url}}}) => ({
      id: id,
      title: title,
      url: url
    }));

    return gifs;

  }