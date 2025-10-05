# Product Requirements Document (PRD)
## sreedeepnarayandotcom - Personal Portfolio & Blog

**Version:** 1.0  
**Date:** October 2025  
**Author:** Sreedeep Narayan  
**Status:** Draft

---

## 1. Executive Summary

### 1.1 Purpose
Create a unified digital presence that authentically represents Sreedeep Narayan as a multifaceted individual - combining technical expertise, creative expression, and personal storytelling into a cohesive online identity.

### 1.2 Problem Statement
Currently, my digital presence is fragmented across multiple platforms:
- Technical work on GitHub (disconnected from personal brand)
- Blog on WordPress (limited customization and integration)
- Photography and drone content scattered or unshared
- No unified narrative connecting professional and personal sides
- Missing opportunities to showcase full range of capabilities

### 1.3 Solution
A custom-built, modern website that serves as a central hub for all aspects of my digital identity, seamlessly blending professional achievements with personal creative expression.

---

## 2. Goals & Objectives

### 2.1 Primary Goals
1. **Unified Identity**: Create a single destination that tells my complete story
2. **Professional Credibility**: Showcase technical expertise to potential clients/employers
3. **Creative Expression**: Share personal writing, photography, and artistic work
4. **Authentic Connection**: Build genuine connections through vulnerable, honest content
5. **Sustainable Platform**: Build something I'll actually maintain and evolve

### 2.2 Success Metrics
- **Launch Metrics** (3 months)
  - [ ] Website live with custom domain
  - [ ] 20+ blog posts migrated from WordPress
  - [ ] 5+ technical projects showcased
  - [ ] 50+ photographs organized in galleries
  
- **Engagement Metrics** (6 months)
  - [ ] 500+ unique monthly visitors
  - [ ] 50+ blog subscribers
  - [ ] 10+ meaningful connections made
  - [ ] 3+ professional inquiries received

- **Growth Metrics** (1 year)
  - [ ] 2000+ unique monthly visitors
  - [ ] 200+ blog subscribers
  - [ ] Published 24+ new blog posts
  - [ ] Portfolio leads to new opportunities

---

## 3. User Personas

### 3.1 Primary Personas

**The Technical Recruiter/Client**
- Needs: Quick assessment of technical skills, project experience
- Goals: Determine if Sreedeep fits their role/project
- Pain Points: Generic portfolios, lack of real project details
- Solution: Clear project case studies with technical depth

**The Blog Reader**
- Needs: Authentic, relatable content about life and growth
- Goals: Find connection and insights in personal stories
- Pain Points: Surface-level content, lack of vulnerability
- Solution: Deep, honest writing from "Happy for Little Things"

**The Creative Enthusiast**
- Needs: Visual inspiration, artistic perspective
- Goals: Discover unique photography and drone perspectives
- Pain Points: Instagram's limitations, scattered galleries
- Solution: Curated galleries with stories behind the shots

### 3.2 Secondary Personas

**The Peer Developer**
- Looking for technical insights, open-source contributions
- Wants to understand approach and philosophy

**The Potential Collaborator**
- Seeking creative partnership opportunities
- Needs to understand work style and values

---

## 4. Feature Requirements

### 4.1 Must Have (MVP - Sprint 1-2)

#### Core Infrastructure
- [ ] Responsive design (mobile-first)
- [ ] Fast page load (<2s)
- [ ] SEO optimized structure
- [ ] Dark/light theme toggle
- [ ] Accessible (WCAG 2.1 AA compliant)

#### Navigation & Structure
- [ ] Clean navigation menu
- [ ] Footer with social links
- [ ] Search functionality (blog/projects)
- [ ] Breadcrumb navigation

#### Home Page
- [ ] Hero section with compelling introduction
- [ ] Brief professional/personal balance
- [ ] Latest blog posts (3-4)
- [ ] Featured projects (2-3)
- [ ] Call-to-action sections

#### About Page
- [ ] Personal story/journey
- [ ] Professional timeline
- [ ] Values and philosophy
- [ ] Current focus/"Now" section

#### Blog Section
- [ ] Blog listing with pagination
- [ ] Individual blog post pages
- [ ] Categories and tags
- [ ] Reading time estimates
- [ ] Related posts suggestions
- [ ] RSS feed

#### Work/Portfolio Section
- [ ] Project showcase grid
- [ ] Detailed project case studies
- [ ] Technical skills matrix
- [ ] GitHub integration
- [ ] Resume/CV download

### 4.2 Should Have (Sprint 3-4)

#### Photography Gallery
- [ ] Gallery with categories (landscapes, drone, street)
- [ ] Lightbox functionality
- [ ] EXIF data display (optional)
- [ ] Story/context for photo series

