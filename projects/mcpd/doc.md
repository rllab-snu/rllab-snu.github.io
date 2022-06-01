---
layout: default
title: Unsupervised 3D Link Segmentation of Articulated Objects with a Mixture of Coherent Point Drift
parent: Home
---
# Unsupervised 3D Link Segmentation of Articulated Objects with a Mixture of Coherent Point Drift
{: .fw-700 }
Jaegoo Choy, Geonho Cha, Songhwai Oh

RAL 2022 accepted
{: .text-green-100 }

[Paper](http://rllab.snu.ac.kr/publications/papers/2021_iccv_vgm.pdf){: .btn  .btn-purple}
[Video](https://www.youtube.com/watch?v=Uksb_kR80Hk){: .btn .btn-blue}
[Code](https://github.com/rllab-snu/Visual-Graph-Memory){: .btn .btn-green}

### Abstract
We are motivated by the fact that a point set of an object can be aligned to point sets with different configurations by applying rigid transformations to links. Since existing 3D part segmentation datasets do not provide motion-based annotations, we propose a novel dataset of articulated objects, which are annotated based on its kinematic models. We define the point set alignment process as a probability density estimation problem and find the optimal decomposition of the point set and deformations using the EM algorithm. In addition, to improve the segmentation performance, we propose a regularization loss designed with a physical prior of decomposition. We evaluate the proposed method on our dataset, demonstrating that the proposed method achieves the state-of-the-art performance compared to baseline methods. Finally, we also propose an effective target manipulating point proposer, which can be applied to collect multiple point sets from an unknown object with different configurations to better solve the 3D link segmentation problem.

