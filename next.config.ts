import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Consolidate legacy routes that do not exist under the same path on the
      // canonical site. Keep these before the catch-all redirect.
      {
        source: "/alergiya-beyeladim",
        destination: "https://ihaveallergy.com/אלרגיה-בילדים-מדריך-מלא",
        statusCode: 301,
      },
      {
        source: "/atopic-dermatitis",
        destination: "https://ihaveallergy.com/blog/אטופיק-דרמטיטיס-תינוקות",
        statusCode: 301,
      },
      {
        source: "/immunotherapy",
        destination: "https://ihaveallergy.com/desensitization",
        statusCode: 301,
      },
      {
        source: "/anaphylaxis",
        destination: "https://ihaveallergy.com/guides/אלרגיה-מדריך-מקיף#emergency",
        statusCode: 301,
      },
      {
        source: "/alergia-lebotnim",
        destination: "https://ihaveallergy.com/services",
        statusCode: 301,
      },
      {
        source: "/alergia-lechalav",
        destination: "https://ihaveallergy.com/services",
        statusCode: 301,
      },
      {
        source: "/alergia-lemazon",
        destination: "https://ihaveallergy.com/services",
        statusCode: 301,
      },
      {
        source: "/alergia-lesumsum",
        destination: "https://ihaveallergy.com/services",
        statusCode: 301,
      },
      {
        source: "/areas/:path*",
        destination: "https://ihaveallergy.com/contact",
        statusCode: 301,
      },
      // Every route shared by both sites keeps its path and query string.
      {
        source: "/:path*",
        destination: "https://ihaveallergy.com/:path*",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
