import { v2 as cloudinary } from "cloudinary";

let configured = false;

function ensureConfigured() {
  if (!configured) {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME || '',
      api_key: process.env.CLOUDINARY_API_KEY || '',
      api_secret: process.env.CLOUDINARY_API_SECRET || '',
    });
    configured = true;
  }
}

// Wrap cloudinary with a proxy that ensures configuration before use
const cloudinaryProxy = new Proxy(cloudinary, {
  get(target, prop) {
    ensureConfigured();
    return target[prop as keyof typeof target];
  }
});

export default cloudinaryProxy;
