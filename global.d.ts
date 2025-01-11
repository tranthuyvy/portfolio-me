export {};

import videojs from 'video.js';

declare global {
  interface Window {
    videojs: typeof videojs;
  }
}
