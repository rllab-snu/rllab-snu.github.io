# RISE Project Page

## Where to put it

Copy the entire `RISE` folder into your website repository:

```text
project/
└── RISE/
    ├── index.html
    └── static/
        ├── css/
        ├── images/
        └── pdf/
```

The page uses the repository's existing Jekyll layout through:

```yaml
---
layout: default
title: "RISE: Responsibility-Induced Specialized Experts for Humanoid Loco-Manipulation"
parent: Home
nav_order: 2610
---
```

## Visible section order

1. Video
2. Abstract
3. Method Overview
4. RISE
5. Simulation Experiments
6. Real-World Experiments
7. BibTeX

## Author / affiliation display

The header uses numbered affiliations:

- `1` NVIDIA Corporation, Seoul, Korea
- `2` Robot Learning Lab (RLLAB), Seoul National University
- `3` Seoul National University (Hyewoo Jung)
- `* Equal contribution`

## Deploy

From the root of the website repository:

```bash
git add project/RISE
git commit -m "Add RISE project page"
git push
```

After GitHub Pages finishes deploying, the project page should be available under the `project/RISE/` path of the site.

## Adding experiment videos later

Create:

```text
project/RISE/static/videos/
```

Then add your MP4 files there and uncomment/edit the example `<video>` blocks already included in `index.html`.


## Final method figures

- `static/images/overview_final.png` — Method Overview
- `static/images/method_final.png` — RISE


## Visual consistency update

This revision matches the LF-Former page more closely:
- all author names use the same font weight;
- `IROS 2026` is shown as simple colored venue text rather than a pill badge;
- Method Overview / RISE figures have the exact same content width as their paragraphs.


## Experiment videos

The supplied comparison videos are embedded as follows:

- `static/videos/sim_comparison.mp4` — one full-width Simulation comparison video.
- `static/videos/real_comparison_1.mp4` — first Real-World comparison.
- `static/videos/real_comparison_2.mp4` — second Real-World comparison.

The two real-world videos are stacked vertically.

For the webpage, the supplied source videos were re-encoded to:
- H.264 MP4
- 1280×720
- 30 fps
- no audio
- fast-start enabled

The HTML uses `autoplay muted loop playsinline`.
