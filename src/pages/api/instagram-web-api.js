import nc from 'next-connect';

const handler = nc().get(async (req, res) => {
  const imageUrl = req.url.replace('/api/instagram-web-api?src=', '');
  req = new Request(imageUrl, {
    method: 'GET',
    headers: {
      Origin: new URL(imageUrl).origin
    }
  });

  let response = await fetch(req);
  response = new Response(response.body, response);

  const domain =
    // eslint-disable-next-line no-undef
    process.env.NODE_ENV === 'production'
      ? 'https://biodiversidadeurbana.com.br/'
      : 'http://localhost:3000/';

  response.headers.set('Cross-Origin-Resource-Policy', 'cross-origin');
  response.headers.set('Access-Control-Allow-Origin', domain);
  response.headers.append('Vary', 'Origin');
  return res.send(response.body);
});

export default handler;
