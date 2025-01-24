import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import { apiVersion, dataset, projectId } from '../env';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  token: process.env.SANITY_WRITE_TOKEN, // Add the write token here
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source);
