/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_APIURL: "http://96.9.81.187:8080/api/v1",
    WORKSPACE_APIURL: "http://96.9.81.187:8080/api/v1/workspace",
    TASK_APIURL: "http://96.9.81.187:8080/api/v1/tasks/workspace",
    USER_APIURL: "http://96.9.81.187:8080/api/v1/user",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
    ],
  },
};

export default nextConfig;
