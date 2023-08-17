module.exports = {
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: 'upgrade-insecure-requests'
          }
        ],

        source: '/administracion', // Cambia esto a tus rutas específicas
        headers: [
          {
            key: 'Content-Security-Policy',
            value: 'upgrade-insecure-requests'
          }
        ]
      }
    ]
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'g5bucket-c5.s3.us-east-2.amazonaws.com',
        port: '',
        pathname: '/**'
      }
    ]
  }
}
