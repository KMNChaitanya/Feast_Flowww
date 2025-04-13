# FeastFlow

Welcome to **FeastFlow**, a web application designed to connect surplus food with those in need, reducing food waste and combating hunger. Built with React, this platform enables donors (restaurants, individuals) to share excess food and non-governmental organizations (NGOs) to receive and distribute it efficiently. With features like real-time tracking, gamification, and a user-friendly interface, FeastFlow fosters a sustainable and compassionate community.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [Acknowledgments](#acknowledgments)

## Features

- **Donation Management**: Allow users to donate surplus food via a simple interface.
- **NGO Support**: Enable NGOs to request and receive food donations with real-time updates.
- **Dashboard**: Track donations and impact with analytics and gamification (badges, points).
- **Authentication**: Secure login and profile management with token-based authentication.
- **Static Pages**: Informative sections like "Who We Are" and "What We Do" with smooth scrolling navigation.
- **Dynamic Hero Section**: Engaging hero section with a sliding background image animation.
- **Responsive Design**: Optimized for various screen sizes with styled-components.

## Tech Stack

- **Frontend**: React, React Router, styled-components, Axios
- **Styling**: CSS-in-JS with styled-components
- **State Management**: React useState, useEffect
- **Backend**: Node.js/Express (assumed for API integration)
- **APIs**: Custom endpoints for authentication and donations
- **Development Tools**: ESLint, npm

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/feastflow.git
cd feastflow
```

### 2. Install Dependencies

Ensure you have Node.js and npm installed. Then run:

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory. Add your backend API URL:

```env
REACT_APP_API_URL=http://localhost:5000
```

### 4. Start the Development Server

```bash
npm start
```

Open `http://localhost:3000` in your browser to see the app.

### 5. Build for Production

```bash
npm run build
```

This creates an optimized build in the `build` folder.

## Usage

- **Home Page**: View the hero section, features, "Who We Are," and "What We Do" sections.
- **Login**: Access the app with a token stored in `localStorage` to navigate to protected routes (e.g., `/donate`, `/ngo`, `/dashboard`).
- **Donate Food**: Logged-in users can donate food via the `/donate` page.
- **NGO Section**: Logged-in NGOs can request food via the `/ngo` page.
- **Dashboard**: View donation statistics and gamification progress.
- **Profile**: Manage user details after logging in.

Navigate using the header links, which scroll to sections on the homepage or redirect to other pages.

## Project Structure

```
feastflow/
  public/
    images/           # Static images (e.g., image1.jpg, image2.jpg, image3.jpg)
    index.html
  src/
    components/       # React components
      Header.jsx      # Navigation bar with profile and login
      HeroSection.jsx # Hero section with animated background
      WhoWeAre.jsx    # About us section
      WhatWeDo.jsx    # Mission and process section
      Donate.jsx      # Donation form
      NGO.jsx         # NGO donation requests
      Dashboard.jsx   # User dashboard
      ...             # Other components
    App.js            # Main app routing
    index.js          # Entry point
  .env                # Environment variables
  package.json        # Project dependencies and scripts
  README.md           # This file
```

## API Endpoints

### Authentication

- `GET /api/auth/profile` – Fetch user profile (requires token)

### Donations

- `GET /api/donations` – Retrieve available donations (requires token)

> **Note**: Add `POST` endpoints for donations or requests as needed in your backend.

Ensure your backend is running at the URL specified in `.env` (e.g., `http://localhost:5000`).

## Contributing

1. Fork the repository.
2. Create a new branch:

```bash
git checkout -b feature-branch
```

3. Make your changes and commit them:

```bash
git commit -m "Add new feature"
```

4. Push to the branch:

```bash
git push origin feature-branch
```

5. Open a Pull Request with a clear description of your changes.

Please adhere to the existing code style and include tests if applicable.

## License

This project is licensed under the MIT License - see the `LICENSE.md` file for details.

## Contact

**Author**: [Your Name or Username]  
**Email**: [your.email@example.com]  
**GitHub**: [https://github.com/your-username]

For questions or feedback, feel free to open an issue or reach out directly.

## Deployment

### 1. Build the Project

```bash
npm run build
```

This generates a `build` folder with optimized static files.

### 2. Choose a Hosting Service

Use platforms like **Vercel**, **Netlify**, or **GitHub Pages**.

For Vercel or Netlify, drag and drop the `build` folder or connect your Git repository.

### 3. Configure Environment Variables

Set the `REACT_APP_API_URL` environment variable in your hosting provider’s dashboard to point to your backend (e.g., `https://your-backend-api.com`).

### 4. Deploy

Follow the hosting provider’s deployment guide.

Example with Netlify:

```bash
netlify deploy --prod
```

Ensure your backend API is also deployed and accessible.

## Troubleshooting

### Images Not Loading

- Verify image files exist in `public/images/` with correct filenames (case-sensitive).
- Check the browser console for 404 errors and update paths in `HeroSection.jsx` if needed.

### API Requests Failing

- Ensure the backend is running at the URL specified in `.env` (e.g., `http://localhost:5000`).
- Check token authentication in `localStorage` and console logs for `401/403` errors.

### Scroll Not Working

- Confirm section ids (e.g., `who-we-are`, `what-we-do`) match in `Header.jsx` and respective components.
- Test with a longer `setTimeout` delay (e.g., 200ms) if navigation is slow.

### Report Issues

Open an issue on the GitHub repository with details (error messages, steps to reproduce).

## Acknowledgments

- **Inspiration**: Thanks to the global movement against food waste and hunger.
- **Libraries**: Gratitude to the creators of React, styled-components, and React Router.
- **Contributors**: Special thanks to early contributors and testers who helped shape FeastFlow.
- **Resources**: Image assets and design ideas inspired by open-source communities.
