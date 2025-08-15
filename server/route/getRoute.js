import express from 'express';
import ImageKit from 'imagekit';

const router = express.Router();

router.get('/imagekit-auth', (req, res) => {
  const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_ENDPOINT,
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
