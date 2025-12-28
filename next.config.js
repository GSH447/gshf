/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'discovertemplate.com'
            }
          ],
    }
};

module.exports = nextConfig;
// module.exports = {
//     output: 'export',
// };
  


