export const BADGES = {
  // Languages
  Python: "https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white",
  R: "https://img.shields.io/badge/R-%23276DC3.svg?style=flat-square&logo=r&logoColor=white",
  
  // Databases
  SQL: "https://img.shields.io/badge/SQL-336791?style=flat-square&logo=postgresql&logoColor=white",
  
  // Data Processing
  Pandas: "https://img.shields.io/badge/Pandas-150458?style=flat-square&logo=pandas&logoColor=white",
  PySpark: "https://img.shields.io/badge/PySpark-E25A1C?style=flat-square&logo=apachespark&logoColor=white",
  
  // ML/AI Platforms
  Databricks: "https://img.shields.io/badge/Databricks-FF3621?style=flat-square&logo=databricks&logoColor=white",
  
  // ML Libraries
  spaCy: "https://custom-icon-badges.demolab.com/badge/spaCy-09A3D5?logo=spacy&logoColor=white&style=flat-square",
  XGBoost: "https://custom-icon-badges.demolab.com/badge/XGBoost-003366?logo=xgboost&logoColor=white&style=flat-square",
  Pydantic: "https://img.shields.io/badge/Pydantic-E92063?style=flat-square&logo=Pydantic&logoColor=white",
  
  // Backend
  FastAPI: "https://img.shields.io/badge/FastAPI-009485?style=flat-square&logo=fastapi&logoColor=white",
  LangChain: "https://img.shields.io/badge/LangChain-1c3c3c?style=flat-square&logo=langchain&logoColor=white",
  
  // DevOps
  Docker: "https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white",
  Kubernetes: "https://img.shields.io/badge/Kubernetes-326CE5?style=flat-square&logo=kubernetes&logoColor=white",
  OpenShift: "https://img.shields.io/badge/OpenShift-EE0000?style=flat-square&logo=redhat&logoColor=white",
  
  // Cloud
  AWS: "https://custom-icon-badges.demolab.com/badge/AWS-%23FF9900.svg?logo=aws&logoColor=white&style=flat-square",
  "AWS Lambda": "https://custom-icon-badges.demolab.com/badge/AWS%20Lambda-%23FF9900.svg?logo=aws-lambda&logoColor=white",
  "AWS ECR": "https://img.shields.io/badge/AWS%20ECR-FF9900?style=flat-square&logo=docker&logoColor=white",
  
  // BI/Visualization
  "Looker Studio": "https://img.shields.io/badge/Looker%20Studio-4285F4?logo=looker&logoColor=white&style=flat-square",
  "Power BI": "https://custom-icon-badges.demolab.com/badge/Power%20BI-F1C912?logo=power-bi&logoColor=fff&style=flat-square",
  Tableau: "https://custom-icon-badges.demolab.com/badge/Tableau-0176D3?logo=tableau&logoColor=fff&style=flat-square",
  
  // Project Management
  Miro: "https://img.shields.io/badge/Miro-050038?logo=miro&logoColor=fff&style=flat-square",
  Trello: "https://img.shields.io/badge/Trello-0052CC?logo=trello&logoColor=fff&style=flat-square",
  Jira: "https://img.shields.io/badge/Jira-0052CC?logo=jira&logoColor=fff&style=flat-square",
  
  // Social/Communication
  Telegram: "https://img.shields.io/badge/Telegram-2CA5E0?style=flat-square&logo=telegram&logoColor=white",
  Instagram: "https://img.shields.io/badge/Instagram-%23E4405F.svg?style=flat-square&logo=Instagram&logoColor=white",
  
  // Package Management
  PyPI: "https://img.shields.io/badge/PyPI-3775A9?style=flat-square&logo=pypi&logoColor=white",
} as const;

export type BadgeName = keyof typeof BADGES;

export const getBadge = (name: BadgeName): string | undefined => {
  return BADGES[name];
};
