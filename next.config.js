/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/our-work',
        destination: '/gallery',
        permanent: true,
      },
      {
        source: '/products/surface-model-swimming-pool-light-hf00-hf05',
        destination: '/products/surface-model-swimming-pool-light-al00-al015',
        permanent: true,
      },
      {
        source: '/products/abs-body-swimming-pool-light-hf06-hf010',
        destination: '/products/abs-body-swimming-pool-light-al016-al029a',
        permanent: true,
      },
      {
        source: '/products/ultra-slim-15mm-abs-swimming-pool-light-hf012',
        destination: '/products/abs-body-swimming-pool-light-al016-al029a',
        permanent: true,
      },
      {
        source: '/products/custom-color-rim-abs-swimming-pool-light-hf018',
        destination: '/products/abs-body-swimming-pool-light-al016-al029a',
        permanent: true,
      },
      {
        source: '/products/heavy-duty-11-inch-abs-swimming-pool-light-hf011-hf013',
        destination: '/products/abs-body-swimming-pool-light-al016-al029a',
        permanent: true,
      },
      {
        source: '/products/full-ss-body-swimming-pool-light-hf020-hf021',
        destination: '/products/ss-body-swimming-pool-light-al030-al031',
        permanent: true,
      },
      {
        source: '/products/ss-blue-white-rim-swimming-pool-light-hf022',
        destination: '/products/ss-body-swimming-pool-light-al030-al031',
        permanent: true,
      },
      {
        source: '/products/concealed-in-ground-swimming-pool-light-hf023-hf027',
        destination: '/products/concealed-swimming-pool-light-al032-al036',
        permanent: true,
      },
      {
        source: '/products/ss-spot-fountain-light-hf039-hf042',
        destination: '/products/full-ss-spot-fountain-light-al037-al040',
        permanent: true,
      },
      {
        source: '/products/spot-fountain-stand-light-hf043-hf047',
        destination: '/products/ss-spot-fountain-light-al041-al052',
        permanent: true,
      },
      {
        source: '/products/nozzle-fountain-light-center-hole-hf052-hf057',
        destination: '/products/nozzle-fountain-light-al053-al057',
        permanent: true,
      },
      {
        source: '/products/adjustable-center-hole-nozzle-fountain-light-hf058-hf061',
        destination: '/products/adjustable-nozzle-fountain-light-al058-al061',
        permanent: true,
      },
      {
        source: '/products/led-architectural-wall-washer-light-hf062',
        destination: '/products/led-wall-washer-light-al062',
        permanent: true,
      },
      {
        source: '/products/umbrella-bell-nozzle-hf063',
        destination: '/products/umbrella-bell-nozzle-al063',
        permanent: true,
      },
      {
        source: '/products/foam-jet-fountain-nozzle-hf064',
        destination: '/products/foam-nozzle-al064',
        permanent: true,
      },
      {
        source: '/products/finger-jet-multi-jet-fountain-nozzle-hf065',
        destination: '/products/finger-jet-nozzle-al065',
        permanent: true,
      },
      {
        source: '/products/revolving-rotational-fountain-nozzle-hf072',
        destination: '/products/revolving-nozzle-al071',
        permanent: true,
      },
      {
        source: '/products/ss-water-cascade-nozzle-hf076',
        destination: '/products/ss-water-cascade-blade-nozzle-al075',
        permanent: true,
      },
      {
        source: '/products/step-water-blade-nozzle-hf077',
        destination: '/products/ss-step-water-blade-nozzle-al076',
        permanent: true,
      },
      {
        source: '/products/stainless-steel-cobra-waterfall-nozzle-hf078',
        destination: '/products/cobra-nozzle-al078',
        permanent: true,
      },
      {
        source: '/products/acrylic-cobra-nozzle-illuminated-hf080',
        destination: '/products/acrylic-cobra-nozzle-al080',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
