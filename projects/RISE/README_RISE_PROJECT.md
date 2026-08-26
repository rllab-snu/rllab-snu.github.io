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
