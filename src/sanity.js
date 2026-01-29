import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

// 1. A kapcsolat beállítása
export const client = createClient({
  projectId: 'mudp5l9m', // A te azonosítód
  dataset: 'production',
  apiVersion: '2024-01-01', // Mai dátum
  useCdn: false, // false = azonnal látod a frissítést szerkesztés után
});

// 2. Képkezelő (ez csinál a Sanity-s kódokból valódi .jpg linket)
const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}