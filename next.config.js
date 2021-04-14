/* eslint-disable no-undef */
/* eslint-disable-next-line @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa');
const isProd = process.env.NODE_ENV === 'production';

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  },
  images: {
    domains: [
      'instagram.fsod8-1.fna.fbcdn.net',
      'via.placeholder.com',
      'scontent-sea1-1.cdninstagram.com',
      'scontent-iad3-2.cdninstagram.com'
    ]
  }
});
