---
layout: default
title: Topological Semantic Graph Memory for Image-Goal Navigation
nav_order: 2312
parent: Home
---
# Trust Region-Based Safe Distributional Reinforcement Learning for Multiple Constraints
{: .fw-700 }
Dohyeong Kim, Kyungjae Lee, Songhwai Oh

NeurIPS 2023
{: .text-green-100 }

[Paper](https://rllab.snu.ac.kr/publications/papers/2023_neurips_sdac.pdf){: .btn  .btn-purple}
[Video](https://youtu.be/_tnrHL98Rnw?si=JcWj7WoYGGMfNMIC){: .btn .btn-blue}
[Code](https://github.com/rllab-snu/Safe-Distributional-Actor-Critic){: .btn .btn-green}

### Abstract
In safety-critical robotic tasks, potential failures must be reduced, and multiple constraints must be met, such as avoiding collisions, limiting energy consumption, and maintaining balance. 
Thus, applying safe reinforcement learning (RL) in such robotic tasks requires to handle multiple constraints and use risk-averse constraints rather than risk-neutral constraints. 
To this end, we propose a trust region-based safe RL algorithm for multiple constraints called a *safe distributional actor-critic* (SDAC). 
Our main contributions are as follows: **1)** introducing a gradient integration method to manage infeasibility issues in multi-constrained problems, ensuring theoretical convergence, and **2)** developing a TD(λ) target distribution to estimate risk-averse constraints with low biases. 
We evaluate SDAC through extensive experiments involving multi- and single-constrained robotic tasks. 
While maintaining high scores, SDAC shows 1.93 times fewer steps to satisfy all constraints in multi-constrained tasks and 1.78 times fewer constraint violations in single-constrained tasks compared to safe RL baselines. 

### Video
<iframe width="560" height="315" src="https://www.youtube.com/embed/_tnrHL98Rnw?si=TcX802J8HSP_lzal" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Experimental Results
**Forward Command of Bipeds**
<p style="text-align:center"><img src="resources/Cassie-forward.gif"  alt="1" width = "40%"></p>

**Turn-Forward Command of Bipeds**
<p style="text-align:center"><img src="resources/Cassie-forward_rotation.gif"  alt="1" width = "40%"></p>

**Forward Command of Quadrupeds**
<p style="text-align:center"><img src="resources/Laikago-forward.gif"  alt="1" width = "40%"></p>

**Turn-Forward Command of Quadrupeds**
<p style="text-align:center"><img src="resources/Laikago-forward_rotation.gif"  alt="1" width = "40%"></p>

---
#### <span style="color:#34568B">Bibtex</span>
```
@inproceedings{
kim2023sdac,
title={Trust Region-Based Safe Distributional Reinforcement Learning for Multiple Constraints},
author={Dohyeong Kim and Kyungjae Lee and Songhwai Oh},
booktitle={Thirty-seventh Conference on Neural Information Processing Systems},
year={2023},
url={https://openreview.net/forum?id=q9WMXjUxxT}
}
```