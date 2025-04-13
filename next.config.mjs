/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                // port: '',
                // pathname: '/**'
            },
            {
                protocol: 'https',
                hostname: 'utfs.io',
                // port: '',
                // pathname: '/**'
            },
            {
                protocol: 'https',
                hostname: 'qrc1tso8m5.ufs.sh',
                // port: '',
                // pathname: '/**'
            },
            // {
            //     protocol: 'https',
            //     hostname: 'images.unsplash.com',
            //     port: '',
            //     pathname: '/**'
            // }
        ]
    }
};

export default nextConfig;