#### Enhanced Blog Features
- [ ] Comments system (consider Giscus)
- [ ] Newsletter subscription
- [ ] Social sharing buttons
- [ ] Print-friendly versions
- [ ] Blog post series support

#### Professional Features
- [ ] Testimonials section
- [ ] Services offered (if applicable)
- [ ] Speaking/workshop history
- [ ] Certifications and achievements

### 4.3 Nice to Have (Sprint 5+)

#### Advanced Features
- [ ] Blog post reactions/likes
- [ ] Interactive code demos
- [ ] Video content support
- [ ] Podcast episodes (if applicable)
- [ ] Travel map with photo pins

#### Analytics & Optimization
- [ ] Custom analytics dashboard
- [ ] A/B testing capability
- [ ] Performance monitoring
- [ ] Content recommendation engine

#### Community Features
- [ ] Member-only content
- [ ] Discussion forums
- [ ] Workshop/course platform
- [ ] Booking system for consultations

---

## 5. Technical Requirements

### 5.1 Technology Stack

#### Frontend
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + CSS Modules
- **Animation**: Framer Motion
- **State Management**: Zustand (if needed)

#### Content Management
- **Blog**: MDX files in repository
- **Images**: Cloudinary or Next.js Image Optimization
- **Data**: JSON/YAML files for structured content

#### Infrastructure
- **Hosting**: Vercel (primary) or Netlify
- **Domain**: sreedeepnarayan.com
- **CDN**: Included with Vercel/Netlify
- **Analytics**: Google Analytics 4 + Vercel Analytics

#### Development Tools
- **Version Control**: Git + GitHub
- **CI/CD**: GitHub Actions
- **Testing**: Jest + React Testing Library
- **Linting**: ESLint + Prettier
- **Pre-commit**: Husky + lint-staged

### 5.2 Performance Requirements
- **Lighthouse Score**: 90+ across all metrics
- **First Contentful Paint**: <1.5s
- **Time to Interactive**: <3s
- **Cumulative Layout Shift**: <0.1
- **Bundle Size**: <200KB initial JS

### 5.3 SEO Requirements
- **Meta Tags**: Dynamic Open Graph and Twitter Cards
- **Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Properly configured
- **Schema.org**: Structured data for articles and person
- **Canonical URLs**: Proper canonical tags

---

## 6. Content Requirements

### 6.1 Content Migration
- **WordPress Blog Posts**: 20+ posts to migrate
  - Convert to MDX format
  - Preserve publish dates
  - Maintain URL structure or redirects
  - Update internal links

### 6.2 New Content Needed
- **About Page**: 1000-1500 word personal story
- **Project Case Studies**: 5-8 detailed write-ups
- **Photography Galleries**: 
  - 50+ curated photos
  - 10+ drone shots
  - Captions and context
- **Home Page Copy**: Compelling hero text and CTAs

### 6.3 Content Guidelines
- **Tone**: Professional yet personal, authentic, vulnerable when appropriate
- **Voice**: First person, conversational, thoughtful
- **Style**: Clear, concise, jargon-free unless technically necessary
- **Imagery**: High-quality, optimized, meaningful

---

## 7. Design Requirements

### 7.1 Visual Identity
- **Color Palette**: 
  - Primary: Deep blue or teal (professionalism + creativity)
  - Secondary: Warm accent (orange/gold for human touch)
  - Neutral: Grays for text and backgrounds
  - Dark mode alternatives

- **Typography**:
  - Heading: Modern serif (Playfair Display or similar)
  - Body: Clean sans-serif (Inter or system fonts)
  - Code: Monospace (JetBrains Mono)

### 7.2 Design Principles
1. **Minimalist**: Clean, uncluttered, focus on content
2. **Intuitive**: Clear navigation, obvious actions
3. **Responsive**: Beautiful on all devices
4. **Accessible**: High contrast, readable fonts
5. **Memorable**: Unique touches that reflect personality

### 7.3 UI Components
- **Cards**: For blog posts and projects
- **Buttons**: Clear CTAs with hover states
- **Forms**: Clean, validated contact form
- **Gallery**: Masonry or grid layout
- **Navigation**: Sticky header with progress indicator

---

## 8. User Journey

### 8.1 First-Time Visitor (Recruiter)
1. Lands on home page from LinkedIn
2. Immediately sees professional credibility indicators
3. Clicks through to Work/Projects
4. Reviews 2-3 relevant case studies
5. Downloads resume or contacts directly

