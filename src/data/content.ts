export type Lang = 'en' | 'zh'

export const t = {
  nav: {
    about: { en: 'About', zh: '简介' },
    education: { en: 'Education', zh: '教育' },
    research: { en: 'Research', zh: '研究兴趣' },
    publications: { en: 'Publications', zh: '论文' },
    experience: { en: 'Experience', zh: '经历' },
    skills: { en: 'Skills', zh: '技能' },
    contact: { en: 'Contact', zh: '联系' },
  },

  profile: {
    name: { en: 'Zijie Nie', zh: '聂子杰' },
    email: 'placeholder@email.com',
    bio: {
      en: 'I am a robotics researcher and engineer with a strong foundation in 3D computer vision, robot manipulation, and reinforcement learning. I hold a Master\'s degree from Huazhong University of Science and Technology (HUST, 985) and a Bachelor\'s from Wuhan University of Technology (WUT, 211). ',
      zh: '我当前在机器人领域中工作与探索，在三维计算机视觉、机器人操控和强化学习方面有扎实的基础。硕士毕业于华中科技大学（985），本科毕业于武汉理工大学（211）。',
    },
    links: [
      { label: 'Google Scholar', url: '#' },
      { label: 'GitHub', url: '#' },
      { label: 'LinkedIn', url: '#' },
    ],
    status: {
      en: 'I am seeking PhD opportunities in Embodied AI and Robotics starting Fall 2026/Spring 2027/Fall 2027. Target regions: Hong Kong, Singapore, and the United States.',
      zh: '正在寻找2026 fall/2027 spring/2027 fall入学的具身智能与机器人方向的博士生机会-目标地区：中国香港、新加坡、美国。',
    },
  },

  education: {
    title: { en: 'Education', zh: '教育背景' },
    items: [
      {
        degree: { en: 'M.Eng. in Mechanical Engineering', zh: '工学硕士 · 机器人工程' },
        school: { en: 'Huazhong University of Science and Technology (HUST)', zh: '华中科技大学' },
        tag: { en: '985 · A+ Discipline', zh: '985 · 学科评估A+' },
        period: '2021 – 2024',
        gpa: 'GPA 3.5/4.0',
        advisor: {
          en: 'Advisor: Prof. Wenlong Li (Changjiang Scholar); Lab Head: Prof. Han Ding (Academician, CAS)',
          zh: '导师: 李文龙教授（长江学者）; 实验室带头人: 丁汉教授（中科院院士）',
        },
        thesis: {
          en: 'Thesis: Component Region Extraction and Contour Feature Analysis for Industrial Large-Scale Point Clouds',
          zh: '毕业论文:《面向工业场景大规模点云的构件区域提取与轮廓特征分析》',
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
        tag: { en: '211 · B+ Discipline · Top 9%', zh: '211 · 学科评估B+ · Top 9%' },
        period: '2017 – 2021',
        gpa: 'GPA 3.65/4.0',
        advisor: {
          en: 'Advisor: Prof. Yefa Hu · Hubei Key Lab of Digital Manufacturing',
          zh: '导师: 胡业发教授 · 数字制造湖北省重点实验室',
        },
        thesis: {
          en: 'Thesis: 3D Measurement of High-Reflective Surfaces Based on Structured Light',
          zh: '毕业论文:《基于结构光技术的高反光材质三维测量方法研究》',
        },
        bullets: {
          en: [
            'Polarization-based 3D imaging & point cloud processing',
            'Bi-view structured light projection techniques and camera calibration algorithms',
            'National first-class major program',
          ],
          zh: [
            '偏振视觉的三维成像与点云后处理',
            '双目结构光投影与相机标定算法',
            '国家级一流专业',
          ],
        },
      },
    ],
  },

  research: {
    title: { en: 'Research Interests', zh: '研究兴趣' },
    items: [
      {
        label: { en: 'Robot Manipulation & VLA', zh: '机器人操控与VLA' },
        desc: {
          en: 'Vision-Language-Action models, Whole-Arm Manipulation, and RL for dexterous grasping with collision avoidance.',
          zh: '视觉-语言-动作模型、全臂操控，以及基于强化学习的灵巧抓取与避障。',
        },
      },
      {
        label: { en: '3D Vision & Reconstruction', zh: '三维视觉与重建' },
        desc: {
          en: 'Camera calibration, multi-view point cloud processing, global registration, and structured light-based 3D measurement.',
          zh: '相机标定、多视角点云处理、全局配准，以及基于结构光的三维测量。',
        },
      },
      {
        label: { en: 'Embodied AI', zh: '具身智能' },
        desc: {
          en: 'Generative models, multimodal perception, and learning-based planning for autonomous robotic systems.',
          zh: '生成式模型、多模态感知，以及面向自主机器人系统的学习型规划。',
        },
      },
      {
        label: { en: 'Motion Planning & Control', zh: '运动规划与控制' },
        desc: {
          en: 'C-space collision-free region certification, trajectory optimization, real-time control at 1000Hz, and sensor fusion.',
          zh: '构型空间无碰撞区域认证、轨迹优化、1000Hz实时控制，以及传感器融合。',
        },
      },
    ],
  },

  publications: {
    title: { en: 'Publications', zh: '发表论文' },
    selfNames: ['Z. Nie', 'Zi-Jie Nie', 'Zijie Nie'],  // 你名字在论文中的各种写法，会自动加粗
    items: [
      {
        title: {
          en: '[Expected Title]  Collision-Free C-Space Polytope Decomposition for Real-Time Robot Trajectory Optimization',
          zh: '[预计标题]面向实时机器人轨迹优化的构型空间无碰撞多面体分解',
        },
        venue: 'Target: IROS',
        status: 'in-progress' as const,
        link: '#',  // TODO: 替换为论文链接
        image: '/images/pub-cspace.png',  // TODO: 放入 public/images/ 目录
        desc: {
          en: 'Using C-IRIS framework with semidefinite programming for certified collision-free convex polytopes in TC-space, enabling real-time trajectory optimization at 1000Hz.',
          zh: '采用 C-IRIS 框架，通过半定规划在 TC 空间中认证无碰撞凸多面体，实现 1000Hz 实时轨迹优化。',
        },
      },
      {
        title: {
          en: 'A Component Construction Progress Surveillance Method Using LiDAR and BIM',
        },
        venue: 'IEEE RCAE 2023',
        status: 'published' as const,
        authors: 'Z. Nie, L. Ding, Q. Peng, X. Chu, C. Yuan and W. Li*,',  // TODO: 替换为真实作者列表
        link: 'https://doi.org/10.1109/RCAE59706.2023.10398584',  // TODO: 替换为论文链接
        image: '/images/pub-rcae2023.png',  // TODO: 放入 public/images/ 目录
        desc: {
          en: 'Research on 3D vision and point cloud perception, registration, and segmentation for robotic manipulation.',
          zh: '关于机器人操控任务中的三维视觉与点云感知、配准和分割的研究。',
        },
      },
      {
        title: {
          en: 'Structured Point Cloud Processing and Global Registration Methods',
          zh: '结构化点云处理与全局配准方法',
        },
        venue: 'SPIE SPCS 2023',
        status: 'published' as const,
        authors: 'Xin Guo, Zi-Jie Nie, Qi Peng, et al. ',  // TODO: 替换为真实作者列表
        link: 'https://doi.org/10.1117/12.3012313',  // TODO: 替换为论文链接
        image: '/images/pub-spie2023.png',  // TODO: 放入 public/images/ 目录
        desc: {
          en: 'Novel approaches for structured point cloud processing and global registration in 3D measurement systems.',
          zh: '三维测量系统中结构化点云处理与全局配准的新方法。',
        },
      },
    ],
  },

  experience: {
    title: { en: 'Experience', zh: '工作与项目经历' },
    items: [
      {
        role: { en: 'Robotics Algorithm Engineer', zh: '机器人算法工程师' },
        org: { en: 'Wuhan Zhidongli Robotics Co., Ltd.', zh: '武汉智动力机器人有限公司' },
        period: '2025.08 – 2026.06',
        bullets: {
          en: [
            'Built EtherCAT-based 1000Hz real-time robot control system',
            'Designed abstract device layer software framework for robots',
            'Implemented collision avoidance, zero-force dragging, and online interpolation algorithms',
            'Developed ROS2/DDS-based distributed brain-body communication system',
            'Built VLA-based visual perception and pose-grasping platform',
          ],
          zh: [
            '基于 EtherCAT 的机器人 1000Hz 实时控制系统',
            '面向机器人的抽象设备层软件框架',
            '本体避障、零力拖动、在线插值等机器人本体算法',
            '基于 ROS2/DDS 的大小脑分布式系统',
            '基于 VLA 的视觉感知和定位抓取平台',
          ],
        },
      },
      {
        role: { en: 'Engineering Technologist', zh: '机器人工程师' },
        org: { en: 'WISDRI Engineering Co., Ltd. (MCC Group)', zh: '中冶南方工程技术有限公司' },
        period: '2024.07 – 2025.07',
        bullets: {
          en: [
            'Applied engineering expertise in industrial automation projects',
            'Gained hands-on experience with large-scale industrial systems',
          ],
          zh: [
            '在工业自动化项目中应用工程技术',
            '积累大型工业系统的实践经验',
          ],
        },
      },
      {
        role: { en: 'Graduate Research Assistant', zh: '硕士研究生（学术型）' },
        org: { en: 'HUST · State Key Lab of Intelligent Manufacturing', zh: '华中科技大学 · 智能制造装备与技术全国重点实验室' },
        period: '2021 – 2024',
        bullets: {
          en: [
            'Underwater camera calibration: galvanometer-rotation refraction model + line laser sensor',
            'YOLO-based underwater debris detection with dual-robot grasping (nuclear environment)',
            'Multi-view point cloud structured processing and global registration',
          ],
          zh: [
            '水下振镜转动折射模型和线激光传感器的相机标定算法',
            '基于 YOLO 的核环境水下异物检测与双机器人抓取',
            '多视角点云的结构化处理与全局配准',
          ],
        },
      },
    ],
  },

  skills: {
    title: { en: 'Skills', zh: '技能专长' },
    categories: [
      { name: { en: 'Reinforcement Learning', zh: '强化学习' }, items: 'Policy Gradient, Q-Learning, DQN, DDPG, A3C, TRPO, PPO' },
      { name: { en: 'LLM & Generative', zh: '大模型与生成式' }, items: 'Transformer, BERT, GPT-2, Flow Matching, Diffusion Models' },
      { name: { en: 'Robotics', zh: '机器人学' }, items: 'Rigid Body Dynamics, Kinematics, Motion Planning, Sensor Fusion, ROS/ROS2, EtherCAT' },
      { name: { en: 'Computer Vision', zh: '计算机视觉' }, items: 'YOLO, Camera Calibration, Point Cloud Processing, 3D Reconstruction, Semantic Segmentation' },
      { name: { en: 'Programming & Tools', zh: '编程与工具' }, items: 'Python, C++, CMake, Git, Linux, Docker, DDS' },
      { name: { en: 'CS Fundamentals', zh: '计算机基础' }, items: 'Data Structures, Algorithms, Compiler' },
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
        '邮箱: nzjess12345@gmail.com',
        '可随时开始研究工作',
      ],
    },
  },
}
