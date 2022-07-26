import { createMediaHandler } from 'next-tinacms-cloudinary/dist/handlers';
import { isAuthorized } from '@tinacms/auth';

export default createMediaHandler({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
  authorized: async (req) => {
    try {
      if (process.env.NEXT_PUBLIC_USE_LOCAL_CLIENT) {
        return true;
      }

      const user = await isAuthorized(req);

      return (user && user.verified) || false;
    } catch (error) {
      console.error(error);
      return false;
    }
  },
});

export { mediaHandlerConfig as config } from 'next-tinacms-cloudinary/dist/handlers';
