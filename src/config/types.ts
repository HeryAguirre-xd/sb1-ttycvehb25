export interface GalleryItem {
  url: string;
  description: string;
  type: 'image' | 'video';
  poster?: string;
}