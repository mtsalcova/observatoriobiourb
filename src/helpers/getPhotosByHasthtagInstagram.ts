import Instagram from 'instagram-web-api';

export const getPhotosByHashtagInstagram = async (quantity: number) => {
  // let edges;

  // edges = await getPhotosFromInstagram(quantity);
  // if (process.env.NODE_ENV === 'production') {
  // } else {
  const edges = getPhotosFromMock();
  // }

  return {
    posts: edges
  };
};

async function getPhotosFromInstagram(quantity: number) {
  const client = new Instagram({
    username: 'fotos.obs',
    password: 'cuniculariaathene321'
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
  const dataMock = [];

  for (let i = 1; i <= 12; i++) {
    dataMock.push({
      node: {
        thumbnail_resources: [
          0,
          1,
          {
            src: `/images/fotos/foto${i}.jpeg`
          }
        ]
      }
    });
  }

  return dataMock;
}
