---
permalink: /
title: "About me"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I am a Ph.D. candidate at [University of Maryland, College Park](https://umd.edu/), advised by [Prof. Alan (Zaoxing) Liu](https://zaoxing.github.io/). My research interests are broadly in systems and networking, with a focus on bridging the gap between approximate algorithms (e.g., sampling, sketches) and practical computing systems, aiming to enable low latency, high scalability, low operational costs, and trustworthiness of cloud telemetry systems. 

Prior to my PhD studies, I received my B.E. for Computer Science from Xi'an Jiaotong University in 2021.

News
======
[09/2025] [PromSketch](https://www.vldb.org/pvldb/vol18/p2348-zhu.pdf) will be presented at VLDB'25!  
[05/2025] I will be interning at Microsoft Strategic Planning and Architecture (SPARC) group this summer :)  
[04/2025] PromSketch was accepted by [VLDB'25](https://vldb.org/2025/)!  
[03/2025] A paper on Economic Denial of Service was accepted by [SIGMETRICS'25](https://www.sigmetrics.org/sigmetrics2025/)!  
[10/2024] NetMigrate was presented at [P4 Workshop](https://p4.org/p4_events/2023-p4-workshop-postevent/)!  
[12/2023] NetMigrate was accepted by [FAST'24](https://www.usenix.org/conference/fast24/technical-sessions)!  

Publications
======

**[HotNets'25] Towards Verifiable Network Telemetry without Special Purpose Hardware**  
Jaechan An, <u>Zeying Zhu</u>, Ian Miers, Zaoxing Liu  
[[Paper](https://dl.acm.org/doi/10.1145/3772356.3772392)]
<details class="publication-summary">
  <summary>Paper summary</summary>
  <p>Verifiable network telemetry is crucial for ensuring transparency and trust in network measurements. However, telemetry logs (e.g., NetFlow records) often contain sensitive data, making public verification challenging. Recent work has attempted to address this problem using Trusted Execution Environments (TEEs), such as Intel SGX, to provide confidentiality and integrity guarantees. However, TEEs are known to suffer from complex deployment requirements and limited scalability. In this paper, we introduce a software-based approach utilizing the latest advances in Zero-knowledge Proofs (ZKPs) to enable verifiable network telemetry without revealing the underlying sensitive logs or relying on special-purpose hardware. Our system employs a general-purpose ZKP virtual machine (RISC Zero) to generate cryptographic proofs over NetFlow data, enabling operators to securely attest to network flow metrics. Our preliminary results indicate that our ZKP-based design offers a viable path toward overcoming deployment and scalability limitations inherent in the solutions that require special-purpose hardware.</p>
</details>    

**[VLDB'25] Approximation-First Timeseries Query At Scale**  
<u>Zeying Zhu</u>, Jonathan Chamberlain, Kenny Wu, David Starobinski, Zaoxing Liu  
[[Paper](https://www.vldb.org/pvldb/vol18/p2348-zhu.pdf)] [[Code](https://github.com/Froot-NetSys/promsketch)] [[Slides](https://github.com/zzylol/zzylol.github.io/blob/master/files/PromSketch-Presentation-VLDB25.pdf)] [[Demo](https://www.youtube.com/watch?v=skoXfeZZj4I)] 
<details class="publication-summary">
  <summary>Paper summary</summary>
  <p>Timeseries monitoring systems such as Prometheus play a crucial role in gaining observability of the underlying system infrastructure. These systems collect timeseries metrics from various system components and perform monitoring queries over periodic windowbased aggregations (i.e., rule queries). However, despite wide adoption, the operational costs and query latency of rule queries remain high. In this paper, we identify major bottlenecks associated with repeated data scans and query computations concerning window overlaps in rule queries, and present PromSketch, an approximation-first query framework as intermediate caches for monitoring systems. It enables low operational costs and query latency, by combining approximate window-based query frameworks and sketch-based precomputation. PromSketch is implemented as a standalone module that can be integrated into Prometheus and VictoriaMetrics, covering 70% of Prometheus’ aggregation over time queries. Our evaluation shows that PromSketch achieves up to a two-orderof-magnitude reduction in query latency over Prometheus and VictoriaMetrics, while lowering operational dollar costs of query processing by three orders of magnitude compared to Prometheus and by at least 4x compared to VictoriaMetrics with at most 5% average errors across statistics.</p>
</details>  

**[SIGMETRICS'25] Exploiting Kubernetes Autoscaling for Economic Denial of Sustainability**  
Jonathan Chamberlain, Jilin Zheng, <u>Zeying Zhu</u>, Zaoxing Liu, David Starobinski  
[[Paper](https://dl.acm.org/doi/pdf/10.1145/3727114)]  
<details class="publication-summary">
  <summary>Paper summary</summary>
  <p>The flexibility and scale of networks achievable by modern cloud computer architectures, particularly Kubernetes (K8s)-based applications, are rivaled only by the resulting complexity required to operate at scale in a
responsive manner. This leaves applications vulnerable to Economic Denial of Sustainability (EDoS) attacks,
designed to force service withdrawal via draining the target of the financial means to support the application.
With the public cloud market projected to reach three quarters of a trillion dollars USD by the end of 2025,
this is a major consideration. In this paper, we develop a theoretical model to reason about EDoS attacks on
K8s. We determine scaling thresholds based on Markov Decision Processes (MDPs), incorporating costs of
operating K8s replicas, Service Level Agreement violations, and minimum service charges imposed by billing
structures. We build on top of the MDP model a Stackelberg game, determining the circumstances under
which an adversary injects traffic. The optimal policy returned by the MDP is generally of hysteresis-type,
but not always. Specifically, through numerical evaluations we show examples where charges on an hourly
resolution eliminate incentives for scaling down resources. Furthermore, through the use of experiments on
a realistic K8s cluster, we show that, depending on the billing model employed and the customer workload
characteristics, an EDoS attack can result in a 4× increase in traffic intensity resulting in a 3.6× decrease in
efficiency. Interestingly, increasing the intensity of an attack may render it less efficient per unit of attack
power. Finally, we demonstrate a proof-of-concept for a countermeasure involving custom scaling metrics
where autoscaling decisions are randomized. We demonstrate that per-minute utilization charges are reduced
compared to standard scaling, with negligible drops in requests.</p>
</details>  

**[FAST'24] In-Memory Key-Value Store Live Migration with NetMigrate**  
<u>Zeying Zhu</u>, Yibo Zhao, Zaoxing Liu  
<em><font color="green">[Artifacts Available]</font> <font color="red">[Artifacts Functional]</font> <font color="blue">[Artifacts Reusable]</font></em>  
[[Paper](https://www.usenix.org/system/files/fast24-zhu.pdf)] [[Code](https://github.com/Froot-NetSys/NetMigrate)] [[Slides](https://zzylol.github.io/files/NetMigrate_slides_zhu.pptx)] [[FAST'24 Talk](https://youtu.be/l1fZykAGdM0)] [[P4 Workshop Talk](https://www.youtube.com/watch?v=fNCHO472CTI)]  
<details class="publication-summary">
  <summary>Paper summary</summary>
  <p>Distributed key-value stores today require frequent key-value
shard migration between nodes to react to dynamic workload changes for load balancing, data locality, and service
elasticity. In this paper, we propose NetMigrate, a live migration approach for in-memory key-value stores based on
programmable network data planes. NetMigrate migrates
shards between nodes with zero service interruption and minimal performance impact. During migration, the switch data
plane monitors the migration process in a fine-grained manner and directs client queries to the right server in real time,
eliminating the overhead of pulling data between nodes. We
implement a NetMigrate prototype on a testbed consisting
of a programmable switch and several commodity servers
running Redis, and evaluate it under YCSB workloads. Our
experiments demonstrate that NetMigrate improves the query
throughput from 6.5% to 416% and maintains low access
latency during migration, compared to the state-of-the-art
migration approaches.</p>
</details>  


**[NSDI'23] Arya: Arbitrary Graph Pattern Mining with Decomposition-based Sampling**  
<u>Zeying Zhu</u>* , Kan Wu* , Zaoxing Liu    
[[Paper](https://zzylol.github.io/files/nsdi23-zhu.pdf)] [[Code](https://github.com/Froot-NetSys/Arya)] [[Slides](https://www.usenix.org/system/files/nsdi23_slides_zhu.pdf)] [[Talk](https://www.youtube.com/watch?v=NlXLuhnJZ9w)]  
<details class="publication-summary">
  <summary>Paper summary</summary>
  <p>Graph pattern mining is compute-intensive in processing massive amounts of graph-structured data. This paper
presents Arya, an ultra-fast approximate graph pattern miner
that can detect and count arbitrary patterns of a graph. Unlike
all prior approximation systems, Arya combines novel graph
decomposition theory with edge sampling-based approximation to reduce the complexity of mining complex patterns on
graphs with up to tens of billions of edges, a scale that was
only possible on supercomputers. Arya can run on a single
machine or distributed machines with an Error-Latency Profile (ELP) for users to configure the running time of pattern
mining tasks based on different error targets. Our evaluation
demonstrates that Arya outperforms existing exact and approximate pattern mining solutions by up to five orders of
magnitude. Arya supports graphs with 5 billion edges on
a single machine and scales to 10-billion-edge graphs on a
32-server testbed.</p>
</details>  

*Equal Contribution

Experience
======
Research Intern  
Azure for Operators, Microsoft, WA  
May 2022 - Aug. 2022  
Fortunate to be mentored by [Stefan Saroiu](https://stefan.t8k2.com/index.html) and [Alec Wolman](https://alecw.azurewebsites.net/work/default.htm)  

Research Intern  
Network Research Group, Microsoft Research Asia, Beijing  
Sep. 2020 - May 2021  
Fortunate to be mentored by [Zhixiong Niu](https://zhixiong.org/)  

Teaching
======
Teaching Assistant, EC527 High Performance Programming with Multicore and GPUs  
Boston University, [Spring 2023](https://people.bu.edu/herbordt/teaching.htm)  

Teaching Assistant, EC528 Cloud Computing  
Boston University, [Fall 2022](https://zaoxing.github.io/teaching/2022-fall-cloud)  

Services
======
Web Chair: [HotNets'25](https://conferences.sigcomm.org/hotnets/2025/index.html)  
Journal reviewer: ACM Transactions on Database Systems, IEEE/ACM Transactions on Networking, Computer Networks  
Conference reviewer: INFOCOM'2023   

Awards
======
<div style="text-align:left;">Hariri Institute’s Graduate Student Fellowship, Boston University<div style="float:right;">2023</div></div>
<div style="text-align:left;">Distinguished Computer Engineering Fellowship, Boston University<div style="float:right;">2021</div></div>
<div style="text-align:left;">Stars of Tomorrow Internship Award, Microsoft Research Asia<div style="float:right;">2021</div></div>
<div style="text-align:left;">National Scholarship, Ministry of Education, China<div style="float:right;">2018, 2019, 2020</div></div>
