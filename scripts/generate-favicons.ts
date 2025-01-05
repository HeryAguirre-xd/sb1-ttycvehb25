import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function generateFavicons(inputPath: string) {
  const sizes = [16, 32, 180, 192, 512];
  
  for (const size of sizes) {
    const outputName = size === 180 
      ? 'apple-touch-icon.png'
      : size === 192 
        ? 'android-chrome-192x192.png'
        : size === 512
          ? 'android-chrome-512x512.png'
          : `favicon-${size}x${size}.png`;

    await sharp(inputPath)
      .resize(size, size)
      .toFile(`public/${outputName}`);
  }

  // Generate social media preview
  await sharp(inputPath)
    .resize(1200, 630, { fit: 'contain', background: '#ffffff' })
    .toFile('public/images/logo-social.jpg');
}

// Execute the function
const logoPath = resolve(__dirname, '../src/assets/logo.png');
generateFavicons(logoPath)
  .then(() => console.log('Favicons generated successfully'))
  .catch(console.error);