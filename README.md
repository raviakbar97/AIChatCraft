# AI ChatBot Landing Page

A sleek, modern landing page for AI chatbot creation services with a glassy black and white UI theme.

## Features

- **Modern Glassy UI**: Black and white glassmorphism design
- **Responsive Design**: Works perfectly on all devices
- **Interactive Chat Demo**: Mock AI chat interface
- **Contact Features**: WhatsApp integration and AI chat
- **Pricing Section**: Clear, transparent pricing tiers
- **Feature Showcase**: Highlighted key benefits

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Icons**: Lucide React
- **UI Components**: Custom glassy components

## Project Structure

```
ai-chatbot-landing/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles & glassy UI
├── public/                 # Static assets (if needed)
├── .eslintrc.json          # ESLint config
├── next.config.js          # Next.js config
├── package.json            # Dependencies
├── postcss.config.js       # PostCSS config
├── tailwind.config.ts      # Tailwind config
└── tsconfig.json           # TypeScript config
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd ai-chatbot-landing
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Colors & Theme

The glassy UI theme is defined in `app/globals.css`. You can customize:

- Background: `--background`
- Foreground: `--foreground`
- Glass background: `--glass-bg`
- Glass border: `--glass-border`

### Sections

The landing page includes these sections:

1. **Hero**: Main value proposition
2. **Stats Bar**: Key metrics
3. **Features**: 6 feature cards
4. **Pricing**: 3-tier pricing
5. **Chat Demo**: Interactive mock AI
6. **Contact**: Multiple contact options
7. **Footer**: Navigation and copyright

### Chat Demo

The chat demo in `page.tsx` is currently a mock interface. To make it functional:

1. Replace the mock chat component with your AI backend
2. Integrate with your preferred AI service (OpenAI, custom model, etc.)
3. Add real-time messaging functionality

### WhatsApp Integration

The WhatsApp button is currently a placeholder. To make it functional:

```tsx
// Replace the button with:
<a href="https://wa.me/YOUR_NUMBER?text=Hi%20I'm%20interested%20in%20AI%20chatbot%20services" 
   target="_blank" 
   rel="noopener noreferrer"
   className="...">
  Chat on WhatsApp
</a>
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy

### Other Platforms

The app is compatible with:
- Netlify
- Railway
- AWS Amplify
- Any Node.js hosting

## Accessibility

- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios

## Performance

- Optimized for fast loading
- Minimal dependencies
- Efficient CSS with Tailwind
- Next.js optimizations included

## Support

For custom features or modifications:
- Add your AI backend integration
- Customize the design in `globals.css`
- Modify content in `page.tsx`
- Add new sections as needed

## License

MIT License - feel free to use this template for your business.