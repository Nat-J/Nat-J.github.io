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
      en: 'I am seeking PhD opportunities in Embodied AI and Robotics starting Fall 2026/Spring 2027/Fall 2027. Target regions: Hong Kong, Singapore, and the United States.[I have strong engineering skills and can start full-time research work immediately]',
      zh: '正在寻找 2026 Fall / 2027 Spring / 2027 Fall 入学的具身智能与机器人方向的博士生机会。目标地区：中国香港、新加坡、美国。[我的工程能力很强，可以随时开展全职研究工作]',
    },
  },

  education: {
    title: { en: 'Education', zh: '教育背景' },
    items: [
      {
        degree: { en: 'M.Eng. in Mechanical Engineering [Academic Program]', zh: '工学硕士[学术型] · 机器人工程' },
        school: { en: 'Huazhong University of Science and Technology (HUST)', zh: '华中科技大学' },
        tag: { en: '985 · A+ Discipline · National First-Class Major', zh: '985 · 学科评估A+ · 国家级一流学科' },
        period: '2021 – 2024',
        gpa: 'GPA 3.5/4.0',
        advisor: {
          en: 'Advisor: Prof. Wenlong Li (Changjiang Scholar); Lab Head: Prof. Han Ding (Academician, CAS)',
          zh: '导师：李文龙教授（长江学者）；实验室带头人：丁汉教授（中科院院士）',
        },
        thesis: {
          en: 'Thesis: Component Region Extraction and Contour Feature Analysis for Industrial Large-Scale Point Clouds',
          zh: '毕业论文：《面向工业场景大规模点云的构件区域提取与轮廓特征分析》',
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
        gpa: 'GPA 3.65/4.0 · Top10%',
        advisor: {
          en: 'Advisor: Prof. Yefa Hu · Hubei Key Lab of Digital Manufacturing',
          zh: '导师：胡业发教授 · 数字制造湖北省重点实验室',
        },
        thesis: {
          en: 'Thesis: 3D Measurement of High-Reflective Surfaces Based on Structured Light',
          zh: '毕业论文：《基于结构光技术的高反光材质三维测量方法研究》',
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
          en: 'Research on 3D vision and point cloud perception, registration, and segmentation for robotic manipulation.',
          zh: '关于机器人操控任务中的三维视觉与点云感知、配准和分割的研究。',
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
          en: 'Novel approaches for structured point cloud processing and global registration in 3D measurement systems.',
          zh: '三维测量系统中结构化点云处理与全局配准的新方法。',
        },
      },
      {
        title: {
          en: 'Collision-Free C-Space Polytope Decomposition for Real-Time Robot Trajectory Optimization [Expected Title]',
          zh: 'Collision-Free C-Space Polytope Decomposition for Real-Time Robot Trajectory Optimization [预计标题]',
        },
        venue: 'Target: IROS',
        status: 'in-progress' as const,
        authors: 'Z. Nie',
        link: '#',  // TODO: 替换为论文链接
        images: ['/images/pub-cspace.png'],  // TODO: 放入 public/images/ 目录，可添加多张
        desc: {
          en: 'Using C-IRIS framework with semidefinite programming for certified collision-free convex polytopes in TC-space, enabling real-time trajectory optimization at 1000Hz.',
          zh: '采用 C-IRIS 框架，通过半定规划在 TC 空间中认证无碰撞凸多面体，实现 1000Hz 实时轨迹优化。',
        },
      },
    ],
  },

  projects: {
    title: { en: 'Projects', zh: '项目经历' },
    items: [
      // ① IGH 主站运动控制器
      {
        title: {
          en: 'Online Motion Controller (Cerebellum) Development Based on IGH EtherCAT Master',
          zh: '基于 IGH 主站的机器人在线运动控制器（小脑）研发',
        },
        period: '2025.08 – 2026.02',
        desc: {
          en: 'Built a real-time robot control system using Preempt-RT Linux and IGH-EtherCAT master station; implemented DDS-based communication architecture for modular control. Core motion control module successfully delivered to Galaxy Universal.',
          zh: '基于 Preempt-RT 实时内核与 IGH-EtherCAT 主站搭建机器人实时控制系统；采用 DDS 通信架构实现模块化控制，核心运动控制模块已成功交付至银河通用。',
        },
        techStack: 'Preempt-RT, IGH-EtherCAT, DDS, C++',
        images: [],
      },
      // ② FCL 自避障算法
      {
        title: {
          en: 'Robot Self-Collision Avoidance Algorithm Based on FCL',
          zh: '基于 FCL 的机器人本体自避障算法研发',
        },
        period: '2025.12 – 2026.03',
        desc: {
          en: 'Position solving: BFS data structure + ACM matrix for real-time end-effector kinematics chain computation; Collision detection: FCL-based minimum distance calculation between robot links with self-collision constraints. Algorithm verified in simulation, currently undergoing real-world validation.',
          zh: '位置解算：基于 BFS 的数据结构 + ACM 矩阵求解迭代的旋量正运动学，获取末端执行器运动学链，实现全臂关节位置实时解算；碰撞检测：基于 FCL 库实现机器人连杆间最小距离计算与自避障约束。',
        },
        techStack: 'FCL, BFS, ACM, C++',
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
          en: 'State estimation: Discrete Kalman Filter fusing IMU and foot-end contact information; Torque control: WBC + PD for whole-body torque distribution. Validated gait switching and locomotion tests in Gazebo simulation environment.',
          zh: '状态估计：基于 Discrete KF 融合 IMU 与足端接触信息；力矩控制：WBC + PD 实现全身力矩分配。已在 Gazebo 仿真环境中完成步态切换与运动测试。',
        },
        techStack: 'Discrete KF, WBC, PD, ROS, IMU',
        images: [],
      },
      // ④ SRS 遥操数采平台
      {
        title: {
          en: 'Teleoperation Data Acquisition Platform with Human Joint Angle Mapping (SRS Configuration)',
          zh: '面向 SRS 构型的人体关节角映射的遥操数采平台开发',
        },
        period: '2025.08 – 2025.12',
        desc: {
          en: 'HTC-VIVE-based optical motion capture for human motion data acquisition; LM algorithm for non-linear SE(3) to 2-DoF joint space mapping; developed a hybrid spline interpolation method for online interpolation at 1000Hz for real-time control. The version of PICO hand motion mapping for end-effector pose mapping is also developed.',
          zh: '基于 HTC-VIVE 光学动捕系统获取人体运动数据；通过 LM 算法求解 SE(3) 到 2-DoF 关节空间的非线性映射；同时开发了一种混合式样条插值方法，实现 1000Hz 关节空间的在线插值与实时控制。基于PICO手柄末端位姿的运动学逆解的关节映射遥操作版本也已开发完成。',
        },
        techStack: 'HTC-VIVE, LM, SE(3), C++',
        images: [],
      },
      // ④ 强化学习仿真
      {
        title: {
          en: 'Simulated Bipedal Locomotion Reinforcement Learning Based on Isaac Gym',
          zh: '基于 Isaac Gym 的双足机器人下肢强化学习运动控制仿真',
        },
        period: '2026.02 – 2026.06',
        desc: {
          en: 'Constructed a GPU-accelerated parallelized bipedal simulation environment in Isaac Gym. Designed and tuned reinforcement learning reward functions and state/action spaces for robust walking. Trained policies using PPO (Proximal Policy Optimization), achieving stable omnidirectional blind locomotion and terrain adaptation.',
          zh: '基于 Isaac Gym 搭建了 GPU 加速的大规模并行化双足物理仿真环境；设计并调试了面向鲁棒步行的强化学习奖励函数（Reward Shaping）与状态/动作空间；基于 PPO 算法完成策略训练，实现了双足机器人在复杂地形下的自适应盲行（Blind Locomotion）与稳定控制。',
        },
        techStack: 'Isaac Gym, PPO, PyTorch, Reinforcement Learning, Sim-to-Real',
        images: [],
      },
      // ⑤ VLA 模型微调与部署
      {
        title: {
          en: 'VLA Model Fine-tuning and Deployment Based on LeRobot Framework[Tracking]',
          zh: '基于 LeRobot 框架的 VLA 模型微调与部署[继续跟进前沿中...]',
        },
        period: '2026.02 – 2026.05',
        desc: {
          en: 'Full pipeline: teleoperation data collection → model fine-tuning → real-world deployment. Task: 6-DoF robotic arm manipulation using Smol-VLA. Achieved >88% success rate in tabletop object grasping. Currently exploring its application on franka fr3 real machine.',
          zh: '完整流水线：遥操数据采集 → 模型微调 → 真机部署；任务：6-DoF 机械臂操控，基于 Smol-VLA；桌面物体抓取成功率 >88%。当前在尝试将其应用至 Franka FR3 实机。',
        },
        techStack: 'LeRobot, Smol-VLA, PyTorch, action trunk',
        images: [],
      },
      // ⑥ 水下作业机器人视觉感知与智能操纵
      {
        title: {
          en: 'Visual Perception and Intelligent Manipulation System for Underwater Robots',
          zh: '水下作业机器人视觉感知与智能操纵系统开发',
        },
        period: '2021.09 – 2023.12',
        desc: {
          en: 'Target recognition & localization: PDF compensation + YOLOv7; Motion planning: improved RRT* with inverse kinematics. Successfully deployed in specific underwater maintenance scenarios.',
          zh: '目标识别与定位：PDF 补偿 + YOLOv7；运动规划：改进 RRT* 结合逆运动学。已成功应用于特定水下维修场景。',
        },
        techStack: 'YOLOv7, RRT*, PDF, ROS',
        images: [],
      },
      // ⑦ BIM + PointTransformerV3 构件进度分析
      {
        title: {
          en: 'Component Progress Analysis Algorithm Based on BIM and PointTransformerV3',
          zh: '基于 BIM 与 PointTransformerV3 的构件进度分析算法',
        },
        period: '2023.02 – 2023.08',
        desc: {
          en: 'Semantic segmentation: PointTransformerV3 for construction component segmentation; Pose alignment: PCA + FPFH coarse-to-fine registration; Progress quantification: multi-view projection IoU comparison for automated progress assessment and construction deviation analysis.',
          zh: '语义分割：PointTransformerV3 对建筑构件进行分割；位姿对齐：PCA + FPFH 粗配准 + 精配准；进度量化：多视角投影 IoU 对比实现自动化进度评估与施工偏差分析。',
        },
        techStack: 'PointTransformerV3, PCA, FPFH, IoU, BIM',
        images: [],
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
        role: { en: 'Automation Engineer', zh: '自动化工程师' },
        org: { en: 'WISDRI Engineering Co., Ltd. (MCC Group)', zh: '中冶南方工程技术有限公司' },
        period: '2024.07 – 2025.07',
      },
      {
        role: { en: 'Graduate Research Assistant', zh: '硕士研究生（学术型）' },
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
