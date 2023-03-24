---
layout: default
title: Visual Graph Memory with Unsupervised Representation for Visual Navigation
nav_order: 2108
parent: Home
---
# Visual Graph Memory with Unsupervised Representation for Visual Navigation 
{: .fw-700 }
Obin Kwon, Nuri Kim\*, Yunho Choi\*, Hwiyeon Yoo\*, Jeongho Park\*, Songhwai Oh

*Equal contribution
{: .fs-2 }

ICCV 2021 accepted
{: .text-green-100 }

[Paper](http://rllab.snu.ac.kr/publications/papers/2021_iccv_vgm.pdf){: .btn  .btn-purple}
[Video](https://www.youtube.com/watch?v=Uksb_kR80Hk){: .btn .btn-blue}
[Code](https://github.com/rllab-snu/Visual-Graph-Memory){: .btn .btn-green}

### Abstract
We present a novel graph-structured memory for visual navigation, called visual graph memory (VGM), which consists of unsupervised image representations obtained from navigation history. The proposed VGM is constructed incrementally based on the similarities among the unsupervised representations of observed images, and these representations are learned from an unlabeled image dataset. We also propose a navigation framework that can utilize the proposed VGM to tackle visual navigation problems. By incorporating a graph convolutional network and the attention mechanism, the proposed agent refers to the VGM to navigate the environment while simultaneously building the VGM. Using the VGM, the agent can embed its navigation history and other useful task-related information. We validate our approach on the visual navigation tasks using the Habitat simulator with the Gibson dataset, which provides a photo-realistic simulation environment. The extensive experimental results show that the proposed navigation agent with VGM surpasses the state-of-the-art approaches on image-goal navigation tasks.
