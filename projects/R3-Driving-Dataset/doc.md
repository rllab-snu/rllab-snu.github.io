---
layout: default
title: "Towards Defensive Autonomous Driving: Collecting and Probing Driving Demonstrations of Mixed Qualities"
parent: Home
---
# Towards Defensive Autonomous Driving: Collecting and Probing Driving Demonstrations of Mixed Qualities
{: .fw-700 }
Jeongwoo Oh<sup>1</sup>\*, Gunmin Lee<sup>1</sup>\*, Jeongeun Park<sup>2</sup>, Wooseok Oh<sup>1</sup>, Jaeseok Heo<sup>1</sup>, Hojun Chung<sup>3</sup>, Do Hyung Kim<sup>4</sup>, Byungkyu Park<sup>4</sup>, Chang-Gun Lee<sup>4</sup>, Sungjoon Choi<sup>2</sup>, Songhwai Oh<sup>1</sup>

RLLAB, Seoul National Univ.<sup>1</sup>, RiLAB, Korea Univ. <sup>2</sup>, Department of Mechnical Engineering, Seoul National Univ. <sup>3</sup>, RUBIS, Seoul National Univ. <sup>4</sup>

*Equal contribution
{: .fs-2 }

<figure class="video_container">
  <iframe src="https://www.youtube.com/watch?v=Uksb_kR80Hk" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

[Paper](http://rllab.snu.ac.kr){: .btn  .btn-purple}
[Video](https://www.youtube.com/watch?v=Uksb_kR80Hk){: .btn .btn-blue}
[Dataset (only feature)](https://github.com/rllab-snu/Visual-Graph-Memory){: .btn .btn-green}
[Dataset (all)](https://github.com/rllab-snu/Visual-Graph-Memory){: .btn .btn-green}

### Abstract
Designing or learning an autonomous driving policy is undoubtedly a challenging task as the policy has to maintain its safety in all corner cases. In order to secure safety in autonomous driving, the ability to detect hazardous situations, which can be seen as an out-of-distribution (OOD) detection problem, becomes crucial. However, most conventional datasets only provide expert driving demonstrations, although some non-expert or uncommon driving behavior data are needed to implement a safety guaranteed autonomous driving platform. To this end, we present a novel dataset called the R3 Driving Dataset, as the three groups participated in this paper starts with R (RLLAB, RILAB, RUBIS),  composed of driving data with different qualities. The dataset categorizes abnormal driving behaviors into eight categories and 369 different detailed situations. The situations include dangerous lane changes and near-collision situations. To further enlighten how these abnormal driving behaviors can be detected, we utilize different uncertainty estimation and anomaly detection methods to the proposed dataset. From the results of the proposed experiment, it can be inferred that by using both uncertainty estimation and anomaly detection, all of the abnormal cases in the proposed dataset can be discriminated. %The results of the experiment show that the proposed abnormal dataset can be discriminated via various algorithms. The dataset of this paper can be downloaded at https://rllab-snu.github.io/projects/R3-Driving-Dataset/doc.html.
