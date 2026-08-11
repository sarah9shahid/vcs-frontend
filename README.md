# VCS Web Platform — Frontend

A modern, responsive web application inspired by GitHub, built to showcase full-stack user control, developer profiles, dynamic contribution heatmaps, and repository management tools.

---

## 📹 Video Demo

> Watch a full walkthrough of the application below:

![App Walkthrough](https://github.com/user-attachments/assets/67818927-f8be-4601-ab56-45a89cf62441)


---

## 🌟 Key Features

* **Authentication & Protected Routes:** Seamless sign-in, session persistence, and client-side access control via React Context API.
* **Dashboard Interface:** Clean 3-column layout featuring suggested public repositories, user-owned repositories with live string filtering, and community events.
* **Developer Profile & Analytics:** Dynamic vector identicons generated from user handles and interactive contribution heatmaps built with `@uiw/react-heat-map`.
* **GitHub Dark Theme:** Styled using `@primer/react` design tokens and `@primer/octicons-react`.

---

## 🛠 Tech Stack

* **Frontend:** React 19, Vite, React Router v6
* **UI Components & Icons:** `@primer/react`, `@primer/octicons-react`
* **Visualizations:** `@uiw/react-heat-map`
* **HTTP Client:** Axios
* **Hosting & CI/CD:** AWS Amplify

---

## ☁️ Cloud Infrastructure & Deployment (AWS)

* **AWS Amplify:** Hosted using continuous deployment (CI/CD) pipelines configured with custom build scripts (`amplify.yml`) to manage React dependencies and Vite build outputs (`dist`).

---
