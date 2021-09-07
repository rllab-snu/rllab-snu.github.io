---
layout: default
title: "Towards Defensive Autonomous Driving: Collecting and Probing Driving Demonstrations of Mixed Qualities"
parent: Home
---
# Towards Defensive Autonomous Driving: Collecting and Probing Driving Demonstrations of Mixed Qualities
{: .fw-700 }
Jeongwoo Oh\1*, Gunmin Lee\1*, Jeongeun Park\2, Wooseok Oh\1, Jaeseok Heo\1, Hojun Chung\3, Do Hyung Kim\4, Byungkyu Park\4, Chang-Gun Lee\4, Sungjoon Choi\2, Songhwai Oh\1

*Equal contribution
{: .fs-2 }



[Paper](http://rllab.snu.ac.kr){: .btn  .btn-purple}
[Video](https://www.youtube.com/watch?v=Uksb_kR80Hk){: .btn .btn-blue}
[Dataset (only feature)](https://github.com/rllab-snu/Visual-Graph-Memory){: .btn .btn-green}
[Dataset (all)](https://github.com/rllab-snu/Visual-Graph-Memory){: .btn .btn-green}

### Abstract
Designing or learning an autonomous driving policy is undoubtedly a challenging task as the policy has to maintain its safety in all corner cases. In order to secure safety in autonomous driving, the ability to detect hazardous situations, which can be seen as an out-of-distribution (OOD) detection problem, becomes crucial. However, most conventional datasets only provide expert driving demonstrations, although some non-expert or uncommon driving behavior data are needed to implement a safety guaranteed autonomous driving platform. To this end, we present a novel dataset called the \textit{R3 Driving Dataset}, as the three groups participated in this paper starts with R (RLLAB, RILAB, RUBIS),  composed of driving data with different qualities. The dataset categorizes abnormal driving behaviors into eight categories and 369 different detailed situations. The situations include dangerous lane changes and near-collision situations. To further enlighten how these abnormal driving behaviors can be detected, we utilize different uncertainty estimation and anomaly detection methods to the proposed dataset. From the results of the proposed experiment, it can be inferred that by using both uncertainty estimation and anomaly detection, all of the abnormal cases in the proposed dataset can be discriminated. %The results of the experiment show that the proposed abnormal dataset can be discriminated via various algorithms. The dataset of this paper can be downloaded at https://rllab-snu.github.io/projects/R3-Driving-Dataset/doc.html.
