# Portfolio V2 - Architecture Documentation

## Overview
This portfolio has been refactored from a monolithic 1054-line component into a modular, scalable architecture following React and Next.js best practices.

## Project Structure

```
portfolio-v2/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Entry point - renders Portfolio component
│   └── globals.css        # Global styles + Tailwind
│
├── components/
│   ├── Portfolio.tsx      # Main orchestrator component
│   ├── layout/            # Layout components
│   │   └── Background.tsx # Animated background effects
│   ├── sections/          # Page sections (single responsibility)
│   │   ├── Hero.tsx       # Landing section with intro
│   │   ├── SelectedWork.tsx      # Projects listing
│   │   ├── TechnicalExpertise.tsx # Skills showcase
│   │   ├── Contact.tsx    # Contact information
│   │   └── Footer.tsx     # Footer with social links
│   └── ui/                # Reusable UI components
│       ├── ProjectCard.tsx    # Individual project card
│       └── ProjectModal.tsx   # Project detail modal
│
├── data/                  # Data layer (separated from UI)
│   ├── projects.ts        # Project information
│   └── skills.ts          # Skills and contact data
│
└── lib/                   # Utilities and types
    └── types.ts           # TypeScript interfaces
```

## Key Design Principles

### 1. Separation of Concerns
- **Data**: All data is in `/data` folder
- **Types**: TypeScript interfaces in `/lib/types.ts`
- **Components**: Each component has a single responsibility
- **Styles**: Tailwind utilities with custom CSS in globals.css

### 2. Component Hierarchy
```
Portfolio (Main Container)
├── Background (Visual Layer)
├── Hero (Section)
├── SelectedWork (Section)
│   └── ProjectCard (UI Component)
├── TechnicalExpertise (Section)
├── Contact (Section)
├── Footer (Section)
└── ProjectModal (UI Component)
```

### 3. Data Flow
```
data/projects.ts → SelectedWork → ProjectCard
                              ↓
                        ProjectModal
```

### 4. State Management
- Minimal state in `Portfolio.tsx` (only selectedProject)
- Local state in components where needed
- No prop drilling - clean component interfaces

## Benefits of This Architecture

### Maintainability
- **Small Files**: Largest component is ~200 lines
- **Clear Boundaries**: Each component has defined responsibilities
- **Easy Updates**: Change data without touching components

### Scalability
- **Add Features**: New sections can be added independently
- **Swap Components**: Easy to replace or update individual parts
- **Type Safety**: Full TypeScript coverage

### Performance
- **Code Splitting**: Components can be lazy loaded
- **Optimized Renders**: Smaller components = better React optimization
- **Clean Imports**: Only import what you need

### Developer Experience
- **Easy Navigation**: Clear folder structure
- **Reusability**: UI components can be used elsewhere
- **Testing**: Each component can be tested in isolation

## Adding New Features

### To Add a New Project:
1. Edit `/data/projects.ts`
2. Add logo to `/public/img/` if needed
3. Update logo map in `ProjectModal.tsx`

### To Add a New Section:
1. Create component in `/components/sections/`
2. Import in `Portfolio.tsx`
3. Add to render flow

### To Modify Styling:
1. Section-specific: Edit the component
2. Global changes: Edit `/app/globals.css`
3. Theme changes: Update Tailwind config

## Technologies Used
- **Next.js 15**: App Router for routing
- **React 19**: Component library
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: Animations
- **ESLint**: Code quality

## Best Practices Implemented
✅ Single Responsibility Principle  
✅ DRY (Don't Repeat Yourself)  
✅ Type Safety  
✅ Component Composition  
✅ Data/UI Separation  
✅ Responsive Design  
✅ Accessibility Considerations  
✅ Performance Optimization  

## Future Improvements
- Add unit tests for components
- Implement error boundaries
- Add loading states
- Create a theme system
- Add internationalization
- Implement analytics
- Add SEO optimization
- Create Storybook for components
