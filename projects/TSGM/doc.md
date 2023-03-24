---
layout: default
title: Topological Semantic Graph Memory for Image-Goal Navigation
nav_order: 2212
parent: Home
---
# Topological Semantic Graph Memory for Image-Goal Navigation
{: .fw-700 }
Nuri Kim, Obin Kwon, Hwiyeon Yoo, Yunho Choi, Jeongho Park, Songhwai Oh

CoRL 2022 accepted
{: .text-green-100 }

[Paper](https://arxiv.org/pdf/2209.08274.pdf){: .btn  .btn-purple}
[Video](https://youtu.be/dAnsRLJxGOI){: .btn .btn-blue}
[Code](https://github.com/rllab-snu/TopologicalSemanticGraphMemory){: .btn .btn-green}

### Abstract
A novel framework is proposed to incrementally collect landmark-based graph memory and use the collected memory for image goal navigation. 
Given a target image to search, an embodied robot utilizes semantic memory to find the target in an unknown environment.
In this paper, we present a topological semantic grph memory (TSGM), which consists of 
(1) a graph builder that takes the observed RGB-D image to construct a topological semantic graph, 
(2) a cross graph mixer module that takes the collected nodes to get contextual information, and 
(3) a memory decoder that takes the contextual memory as an input to find an action to the target.
On the task of an image goal navigation, TSGM significantly outperforms competitive baselines by +5.0-9.0% on the success rate and +7.0-23.5% on SPL, which means that the TSGM finds efficient paths. 
Additionally, we demonstrate our method on a mobile robot in real-world image goal scenarios.