# Image Analysis with Azure AI

This React application allows users to analyze images using Azure Cognitive Services. Users can input an image URL to retrieve descriptions and tags.

## Features

- **Image Analysis**: Enter an image URL to get a caption and tags using Azure Cognitive Services.

## Prerequisites

- Node.js and npm installed.
- Azure account with access to Cognitive Services.
- GitHub account.

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/your-username/analyze-images-with-Azure-AI.git
cd analyze-images-with-Azure-AI


**Deployment with Azure Static Web Apps**
1. Create a New Azure Static Web App:
    Connect your GitHub repo.
    Build Preset: React

2. Set Up GitHub Actions:

  Ensure the workflow file
  (.github/workflows/azure-static-web-apps.yml) is configured.

3. Configure Environment Variables:
    Set REACT_APP_VISION_ENDPOINT and REACT_APP_VISION_API_KEY in Azure portal.

4. Deploy:
   Push your code to GitHub and let the GitHub Actions workflow deploy your app.

****Important Notes
Do not include your .env file in version control; add it to .gitignore.
Handle API keys securely.

# React basic
[Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/overview) allows you to easily build [React](https://reactjs.org/) apps in minutes. Use this repo with the [React quickstart](https://docs.microsoft.com/azure/static-web-apps/getting-started?tabs=react) to build and customize a new static site.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