### 8.2 First-Time Visitor (Blog Reader)
1. Arrives via social media share
2. Reads blog post completely
3. Sees related posts
4. Explores About page to know author
5. Subscribes to newsletter

### 8.3 Returning Visitor
1. Direct navigation to blog
2. Checks latest posts
3. Explores new galleries
4. Shares content with others

---

## 9. Development Phases

### Phase 1: Foundation (Weeks 1-2)
- Project setup and configuration
- Basic layout and navigation
- Home and About pages
- Responsive design implementation

### Phase 2: Blog Platform (Weeks 3-4)
- MDX setup and configuration
- Blog listing and post pages
- Content migration from WordPress
- RSS and sitemap generation

### Phase 3: Portfolio (Weeks 5-6)
- Project showcase development
- Case study templates
- GitHub integration
- Skills and resume sections

### Phase 4: Creative Gallery (Weeks 7-8)
- Photography gallery implementation
- Image optimization pipeline
- Gallery categories and filters
- Lightbox functionality

### Phase 5: Polish & Launch (Weeks 9-10)
- Performance optimization
- SEO implementation
- Analytics setup
- Testing and bug fixes
- Domain setup and deployment

### Phase 6: Post-Launch (Ongoing)
- Content creation routine
- Feature iterations based on analytics
- Community building
- Regular updates and improvements

---

## 10. Constraints & Considerations

### 10.1 Constraints
- **Time**: 2-3 hours per week for development
- **Budget**: Minimal (domain + hosting only)
- **Content**: Need to maintain regular updates post-launch
- **Technical**: Must be maintainable by one person

### 10.2 Risks & Mitigation
- **Risk**: Scope creep leading to never launching
  - **Mitigation**: Strict MVP definition, time-boxed sprints
  
- **Risk**: Abandoning site after launch
  - **Mitigation**: Simple content management, scheduling tools
  
- **Risk**: Over-engineering the solution
  - **Mitigation**: Start simple, iterate based on real needs

### 10.3 Out of Scope (v1)
- E-commerce functionality
- User accounts/authentication
- Complex interactive features
- Mobile app
- Multi-language support

---

## 11. Success Definition

The project will be considered successful when:

1. **Technical Success**
   - Site is live at sreedeepnarayan.com
   - All core features functioning properly
   - Performance metrics met
   - Zero critical bugs

2. **Content Success**
   - All blog posts migrated
   - 5+ projects documented
   - Photography galleries populated
   - About story compelling and complete

3. **Personal Success**
   - Proud to share the site
   - Represents authentic self
   - Sustainable to maintain
   - Enables new connections

4. **Professional Success**
   - Generates professional inquiries
   - Showcases capabilities effectively
   - Differentiates from others
   - Opens new opportunities

---

## 12. Maintenance & Evolution

### 12.1 Content Cadence
- **Blog Posts**: 2 per month minimum
- **Photography**: 5-10 new images monthly
- **Projects**: Update quarterly
- **About**: Refresh annually

### 12.2 Technical Maintenance
- **Dependencies**: Update monthly
- **Backups**: Weekly automated
- **Performance**: Monitor weekly
- **Security**: Scan monthly

### 12.3 Future Vision (Year 2+)
- Expand into video content
- Create online courses/workshops
- Build community features
- Develop signature content series
- Establish thought leadership in specific areas

---

## Appendix A: Competitor Analysis

### Similar Personal Sites (Inspiration)
1. **Josh Comeau** (joshwcomeau.com) - Technical depth + personality
2. **Lee Robinson** (leerob.io) - Clean, technical, personal
3. **Tania Rascia** (taniarascia.com) - Balance of technical and personal
4. **Paul Stamatiou** (paulstamatiou.com) - Photography + tech

### Key Learnings
- Balance is crucial between professional and personal
- Regular content updates keep site alive
- Technical posts drive traffic, personal posts build connection
- Visual content increases engagement
- Simple, fast sites win over complex ones

---

## Appendix B: Technical Specifications

### API Routes Needed
- `/api/newsletter` - Newsletter subscription
- `/api/contact` - Contact form submission
- `/api/analytics` - Custom event tracking

### Data Models

```typescript
interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  updated?: string
  tags: string[]
  category: string
  readingTime: number
  featured: boolean
}

interface Project {
  slug: string
  title: string
  description: string
  tech: string[]
  github?: string
  live?: string
  featured: boolean
  caseStudy?: string
  images: string[]
}

interface Photo {
  id: string
  url: string
  thumbnail: string
  title: string
  description?: string
  location?: string
  date: string
  exif?: ExifData
  category: 'landscape' | 'drone' | 'street' | 'portrait'
}
```

---

*This document is a living document and will be updated as the project evolves.*