import express from 'express';
import ImageKit from 'imagekit';
import { connectToDatabase } from '../connectTodb';

const router = express.Router();
const { IMAGEKIT_PUBLIC_KEY, IMAGEKIT_PRIVATE_KEY, IMAGEKIT_ENDPOINT } =
  process.env;

router.get('/imagekit-auth', (req, res) => {
  if (!IMAGEKIT_PUBLIC_KEY || !IMAGEKIT_PRIVATE_KEY || !IMAGEKIT_ENDPOINT) {
    throw new Error('Missing ImageKit environment variables');
  }

  const imagekit = new ImageKit({
    publicKey: IMAGEKIT_PUBLIC_KEY,
    privateKey: IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: IMAGEKIT_ENDPOINT,
  });

  try {
    const authParams = imagekit.getAuthenticationParameters();

    if (!authParams) {
      return res
        .status(500)
        .json({ error: 'Failed to get authentication parameters' });
    }

    return res.json(authParams);
  } catch (error) {
    console.error('ImageKit auth error:', error);
    return res.status(500).json({ error: 'Authentication failed' });
  }
});

export default router;
