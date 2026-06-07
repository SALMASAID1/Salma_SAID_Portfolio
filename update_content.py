import re

with open('src/data/content.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace en certifications
en_cert_items = """      items: [
        {
          title: 'Oracle Certified Professional',
          desc: 'Java SE 17 Developer',
          issuer: 'Oracle',
          color: 'from-red-500 to-orange-500',
          icon: 'fa-certificate',
          link: 'https://drive.google.com/file/d/16E4BoLmEUePhy7nb0QWRwk2-hqi5j65s/view?usp=sharing'
        },
        {
          title: 'Oracle Cloud Database Services',
          desc: '2025 Professional',
          issuer: 'Oracle',
          color: 'from-red-500 to-orange-500',
          icon: 'fa-database',
          link: 'https://drive.google.com/file/d/1butD50sso6Xx-QhMLTZGEWuOeQQnJp4I/view?usp=sharing'
        },
        {
          title: 'Oracle Cloud AI Foundations',
          desc: '2025 Associate',
          issuer: 'Oracle',
          color: 'from-red-500 to-orange-500',
          icon: 'fa-cloud',
          link: 'https://drive.google.com/file/d/1ihDSYtbkIhF1DVvEd1uyWCodt0vHnH6p/view?usp=sharing'
        },
        {
          title: 'Oracle Cloud Infrastructure',
          desc: '2025 Certified Data Science Professional',
          issuer: 'Oracle',
          color: 'from-red-500 to-orange-500',
          icon: 'fa-brain',
          link: 'https://drive.google.com/file/d/1U1D2W6U12t_e1le4feOV-lMleayjxtOQ/view?usp=sharing'
        },
        {
          title: 'Deep Learning with TensorFlow 2',
          desc: 'Complete Certification',
          issuer: '365 Data Science',
          color: 'from-blue-500 to-cyan-500',
          icon: 'fa-brain',
          link: 'https://learn.365datascience.com/certificates/CC-119BFDD33B/'
        },
        {
          title: 'Machine Learning in Python',
          desc: 'Complete Certification',
          issuer: '365 Data Science',
          color: 'from-blue-500 to-cyan-500',
          icon: 'fa-laptop-code',
          link: 'https://learn.365datascience.com/certificates/CC-62AB92E1F1/'
        },
        {
          title: 'LLM Engineering in Practice',
          desc: 'Streamlit and OpenAI',
          issuer: '365 Data Science',
          color: 'from-blue-500 to-cyan-500',
          icon: 'fa-robot',
          link: 'https://learn.365datascience.com/certificates/CC-5DC2592C78/'
        },
        {
          title: 'Associate Data Engineer',
          desc: 'Professional Certification',
          issuer: 'DataCamp',
          color: 'from-emerald-500 to-green-500',
          icon: 'fa-cogs',
          link: 'https://www.datacamp.com/certificate/DEA0011781901407'
        },
        {
          title: 'SQL and Relational Databases 101',
          desc: 'Foundational Certification',
          issuer: 'IBM SkillsBuild',
          color: 'from-indigo-500 to-blue-500',
          icon: 'fa-database',
          link: 'https://courses.skillsbuild.skillsnetwork.site/certificates/cba9db5908e84d5a930ce014423f3a14'
        },
      ],"""

fr_cert_items = """      items: [
        {
          title: 'Oracle Certified Professional',
          desc: 'Java SE 17 Developer',
          issuer: 'Oracle',
          color: 'from-red-500 to-orange-500',
          icon: 'fa-certificate',
          link: 'https://drive.google.com/file/d/16E4BoLmEUePhy7nb0QWRwk2-hqi5j65s/view?usp=sharing'
        },
        {
          title: 'Oracle Cloud Database Services',
          desc: '2025 Professionnel',
          issuer: 'Oracle',
          color: 'from-red-500 to-orange-500',
          icon: 'fa-database',
          link: 'https://drive.google.com/file/d/1butD50sso6Xx-QhMLTZGEWuOeQQnJp4I/view?usp=sharing'
        },
        {
          title: 'Oracle Cloud AI Foundations',
          desc: '2025 Associate',
          issuer: 'Oracle',
          color: 'from-red-500 to-orange-500',
          icon: 'fa-cloud',
          link: 'https://drive.google.com/file/d/1ihDSYtbkIhF1DVvEd1uyWCodt0vHnH6p/view?usp=sharing'
        },
        {
          title: 'Oracle Cloud Infrastructure',
          desc: '2025 Data Science Professional',
          issuer: 'Oracle',
          color: 'from-red-500 to-orange-500',
          icon: 'fa-brain',
          link: 'https://drive.google.com/file/d/1U1D2W6U12t_e1le4feOV-lMleayjxtOQ/view?usp=sharing'
        },
        {
          title: 'Deep Learning avec TensorFlow 2',
          desc: 'Certification Complète',
          issuer: '365 Data Science',
          color: 'from-blue-500 to-cyan-500',
          icon: 'fa-brain',
          link: 'https://learn.365datascience.com/certificates/CC-119BFDD33B/'
        },
        {
          title: 'Machine Learning avec Python',
          desc: 'Certification Complète',
          issuer: '365 Data Science',
          color: 'from-blue-500 to-cyan-500',
          icon: 'fa-laptop-code',
          link: 'https://learn.365datascience.com/certificates/CC-62AB92E1F1/'
        },
        {
          title: 'LLM Engineering en Pratique',
          desc: 'Streamlit et OpenAI',
          issuer: '365 Data Science',
          color: 'from-blue-500 to-cyan-500',
          icon: 'fa-robot',
          link: 'https://learn.365datascience.com/certificates/CC-5DC2592C78/'
        },
        {
          title: 'Ingénieur Data Associé',
          desc: 'Certification Professionnelle',
          issuer: 'DataCamp',
          color: 'from-emerald-500 to-green-500',
          icon: 'fa-cogs',
          link: 'https://www.datacamp.com/certificate/DEA0011781901407'
        },
        {
          title: 'SQL et Bases de Données 101',
          desc: 'Certification de Base',
          issuer: 'IBM SkillsBuild',
          color: 'from-indigo-500 to-blue-500',
          icon: 'fa-database',
          link: 'https://courses.skillsbuild.skillsnetwork.site/certificates/cba9db5908e84d5a930ce014423f3a14'
        },
      ],"""

en_proj_items = """      items: [
        {
          title: 'Collaborative NLP Annotation Platform',
          desc: 'A collaborative data-labeling platform with automated arbitrage to ensure high-quality ground-truth labels for NLP models.',
          tags: ['React', 'FastAPI', 'Hugging Face', 'Python'],
          category: 'ai',
          featured: true,
          icon: 'fa-comments',
          github: 'https://github.com/SALMASAID1/nlp-annotation-platform',
        },
        {
          title: 'TaaSim — Urban Mobility Platform',
          desc: 'AI demand forecasting pipeline using PySpark MLlib and real-time Kappa Architecture with Kafka, Flink, and Cassandra.',
          tags: ['PySpark', 'Kafka', 'Flink', 'Cassandra'],
          category: 'data',
          featured: true,
          icon: 'fa-taxi',
          github: 'https://github.com/SALMASAID1/TaaSim-casablanca',
        },
        {
          title: 'Job Intelligent Matching Engine',
          desc: 'Semantic matching engine leveraging Gemini 1.5 Flash, BERT embeddings, and FAISS for candidate-job recommendation.',
          tags: ['Gemini', 'BERT', 'FAISS', 'Airflow'],
          category: 'ai',
          featured: true,
          icon: 'fa-briefcase',
          github: 'https://github.com/SALMASAID1/job-intellegent',
        },
        {
          title: 'Real-Time Weapon Detection',
          desc: 'Custom deep learning pipeline with YOLO backbone and SAHI for context-aware red alert system in video streams.',
          tags: ['YOLO', 'Deep Learning', 'Computer Vision', 'React'],
          category: 'ai',
          featured: true,
          icon: 'fa-shield-alt',
          github: 'https://github.com/SALMASAID1/Real-Time-Weapon-Detection-Context-Aware-Red-Alert-System',
        },
        {
          title: 'Big Data Procurement Pipeline',
          desc: 'Scalable data pipeline for procurement analytics built with Apache Spark and Big Data technologies.',
          tags: ['Apache Spark', 'Big Data', 'Hadoop'],
          category: 'data',
          icon: 'fa-warehouse',
          github: 'https://github.com/SALMASAID1/Procurement-Data-Pipeline',
        },
        {
          title: 'XouDouQi Game Engine',
          desc: 'Implementation of the traditional Chinese board game XouDouQi (Jungle) with intelligent agents and intuitive UI.',
          tags: ['Java', 'Algorithms', 'Game Development'],
          category: 'all',
          icon: 'fa-gamepad',
          github: 'https://github.com/SALMASAID1/XouDouQi',
        },
        {
          title: 'Disease Management & Stats',
          desc: 'Web application for managing medical statistics and tracking disease propagation patterns using data analytics.',
          tags: ['Data Analytics', 'Web Development', 'Healthcare'],
          category: 'data',
          icon: 'fa-heartbeat',
          github: 'https://github.com/SALMASAID1/Disease-Management-and-Medical-Statistics-website',
        },
      ],"""

fr_proj_items = """      items: [
        {
          title: 'Plateforme d\\'Annotation NLP',
          desc: 'Plateforme collaborative de labellisation de données avec arbitrage automatisé pour assurer la qualité des modèles NLP.',
          tags: ['React', 'FastAPI', 'Hugging Face', 'Python'],
          category: 'ai',
          featured: true,
          icon: 'fa-comments',
          github: 'https://github.com/SALMASAID1/nlp-annotation-platform',
        },
        {
          title: 'TaaSim — Plateforme de Mobilité',
          desc: 'Pipeline de prévision de la demande IA via PySpark MLlib et Architecture Kappa temps réel (Kafka, Flink, Cassandra).',
          tags: ['PySpark', 'Kafka', 'Flink', 'Cassandra'],
          category: 'data',
          featured: true,
          icon: 'fa-taxi',
          github: 'https://github.com/SALMASAID1/TaaSim-casablanca',
        },
        {
          title: 'Moteur de Matching Job Intelligent',
          desc: 'Moteur de matching sémantique utilisant Gemini 1.5 Flash, embeddings BERT et FAISS pour recommandation candidat-emploi.',
          tags: ['Gemini', 'BERT', 'FAISS', 'Airflow'],
          category: 'ai',
          featured: true,
          icon: 'fa-briefcase',
          github: 'https://github.com/SALMASAID1/job-intellegent',
        },
        {
          title: 'Détection d\\'Armes en Temps Réel',
          desc: 'Pipeline deep learning personnalisé avec YOLO et SAHI pour système d\\'alerte contextuel sur flux vidéo.',
          tags: ['YOLO', 'Deep Learning', 'Computer Vision', 'React'],
          category: 'ai',
          featured: true,
          icon: 'fa-shield-alt',
          github: 'https://github.com/SALMASAID1/Real-Time-Weapon-Detection-Context-Aware-Red-Alert-System',
        },
        {
          title: 'Pipeline Big Data Approvisionnement',
          desc: 'Pipeline de données évolutif avec Apache Spark et technologies Big Data.',
          tags: ['Apache Spark', 'Big Data', 'Hadoop'],
          category: 'data',
          icon: 'fa-warehouse',
          github: 'https://github.com/SALMASAID1/Procurement-Data-Pipeline',
        },
        {
          title: 'Moteur de Jeu XouDouQi',
          desc: 'Implémentation du jeu de plateau traditionnel chinois XouDouQi avec agents intelligents et UI intuitive.',
          tags: ['Java', 'Algorithmes', 'Développement de Jeux'],
          category: 'all',
          icon: 'fa-gamepad',
          github: 'https://github.com/SALMASAID1/XouDouQi',
        },
        {
          title: 'Gestion de Maladies & Stats',
          desc: 'Application web pour la gestion des statistiques médicales et le suivi des modèles de propagation des maladies.',
          tags: ['Data Analytics', 'Web Development', 'Santé'],
          category: 'data',
          icon: 'fa-heartbeat',
          github: 'https://github.com/SALMASAID1/Disease-Management-and-Medical-Statistics-website',
        },
      ],"""

import re

# Split the content into English and French blocks to avoid regex duplicate match collision
parts = content.split("/* ====== FRENCH ====== */")
en_part = parts[0]
fr_part = parts[1]

# 1. EN Projects
pattern_en_proj = r"projects: \{[\s\S]*?items: \[([\s\S]*?)\],\s*code: 'GitHub'"
en_part = re.sub(pattern_en_proj, "projects: {\n      tag: 'Projects',\n      title: 'Featured Projects',\n      filters: ['All', 'AI & ML', 'Data Engineering'],\n" + en_proj_items + "\n      code: 'GitHub'", en_part, count=1)

# 2. EN Certifications
pattern_en_cert = r"certifications: \{\s*tag: 'Certifications',\s*title: 'Certifications',\s*items: \[([\s\S]*?)\],\s*\},\s*contact:"
en_part = re.sub(pattern_en_cert, "certifications: {\n      tag: 'Certifications',\n      title: 'Certifications',\n" + en_cert_items + "\n    },\n    contact:", en_part, count=1)

# 3. FR Projects
pattern_fr_proj = r"projects: \{\s*tag: 'Projets',\s*title: 'Projets Réalisés',\s*filters: \['Tous', 'IA & ML', 'Data Engineering'\],\s*items: \[([\s\S]*?)\],\s*code: 'GitHub'"
fr_part = re.sub(pattern_fr_proj, "projects: {\n      tag: 'Projets',\n      title: 'Projets Réalisés',\n      filters: ['Tous', 'IA & ML', 'Data Engineering'],\n" + fr_proj_items + "\n      code: 'GitHub'", fr_part, count=1)

# 4. FR Certifications
pattern_fr_cert = r"certifications: \{\s*tag: 'Certifications',\s*title: 'Certifications',\s*items: \[([\s\S]*?)\],\s*\},\s*contact:"
fr_part = re.sub(pattern_fr_cert, "certifications: {\n      tag: 'Certifications',\n      title: 'Certifications',\n" + fr_cert_items + "\n    },\n    contact:", fr_part, count=1)

content = "/* ====== FRENCH ====== */".join([en_part, fr_part])

with open('src/data/content.js', 'w', encoding='utf-8') as f:
    f.write(content)

