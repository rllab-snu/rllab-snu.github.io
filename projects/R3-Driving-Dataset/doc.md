---
layout: default
title: "Towards Defensive Autonomous Driving: Collecting and Probing Driving Demonstrations of Mixed Qualities"
parent: Home
---
# Towards Defensive Autonomous Driving:  Collecting and Probing Driving Demonstrations of Mixed Qualities
{: .fw-700 }
*Jeongwoo Oh*<sup>1</sup>\*, *Gunmin Lee*<sup>1</sup>\*, *Jeongeun Park<sup>2</sup>, Wooseok Oh<sup>1</sup>, Jaeseok Heo<sup>1</sup>, Hojun Chung<sup>3</sup>, Do Hyung Kim<sup>4</sup>, Byungkyu Park<sup>4</sup>, Chang-Gun Lee<sup>4</sup>, Sungjoon Choi<sup>2</sup>, Songhwai Oh<sup>1</sup>*

RLLAB, Seoul National Univ.<sup>1</sup>, RiLAB, Korea Univ. <sup>2</sup>, Department of Mechnical Engineering, Seoul National Univ. <sup>3</sup>, RUBIS, Seoul National Univ. <sup>4</sup>

*Equal contribution
{: .fs-2 }

<figure class="video_container">
  <iframe width="1080" height="720" src="https://www.youtube.com/embed/BSajtGNlbnM" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

[Paper](https://arxiv.org/pdf/2109.07995.pdf){: .btn  .btn-purple}
[Video](https://www.youtube.com/watch?v=BSajtGNlbnM){: .btn .btn-blue}
[Dataset](https://github.com/rllab-snu/R3-Driving-Dataset){: .btn .btn-green}

### Abstract
Designing or learning an autonomous driving policy is undoubtedly a challenging task as the policy has to maintain its safety in all corner cases. In order to secure safety in autonomous driving, the ability to detect hazardous situations, which can be seen as an out-of-distribution (OOD) detection problem, becomes crucial. However, most conventional datasets only provide expert driving demonstrations, although some non-expert or uncommon driving behavior data are needed to implement a safety guaranteed autonomous driving platform. To this end, we present a novel dataset called the R3 Driving Dataset, composed of driving data with different qualities. The dataset categorizes abnormal driving behaviors into eight categories and 369 different detailed situations. The situations include dangerous lane changes and near-collision situations. To further enlighten how these abnormal driving behaviors can be detected, we utilize different uncertainty estimation and anomaly detection methods to the proposed dataset. From the results of the proposed experiment, it can be inferred that by using both uncertainty estimation and anomaly detection, most of the abnormal cases in the proposed dataset can be discriminated. The dataset of this paper can be downloaded from https://rllab-snu.github.io/projects/R3-Driving-Dataset/doc.html.
