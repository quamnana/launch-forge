# Launch Forge

Launch Forge is a comprehensive web application designed to streamline the process of launching and managing startup projects. It provides a suite of tools for entrepreneurs and project managers to create, edit, and manage their projects efficiently. The application leverages modern web technologies to deliver a seamless and responsive user experience.

## Features

- **User Authentication**: Secure user authentication using **NextAuth** for managing user sessions and access control.
- **Startup Management:** Tools for creating, editing, and managing startup projects, including detailed startup descriptions and timelines.
- **Responsive Design:** Fully responsive design using **Tailwind CSS**, ensuring a consistent user experience across all devices.
- **Custom Theming:** Customizable themes with support for dark mode and various color schemes.
- **Sanity Integration:** Integration with Sanity for managing and displaying rich content, including images and text.
- **Styled Components:** Utilization of styled-components for writing CSS in JavaScript, enabling dynamic styling based on component state.
- **Real-time Updates:** Real-time updates and notifications to keep users informed about project changes and updates.
- Fast and optimized development with Next.js
- Automatic font optimization with [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
- Easy deployment with Vercel
- Hot-reloading for instant feedback during development

## Technologies Used

- **Nextjs and React**: A JavaScript library for building user interfaces.
- **Tailwind CSS:** A utility-first CSS framework for rapidly building custom designs.
- **TypeScript:** A statically typed superset of JavaScript that enhances code quality and maintainability.
- **Sanity:** A headless CMS for managing structured content.
- **ShadCn:** A library for styling React components using tagged template literals.
- **NextAuth:** An authentication library for Next.js applications.
- **Sentry:** Bug tracing and performance tracking
- **Zod:** TypeScript library for type validation

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Setting Up

To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/launch-forge.git
   ```
2. Navigate to the project directory:
   ```bash
   cd launch-forge
   ```
3. Install the dependencies:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

4. Set up environment variables: Create a `.env.local` file in the root directory and add the necessary environment variables. Example:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your-sanity-project-id
NEXT_PUBLIC_SANITY_DATASET=your-sanity-dataset
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-nextauth-secret
```

5. To start the development server, run:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

6. To build the project for production, run:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

7. To start the production server, run:

```bash
npm start
# or
yarn start
# or
pnpm start
```

## Project Structure

```markdown
launch-forge/
├── app/
│ ├── components/ # React components
│ ├── pages/ # Next.js pages
│ ├── styles/ # Global styles and CSS files
│ ├── utils/ # Utility functions
│ └── ... # Other directories and files
├── public/ # Public assets
├── sanity/ # Sanity configuration and schemas
├── .env.local # Environment variables
├── package.json # Project dependencies and scripts
├── tailwind.config.ts # Tailwind CSS configuration
└── tsconfig.json # TypeScript configuration
```

## Customization

### Tailwind CSS Configuration

The Tailwind CSS configuration is located in tailwind.config.ts. You can customize the theme, plugins, and other settings as needed.

### Sanity Configuration

The Sanity configuration and schemas are located in the sanity directory. You can customize the schemas to match your content structure.

## Rendering Features Used

1. **Server-Side Rendering (SSR):** SSR allows you to render pages on the server at request time. This is useful for pages that require dynamic data fetching and need to be SEO-friendly.

2. **Static Site Generation (SSG):** SSG allows you to generate static HTML pages at build time. This is useful for pages that can be pre-rendered and do not require frequent updates.

3. **Incremental Static Regeneration (ISR):** ISR allows you to update static pages after they have been built. This is useful for pages that need to be updated periodically without rebuilding the entire site.

4. **Client-Side Rendering (CSR):** CSR allows you to fetch and render data on the client side after the initial page load. This is useful for pages that require user interaction or real-time updates.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

- Fork the repository.
- Create a new branch (git checkout -b feature/your-feature).
- Make your changes.
- Commit your changes (git commit -m 'Add some feature').
- Push to the branch (git push origin feature/your-feature).
- Open a pull request.
