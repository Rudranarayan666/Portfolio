# Public Frames Directory (`/public/frames/`)

This directory is configured to host pre-rendered frame sequences for the spaceship scroll journey.

## Naming Convention
Name your WebP (or PNG) frame sequence files sequentially:
- `frame_0001.webp`
- `frame_0002.webp`
- ...
- `frame_0900.webp`

## Dynamic Fallback Engine
If WebP frames are not present or are still being fetched, the portfolio's **built-in procedural space engine** (`src/utils/spaceCanvasGenerator.js`) automatically renders ultra-smooth 60fps space flight animations (volumetric nebulas, warp starfield, 3D planet approach, asteroid field, and sci-fi command grid).
