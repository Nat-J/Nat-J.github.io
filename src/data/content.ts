export type Lang = 'en' | 'zh'

export const t = {
  nav: {
    about: { en: 'About', zh: '简介' },
    education: { en: 'Education', zh: '教育' },
    research: { en: 'Research', zh: '研究兴趣' },
    publications: { en: 'Publications', zh: '论文' },
    experience: { en: 'Experience', zh: '工作经历' },
    projects: { en: 'Projects', zh: '项目' },
    skills: { en: 'Skills', zh: '技能' },
    contact: { en: 'Contact', zh: '联系方式' },
    showcase: { en: 'Gallery', zh: '展示' },
    aboutme: { en: 'About Me', zh: '关于我' },
  },

  profile: {
    name: { en: 'Zijie Nie', zh: '聂子杰' },
    email: 'nzjess12345@gmail.com',
    bio: {
      en: 'I am a robotics researcher and engineer with a strong foundation in 3D computer vision, robot manipulation, rigid body dynamics, and reinforcement learning. I hold a Master\'s degree from Huazhong University of Science and Technology (HUST, 985) and a Bachelor\'s from Wuhan University of Technology (WUT, 211). ',
      zh: '我当前在机器人领域中工作与探索，在三维计算机视觉、机器人操控、刚体动力学和强化学习方面有扎实的基础。硕士毕业于华中科技大学（985），本科毕业于武汉理工大学（211）。',
    },
    links: [
      { label: 'Google Scholar', url: '#' },
      { label: 'GitHub', url: 'https://github.com/Nat-J' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/j-nat-07910b413/' },
    ],
    status: {
      en: 'I am seeking [PhD/RA] opportunities in Embodied AI and Robotics starting Fall 2026/Spring 2027/Fall 2027. Target regions: Hong Kong, Singapore, and the United States.[Benefiting from interdisciplinary training, I have strong engineering skills and a good debugging intuition, and can start full-time Research Assistant work in advance. Welcome to contact me]',
      zh: '正在寻找 2026 Fall / 2027 Spring / 2027 Fall 入学的具身智能与机器人方向的 [ PhD / RA ] 机会。目标地区：中国香港、新加坡、美国。[得益于交叉学科的训练，我的工程能力和调试直觉很强，可以提前开展全职RA研究工作，欢迎联系]',
    },
    quote: {
      en: '"Our generation was born too late to explore the Earth and too early to explore the stars, but we were born just in time to solve robotics."',
      zh: '"Our generation was born too late to explore the Earth and too early to explore the stars, but we were born just in time to solve robotics."',
    },
  },

  education: {
    title: { en: 'Education', zh: '教育背景' },
    items: [
      {
        degree: { en: 'M.Eng. in Mechanical Engineering [Academic Program]', zh: '工学硕士[学术型] · 机械工程' },
        school: { en: 'Huazhong University of Science and Technology (HUST)', zh: '华中科技大学' },
        tag: { en: '985 · A+ Discipline · National First-Class Major', zh: '985 · 学科评估A+ · 国家级一流学科' },
        period: '2021 – 2024',
        gpa: 'GPA 3.5/4.0',
        advisor: {
          en: 'Advisor: Prof. Wenlong Li (Changjiang Scholar); Lab Head: Prof. Han Ding (Academician, CAS)',
          zh: '指导老师：李文龙教授（长江学者）；实验室带头人：丁汉教授（中科院院士）',
        },
        maskedAdvisor: {
          en: 'Advisor: Prof. *** (Changjiang Scholar); Lab Head: Prof. *** (Academician, CAS)',
          zh: '指导老师：***教授（长江学者）；实验室带头人：***教授（中科院院士）',
        },
        thesis: {
          en: '',
          zh: '',
        },
        bullets: {
          en: [
            'Vision-guided robot machining planning',
            'Underwater camera calibration algorithms of laser line sensor',
            'Semantic segmentation of large-scale point clouds',
          ],
          zh: [
            '基于视觉感知引导的机器人加工规划',
            '水下线激光传感器的相机标定算法',
            '大规模点云的语义分割',
          ],
        },
      },
      {
        degree: { en: 'B.Eng. in Measuring & Control Technology', zh: '工学学士 · 测控技术与仪器' },
        school: { en: 'Wuhan University of Technology (WUT)', zh: '武汉理工大学' },
        tag: { en: '211 · B+ Discipline · National First-Class Major', zh: '211 · 学科评估B+ · 国家级一流专业' },
        period: '2017 – 2021',
        gpa: 'GPA 3.56/4.0 · Top10%',
        advisor: {
          en: 'Advisor: Prof. Yefa Hu · Hubei Key Lab of Digital Manufacturing',
          zh: '指导老师：胡业发教授 · 数字制造湖北省重点实验室',
        },
        maskedAdvisor: {
          en: 'Advisor: Prof. *** · Hubei Key Lab of Digital Manufacturing',
          zh: '指导老师：***教授 · 数字制造湖北省重点实验室',
        },
        thesis: {
          en: '',
          zh: '',
        },
        bullets: {
          en: [
            'Polarization-based 3D imaging & point cloud processing',
            'Bi-view structured light projection techniques and camera calibration algorithms',
          ],
          zh: [
            '偏振视觉的三维成像与点云后处理',
            '双目结构光投影与相机标定算法',
          ],
        },
      },
    ],
  },

  research: {
    title: { en: 'Research Interests', zh: '研究兴趣' },
    items: [
      {
        label: { en: 'Robot Manipulation & VLA/WAM', zh: '机器人操控与VLA/WAM' },
        desc: {
          en: 'Vision-Language-Action models, Whole-Arm Manipulation, and RL for dexterous grasping with collision avoidance.',
          zh: '视觉-语言-动作模型、全臂操控，以及基于强化学习的灵巧抓取与避障。',
        },
      },
      {
        label: { en: '3D Vision & Reconstruction', zh: '三维视觉与场景重建' },
        desc: {
          en: 'Camera calibration, multi-view point cloud processing, global registration, and structured light-based 3D measurement.',
          zh: '相机标定、多视角点云处理、全局配准，以及基于结构光的三维测量。',
        },
      },
      {
        label: { en: 'Embodied AI & Reinforcement Learning', zh: '具身智能与强化学习' },
        desc: {
          en: 'Generative models, multimodal perception, and learning-based planning for autonomous robotic systems.',
          zh: '生成式模型、多模态感知，以及基于学习的规划与控制。',
        },
      },
      {
        label: { en: 'Motion Planning & Control', zh: '运动规划与控制' },
        desc: {
          en: 'C-space collision-free region certification, trajectory optimization, real-time control at 1000Hz, and sensor fusion.',
          zh: '构型空间的轨迹优化、实时控制，以及传感器融合。',
        },
      },
    ],
  },

  publications: {
    title: { en: 'Publications', zh: '论文成果' },
    selfNames: ['Z. Nie', 'Zi-Jie Nie', 'Zijie Nie'],  // 你名字在论文中的各种写法，会自动加粗
    items: [
      {
        title: {
          en: 'A Component Construction Progress Surveillance Method Using LiDAR and BIM',
          zh: 'A Component Construction Progress Surveillance Method Using LiDAR and BIM',
        },
        venue: 'IEEE RCAE 2023',
        status: 'published' as const,
        authors: 'Z. Nie, L. Ding, Q. Peng, X. Chu, C. Yuan and W. Li*,',  // TODO: 替换为真实作者列表
        link: 'https://doi.org/10.1109/RCAE59706.2023.10398584',
        images: ['/images/pub-rcae2023.png'],  // 可添加多张图
        desc: {
          en: 'Using the BIM data, we propose a method to construct a robust progress monitoring model based on k-NN for large-scale architecture point cloud data. The method involves decoupling the BIM into lightweight component-level point clouds for optimization, and using point cloud filtering and feature point calibration to quickly eliminate coordinate system deviations between source data. The method also builds a robust progress monitoring model based on k-NN, which effectively suppresses interference from out-of-field noise while achieving precise component-level progress evaluation with a registration tolerance of less than 0.05m.',
          zh: '将 BIM 精细化解耦为轻量化构件级点云以优化交互，利用点云滤波与特征点标定快速消除跨源数据坐标系偏差，并构建基于 k-近邻（k-NN）的鲁棒进度监测模型，有效抑制外野离群噪声干扰的同时，实现配准公差小于 0.05m 的构件级进度精准评估。',
        },
      },
      {
        title: {
          en: 'A construction progress analysis method for massive architecture point cloud using logical cumulative distribution',
          zh: 'A construction progress analysis method for massive architecture point cloud using logical cumulative distribution',
        },
        venue: 'SPIE SPCS 2023',
        status: 'published' as const,
        authors: 'Xin Guo, Zi-Jie Nie, Qi Peng, et al. ',  // TODO: 替换为真实作者列表
        link: 'https://doi.org/10.1117/12.3012313',
        images: ['/images/pub-spie2023.png'],  // 可添加多张图
        desc: {
          en: 'Downsample large-scale architecture point cloud data using variable voxel filtering combined with curvature information, while effectively preserving point cloud features. Overcome occlusion effects by projecting 3D point cloud data onto a feature plane using PCA, and quantitatively analyze component geometric contours based on logical cumulative distribution and region fluctuation ratio (FR) for progress monitoring.',
          zh: '通过结合曲率信息的可变体素滤波实现高效数据下采样，同时有效保留点云特征。为克服遮挡影响，将三维点云投影作PCA投影到特征平面，并基于逻辑累积分布和区域波动比率（FR）对组件的几何轮廓完成进度进行量化分析。',
        },
      },
      {
        title: {
          en: 'Real-Time Certified Motion Planning via SDP-Based Convex Decomposition of Configuration Space [Expected Title]',
          zh: 'Real-Time Certified Motion Planning via SDP-Based Convex Decomposition of Configuration Space [预计标题]',
        },
        venue: 'Target: IROS',
        status: 'in-progress' as const,
        authors: 'Z. Nie',
        link: '#',  // TODO: 替换为论文链接
        images: ['/images/pub-cspace.png'],  // TODO: 放入 public/images/ 目录，可添加多张
        desc: {
          en: 'Instead of pursuing complete coverage of the C-space, this work introduces an efficient seed selection algorithm to balance generation time and space coverage, constructing a trajectory optimization model based on projection. The planning problem is strictly constrained within the union of certified collision-free convex polytopes, ensuring absolute collision-free certification while enabling real-time generation of smooth and dynamically feasible trajectories。',
          zh: '由于无碰撞C-space的非凸特性及在边界处扩张空间的计算成本过高，本文采用启发式的种子选取算法以平衡生成时间和空间覆盖率，构建基于投影的轨迹优化模型，将规划问题严格约束于已认证的无碰撞凸包并集之内，从而在确保C-space绝对无碰撞的同时，实时生成光滑且动力学可行的轨迹。',
        },
      },
    ],
  },

  projects: {
    title: { en: 'Projects', zh: '项目经历' },
    items: [
      // ④ 强化学习仿真
      {
        title: {
          en: 'Simulated Bipedal Locomotion Reinforcement Learning Based on Isaac Gym',
          zh: '基于 Isaac Gym 的双足机器人下肢强化学习运动控制仿真',
        },
        period: '2026.02 – 2026.05',
        desc: {
          en: 'Built a GPU-accelerated massively parallel bipedal simulation environment in Isaac Gym (4096+ envs). Designed Reward Shaping with structured state/action spaces for robust bipedal locomotion. Trained policies via PPO achieving stable omnidirectional blind locomotion across uneven terrain.',
          zh: '基于 Isaac Gym 搭建 GPU 加速的大规模并行双足仿真环境；设计结构化 Reward Shaping 与状态/动作空间面向鲁棒步行；基于 PPO 算法训练策略，实现双足机器人在非平整地形下的全向自适应盲行。',
        },
        techStack: 'Isaac Gym, PPO, PyTorch, RL, Sim-to-Real',
        images: [],
      },
      // ⑤ VLA 模型微调与部署
      {
        title: {
          en: 'VLA-Based Embodied Control Pipeline: Adaptation and Optimization on LeRobot[keep updating]',
          zh: "基于 LeRobot 框架的 VLA 具身控制算法微调与推理优化 [持续更新中]"
        },
        period: "2026.02 – 2026.06",
        desc: {
          en: "In the LeRobot framework, we introduced the LoRA method to fine-tune the SmoL-VLA, achieving 1) joint trajectory interpolation for smooth robot motion, 2) action chunking with sequential prediction for efficient multi-step action generation, and 3) real-time inference optimization for reduced latency and improved performance. The pipeline has been validated in simulation and on the so-arm101 platform, and is currently being deployed on the franka fr3 real robot platform.",
          zh: "在 LeRobot 框架下引入 LoRA 方法微调 SmoL-VLA ,1）冻结基座做机器人关节动作空间的映射，2）推理时用时序衰减的Action Chunking结合插值平滑，降低实机抖动；3）目前已在仿真环境和so-arm101上验证，并正在向franka fr3实机平台进行部署测试。"
        },
        techStack: "LeRobot, SmoL-VLA, LoRA (PEFT), Action Chunking, Joint Trajectory Interpolation, PyTorch",
        images: []
      },

      // ② FCL 自避障算法
      {
        title: {
          en: 'Robot Self-Collision Avoidance Algorithm Based on FCL',
          zh: '基于 FCL 的机器人本体自避障算法研发',
        },
        period: '2025.12 – 2026.03',
        desc: {
          en: 'Forward kinematics: BFS-based traversal + Adjacent Coordinate Matrix (ACM) for real-time Screw-theory FK of an 18-DoF kinematic chain. Collision detection: Fast Collision Library (FCL) for minimum inter-link distance computation with self-collision margin constraints. Algorithm passed online simulation verification; physical robot validation in progress.',
          zh: '正运动学解算：基于 BFS 遍历 + 邻接坐标矩阵（ACM）对 18-DoF 旋量运动学链进行实时迭代求解；碰撞检测：基于 Fast Collision Library（FCL）计算机器人连杆间最小距离，设定自碰撞安全裕度约束。算法已通过在线仿真验证，当前正在进行实机验证。',
        },
        techStack: 'FCL, BFS, ACM, Screw Theory, C++, 18-DoF',
        images: [],
      },
      // ③ 四足机器人运动控制仿真
      {
        title: {
          en: 'Quadruped Robot Motion Control Simulation Based on Unitree Go1',
          zh: '基于宇树 Go1 的四足机器人运动控制算法开发',
        },
        period: '2025.11 – 2026.02',
        desc: {
          en: 'State estimation: Discrete-Time Kalman Filter (DKF) at 250 Hz fusing IMU pre-integration and foot-contact odometry; Torque control: Whole-Body Control (WBC) with PD feedback for whole-body joint torque distribution. Validated dynamic gait switching and locomotion stability in ROS-Gazebo simulation.',
          zh: '状态估计：设计离散卡尔曼滤波器（DKF），以 250 Hz 频率融合 IMU 预积分与足端接触里程计；力矩控制：基于 Whole-Body Control（WBC）+ MIT模式实现全身关节力矩分配。已在 ROS-Gazebo 仿真环境中验证动态步态切换与运动稳定性。',
        },
        techStack: 'DKF (250 Hz), WBC, PD, ROS-Gazebo, IMU',
        images: [],
      },
      // ① IGH 主站运动控制器
      {
        title: {
          en: 'Online Motion Controller (Cerebellum) Development Based on IGH EtherCAT Master',
          zh: '基于 IGH 主站的机器人在线运动控制器（小脑）研发',
        },
        period: '2025.08 – 2026.02',
        desc: {
          en: 'Developed a real-time robot motion controller on Preempt-RT Linux with IGH-EtherCAT master, achieving 14-joint / 6-motor synchronous drive at 1 kHz control loop. Adopted DDS-based pub/sub communication architecture for cross-module data exchange. Core drive module delivered and deployed on the Galbot platform.',
          zh: '基于 Preempt-RT 实时内核与 IGH-EtherCAT 主站，实现 14 关节电机 1 kHz 高频同步驱动的在线运动控制器；采用 DDS 发布-订阅通信架构实现跨模块数据交互。核心驱动模块已交付至银河通用（Galbot）。',
        },
        techStack: 'Preempt-RT, IGH-EtherCAT, DDS, C++, 1 kHz Loop',
        images: [],
      },
      // ④ SRS 遥操数采平台
      {
        title: {
          en: 'Teleoperation Data Acquisition Platform (SRS Configuration)',
          zh: '面向 SRS 构型的人形机器人遥操作数据数采平台开发',
        },
        period: '2025.08 – 2025.12',
        desc: {
          en: 'Motion capture: HTC-VIVE Tracker-based optical system for human pose acquisition; Joint mapping: Rodrigues formula for SE(3)→2-DoF joint space decomposition, solved by Levenberg-Marquardt (LM) iterative optimization; Interpolation: hybrid spline method upsampling 30 Hz capture to 1 kHz real-time control. An alternative PICO controller version with end-effector pose IK mapping also developed.',
          zh: '运动捕捉：基于 HTC-VIVE Tracker 光学系统获取人体位姿数据；关节映射：通过 Rodrigues 公式将 SE(3) 分解至 2-DoF 关节空间，采用 Levenberg-Marquardt（LM）迭代优化求解；在线插值：混合式样条插值方法将 30 Hz 采集频率上采样至 1 kHz 实时控制。基于 PICO 手柄末端位姿逆运动学映射的遥操版本亦已开发完成。',
        },
        techStack: 'HTC-VIVE, Rodrigues, LM, SE(3), 30 Hz→1 kHz, C++',
        images: [],
      },
      // ⑦ BIM + PointTransformerV3 构件进度分析
      {
        title: {
          en: 'Component Progress Analysis Algorithm Based on BIM and PointTransformerV3',
          zh: '基于 BIM 与 PointTransformerV3 的构件进度分析算法',
        },
        period: '2023.06 – 2024.06',
        desc: {
          en: 'Segmentation: PointTransformerV3 (PTv3) for instance-level semantic segmentation of construction components in complex scenes; Registration: PCA-based initial alignment + FPFH coarse registration + ICP fine registration; Evaluation: multi-view projection IoU for automated progress quantification and construction deviation analysis.',
          zh: '语义分割：采用 PointTransformerV3（PTv3）对复杂施工场景中的建筑构件进行实例级语义分割；位姿对齐：PCA 初始对齐 + FPFH 粗配准 + ICP 精配准；进度量化：基于多视角投影 IoU 实现自动化施工进度评估与偏差分析。',
        },
        techStack: 'PTv3, PCA, FPFH, ICP, IoU, BIM',
        images: [],
      },
      // ⑥ 水下作业机器人视觉感知与智能操纵
      {
        title: {
          en: 'Visual Perception and Intelligent Manipulation System for Underwater Robots with Dual-Arm Collaboration',
          zh: '水下作业机器人双臂协作的视觉感知与智能操纵系统开发',
        },
        period: '2021.09 – 2023.12',
        desc: {
          en: 'Perception: refraction-compensated visual model with Probability Density Function (PDF) correction for water-medium distortion + YOLOv7 for target detection and 6D pose estimation; Planning: improved RRT* with dual-arm coordination and inverse kinematics. Deployed in real underwater maintenance operations.',
          zh: '视觉感知：水体存在热扰动导致画面有波纹和失真，构建了考虑介质折射误差的视觉补偿模型，使用AXB=YCZ的全域标定模型进行双臂标定，结合概率密度函数（PDF）修正水下畸变 + YOLOv7 实现目标检测与 6D 位姿估计；运动规划：改进 RRT* 结合双臂协同与运动学逆解，提升路径平滑性。已成功部署于实际水下维修作业场景。',
        },
        techStack: 'YOLOv7, RRT*, PDF Refraction Model, 6D Pose, ROS',
        images: [],
      },

      {
        "title": {
          "en": "Multi-View Shape-from-Polarization (SfP) 3D Reconstruction System via Turntable Rotation",
          "zh": "基于偏振相机与旋转平台的像素级多视角三维重建系统"
        },
        "period": "2021.01 – 2021.06",
        "desc": {
          "en": "Analyzed polarized images to compute Stokes vectors, derived Degree of Linear Polarization (DoLP) and Angle of Linear Polarization (AoL), and suppressed specular reflections. Developed a multi-view geometry method to resolve normal ambiguity and fuse point clouds into a seamless 3D mesh.",
          "zh": "解析偏振图像计算 Stokes 矢量，获取线性偏振度（DoLP）与偏振角（AoL），抑制镜面高光干扰；多视角法向消歧：设计“固定相机+电控转台”标定旋转轴,利用连续旋转的多视角几何约束消除偏振法向歧义；点云融合重构：基于变换矩阵统一多视角点云与法向，经 MLS 去噪平滑后采用泊松重构生成无缝三维网格。"
        },
        "techStack": "Polarization Camera, Stokes Vector, Shape from Polarization (SfP), Turntable Kinematic Calibration, Normal Ambiguity Resolution, Poisson Reconstruction, OpenCV, Open3D/PCL",
        "images": []
      },
    ],
  },

  experience: {
    title: { en: 'Experience', zh: '工作经历' },
    items: [
      {
        role: { en: 'Robotics Algorithm Engineer', zh: '机器人算法工程师' },
        org: { en: 'Wuhan Zhidongli Robotics Co., Ltd.', zh: '武汉智动力机器人有限公司' },
        period: '2025.08 – 2026.06',
      },
      {
        role: { en: 'Robotics Automation Engineer', zh: '机器人自动化工程师' },
        org: { en: 'WISDRI Engineering Co., Ltd. (MCC Group)', zh: '中冶南方工程技术有限公司' },
        period: '2024.07 – 2025.07',
      },
      {
        role: { en: 'Researching Graduate Student', zh: '硕士研究生（学术型）' },
        org: { en: 'HUST · State Key Lab of Intelligent Manufacturing', zh: '华中科技大学 · 智能制造装备与技术全国重点实验室' },
        period: '2021.07 – 2024.06',
      },
    ],
  },

  skills: {
    title: { en: 'Skills', zh: '技能专长' },
    categories: [
      { name: { en: 'Reinforcement Learning', zh: '强化学习' }, items: 'Policy Gradient, Q-Learning, DQN, DDPG, A3C, TRPO, PPO' },
      { name: { en: 'LLM & Generative AI', zh: 'LLM与Gen AI' }, items: 'Transformer, Post-Training, GPT-2, Flow Matching, Diffusion Models' },
      { name: { en: 'Robotics', zh: '机器人学' }, items: 'Rigid Body Dynamics, Kinematics, Motion Planning, Sensor Fusion, ROS/ROS2, EtherCAT' },
      { name: { en: 'Computer Vision', zh: '计算机视觉' }, items: 'YOLO, Camera Calibration, Point Cloud Processing, 3D Reconstruction, Semantic Segmentation' },
      { name: { en: 'Programming & Tools', zh: '编程与工具' }, items: 'Python, C++, CMake, Git, Linux, Docker, DDS, pytorch' },
      { name: { en: 'CS Fundamentals', zh: '计算机基础' }, items: 'Data Structures, Algorithms, Compiler, Computer Architecture, Digital Circuits' },
    ],
  },

  showcase: {
    title: { en: 'Gallery', zh: '项目展示' },
    items: [
      { images: ['/images/showcase-1.jpg', '/images/showcase-1b.jpg', '/images/showcase-1c.jpg'], caption: { en: 'Robot Control System', zh: '机器人控制系统' } },
      // { images: ['/images/showcase-2.jpg'], caption: { en: 'Biped Reinforcement Learning', zh: '双足强化学习' } },
      { images: ['/images/showcase-3.jpg', '/images/showcase-3b.jpg', '/images/showcase-3c.jpg'], caption: { en: 'VLA fine-tuning and deployment', zh: 'VLA微调与部署' } },
      { images: ['/images/showcase-4.jpg', '/images/showcase-4b.jpg'], caption: { en: 'Quadruped Simulation', zh: '四足仿真控制' } },
      { images: ['/images/showcase-5.jpg', '/images/showcase-5b.jpg'], caption: { en: 'Vision-guided Underwater Robot', zh: '视觉引导的水下机器人' } },
      // { images: ['/images/showcase-6.jpg'], caption: { en: 'Point Cloud Processing', zh: '点云处理与配准' } },
    ],
  },

  aboutme: {
    title: { en: 'About Me', zh: '关于我' },
    photos: [
      { src: '/images/aboutme-1.jpg', caption: { en: '', zh: '' } },
      { src: '/images/aboutme-2.jpg', caption: { en: '', zh: '' } },
      { src: '/images/aboutme-3.jpg', caption: { en: '', zh: '' } },
      { src: '/images/aboutme-4.jpg', caption: { en: '', zh: '' } },
    ],
    bio: {
      en: 'singing, dancing, rapping, basketball',
      zh: '唱、跳、rap、篮球',
    },
  },

  contact: {
    title: { en: 'Contact', zh: '联系方式' },
    items: {
      en: [
        'Email: nzjess12345@gmail.com',
        'Available to start: anytime',
      ],
      zh: [
        '邮箱：nzjess12345@gmail.com',
        '可随时开始研究工作',
      ],
    },
  },
}
