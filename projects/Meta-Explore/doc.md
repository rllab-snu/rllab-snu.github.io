---
layout: default
title: Meta-Explore:Exploratory Hierarchical Vision-and-Language Navigation Using Scene Object Spectrum Grounding
parent: Home
---
# Meta-Explore: Exploratory Hierarchical Vision-and-Language Navigation Using Scene Object Spectrum Grounding
{: .fw-700 }
*Minyoung Hwang*<sup>1</sup>, *Jaeyeon Jeong*<sup>1</sup>, *Minsoo Kim*<sup>3</sup>, *Yoonseon Oh*<sup>2</sup>\*, *Songhwai Oh*<sup>1</sup>\*

<sup>1</sup>Electrical and Computer Engineering and ASRI, Seoul National University, <sup>2</sup>Department of Electronic Engineering, Hanyang University, <sup>3</sup>Interdisciplinary Major in Artificial Intelligence, Seoul National University

*Corresponding authors
{: .fs-2 }

CVPR 2023 accepted
{: .text-green-100 }

[Paper](){: .btn  .btn-purple}
[Video](){: .btn .btn-blue}
[Code](){: .btn .btn-green}

### Abstract
The main challenge in vision-and-language navigation (VLN) is how to understand natural-language instructions in an unseen environment. The main limitation of conventional VLN algorithms is that if an action is mistaken, the agent fails to follow the instructions or explores unnecessary regions, leading the agent to an irrecoverable path. To tackle this problem, we propose Meta-Explore, a hierarchical navigation method deploying an exploitation policy to correct misled recent actions. We show that an exploitation policy, which moves the agent toward a well-chosen local goal among unvisited but observable states, outperforms a method which moves the agent to a previously visited state. We also highlight the demand for imagining regretful explorations with semantically meaningful clues. The key to our approach is understanding the object placements around the agent in spectral-domain. Specifically, we present a novel visual representation, called scene object spectrum (SOS), which performs category-wise 2D Fourier transform of detected objects. Combining exploitation policy and SOS features, the agent can correct its path by choosing a promising local goal. We evaluate our method in three VLN benchmarks: R2R, SOON, and REVERIE. Meta-Explore outperforms other baselines and shows significant generalization performance. In addition, local goal search using the proposed spectral-domain SOS features significantly improves the success rate by 17.1% and SPL by 20.6% for the SOON benchmark.