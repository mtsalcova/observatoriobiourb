import Instagram from 'instagram-web-api';

export const getPhotosByHashtagInstagram = (quantity: number) => {
  let edges;

  if (process.env.NODE_ENV === 'production') {
    console.log('caiu aqui');
    edges = getPhotosFromInstagram(quantity);
  } else {
    edges = getPhotosFromMock();
  }

  return {
    posts: edges
  };
};

async function getPhotosFromInstagram(quantity: number) {
  const client = new Instagram({
    username: 'fotos.obs',
    password: 'senhafotos11'
  });

  await client.login();

  const response = await client.getPhotosByHashtag({
    hashtag: 'observatoriobiourb',
    first: quantity
  });

  const { hashtag } = response;
  const { edge_hashtag_to_media } = hashtag;
  const { edges } = edge_hashtag_to_media;

  return edges;
}

function getPhotosFromMock() {
  return [
    {
      node: {
        thumbnail_resources: [
          0,
          1,
          {
            src: 'https://via.placeholder.com/240x240'
          }
        ],
        display_url: 'https://via.placeholder.com/240x240'
      }
    }
  ];
}
