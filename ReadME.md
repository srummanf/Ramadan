# Ramadan Virtues Web Application

A modern, responsive React application showcasing the virtues and blessings of Ramadan. Built with React, TypeScript, and Tailwind CSS.

## 🌙 Features

- Responsive design that works on all devices
- Beautiful Islamic-themed UI components
- Interactive cards displaying Ramadan virtues
- Arabic typography integration
- Smooth animations and transitions
- Accessible and SEO-friendly structure

## 🚀 Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/ramadan-virtues-app.git
```

2. Navigate to the project directory:

```bash
cd ramadan-virtues-app
```

3. Install dependencies:

```bash
npm install
# or
yarn install
```

4. Start the development server:

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) to view the application

## 🛠️ Built With

- [React](https://reactjs.org/) - Frontend library
- [TypeScript](https://www.typescriptlang.org/) - Programming language
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Lucide React](https://lucide.dev/) - Icon library
- [Amiri Font](https://www.amirifont.org/) - Arabic typography

## 📦 Components

### RamadanCard

A reusable card component that displays virtues of Ramadan with:

- Title in English
- Arabic translation
- Descriptive content
- Overlay background image
- Hover animations

### Home

The main page component featuring:

- Hero section with Ramadan greeting
- Virtues of Ramadan section
- Blessings of Ramadan section
- Hadith quote section

## 🎨 Styling

The application uses Tailwind CSS for styling with a custom color palette:

- Primary: Emerald (green)
- Accent: Amber (gold)
- Text: Various shades of gray
- Backgrounds: White and emerald tints

## 🔧 Configuration

### TypeScript Image Declarations

Image imports are supported through a custom type declaration file:

```typescript
// src/types/images.d.ts
declare module '*.png' {
    const value: string;
    export default value;
}
```

## 📱 Responsive Design

The application is fully responsive with breakpoints:

- Mobile: Default
- Tablet: `md:` (768px)
- Desktop: `lg:` (1024px)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## 🙏 Acknowledgments

- Inspired by Islamic geometric patterns and architecture
- Arabic typography provided by Amiri Font
- Icons provided by Lucide React
- Built using [Bolt.new](https://bolt.new)
- Development assisted by [Cursor AI](https://cursor.sh/)
