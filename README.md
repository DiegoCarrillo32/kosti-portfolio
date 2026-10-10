# Portfolio - Vibecoded with Antigravity 🚀

Welcome to my personal portfolio, a modern web application built with cutting-edge technologies and an AI-driven development workflow.

## 🤖 The AI-Driven Approach (Vibecoding)

This project was built using a **"Vibecoding"** philosophy—a collaborative process between human creativity and AI intelligence. By pair programming with **Antigravity** (powered by Google's Gemini), I was able to:

- **Accelerate Development**: Rapidly prototype components, refactor code, and implement complex features like internationalization and animations in record time.
- **Focus on Design & Logic**: Spend less time on boilerplate and more time refining the user experience, accessibility, and visual aesthetics.
- **Iterate Instantly**: Test ideas, fix bugs, and polish the UI through a seamless conversational interface.

The result is a portfolio that reflects my skills not just in coding, but in leveraging modern AI tools to build better software, faster.

## 🛠️ Tech Stack

This project leverages the latest web technologies for performance, scalability, and developer experience:

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Core**: [React 19](https://react.dev/) & [TypeScript](https://www.typescriptlang.org/)
- **Styling**:
  - [Chakra UI](https://chakra-ui.com/) (Component Library)
  - [Tailwind CSS v4](https://tailwindcss.com/) (Utility Classes)
  - [Framer Motion](https://www.framer.com/motion/) (Animations)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Internationalization**: [next-intl](https://next-intl-docs.vercel.app/) (English & Spanish support)
- **Theme Management**: [next-themes](https://github.com/pacocoursey/next-themes) (Dark/Light mode)

## ⚡️ Key Features

- **Bilingual Support**: Seamlessly switch between English and Spanish.
- **Dark Mode**: Fully responsive dark/light theme with persistent preference settings.
- **Interactive UI**: Smooth animations, hover effects, and a dynamic "scramble" loader for stats.
- **Live GitHub Stats**: Fetches real-time commit data from GitHub.
- **Project Previews**: Embedded iframe previews for showcased projects.
- **Switchable CV Designs**: Pick the whole look of the CV from the navbar: the Classic design or Crab Crew, a pixel-art design where every job, project and skill is a crab. Share a style with `?design=crab-crew`.

## 🚀 How to Run

1.  **Clone the repository**:

    ```bash
    git clone https://github.com/DiegoCarrillo32/kosti-portfolio.git
    cd kosti-portfolio
    ```

2.  **Install dependencies**:

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Start the development server**:

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

4.  **Open your browser**:
    Navigate to [http://localhost:3000](http://localhost:3000) to see the application running.

## 🎨 CV Designs

Each CV design is a full page under `designs/<id>/` that renders the same content (`content/cv.ts` plus the `messages/*.json` text) in its own style. The visitor's choice lives in the `cv-design` cookie, so the server renders the right design on the first paint.

To add a design:

1. Add its id to `DESIGN_IDS` in `designs/ids.ts`.
2. Create `designs/<id>/index.tsx`, a default-exported page with its own nav, footer and a design switcher built on `useDesign()` from `designs/DesignProvider.tsx`.
3. Register it in `designs/registry.tsx`.
4. Add its display name under `Designs.<id>` in `messages/en.json` and `messages/es.json`.
5. Scope all of its CSS under `[data-design="<id>"]` so it never leaks into other designs.

The Crab Crew design vendors its design system in `designs/crab-crew/vendor/`; see the header of `crab-crew.js` before updating it.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
