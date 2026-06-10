const HelpData = [
  {
    id: "cat_001",
    title: "Getting Started",
    description: "Learn the basics of the DGA Design System",
    articles: [
      {
        id: "art_001",
        title: "What is the DGA Design System?",
        brief: "An overview of the DGA Design System and its core principles.",
        steps: [
          {
            heading: "Overview",
            body: "The DGA Design System is a comprehensive library of reusable UI components, design tokens, and guidelines built to ensure consistency across all DGA digital products.",
          },
          {
            heading: "Core Principles",
            body: null,
            list: [
              "Consistency — every component follows unified visual and behavioral patterns.",
              "Accessibility — all components meet WCAG 2.1 AA standards.",
              "Scalability — the system grows with your product needs.",
              "Arabic-first — RTL support is built in from day one.",
            ],
          },
          {
            heading: "What's Included",
            body: null,
            list: [
              "60+ ready-to-use UI components.",
              "A token system for colors, spacing, typography, and shadows.",
              "Usage guidelines and best practices.",
              "Figma design files and developer documentation.",
            ],
          },
        ],
      },
      {
        id: "art_002",
        title: "How to Install & Set Up",
        brief: "Step-by-step guide to installing the DGA Design System in your project.",
        steps: [
          {
            heading: "Step 1 — Install the package",
            body: "Open your terminal and run:",
            code: "npm install @dga/design-system",
          },
          {
            heading: "Step 2 — Import global styles",
            body: "In your project entry file (e.g. main.jsx), add:",
            code: "import '@dga/design-system/styles/global.css';",
          },
          {
            heading: "Step 3 — Wrap with the Provider",
            body: "Wrap your root component with DGAProvider to enable theming and design tokens.",
            code: "<DGAProvider>\n  <App />\n</DGAProvider>",
          },
          {
            heading: "Step 4 — Use components",
            body: "You're ready! Import any component from the library and start building.",
          },
        ],
      },
      {
        id: "art_003",
        title: "Quick Start Guide",
        brief: "Get up and running with your first DGA component in minutes.",
        steps: [
          {
            heading: "Create a button",
            code: "import { Button } from '@dga/design-system';\n\n<Button variant=\"primary\">Submit</Button>",
          },
          {
            heading: "Add a form input",
            code: "import { TextInput } from '@dga/design-system';\n\n<TextInput label=\"Full Name\" placeholder=\"Enter your name\" />",
          },
          {
            heading: "Use a card layout",
            code: "import { Card, CardBody } from '@dga/design-system';\n\n<Card>\n  <CardBody>Your content here</CardBody>\n</Card>",
          },
          {
            heading: "RTL / Arabic support",
            body: "All components support both LTR and RTL. Set dir=\"rtl\" on your root element to switch to Arabic layout.",
          },
        ],
      },
      {
        id: "art_004",
        title: "Design Principles",
        brief: "Understand the foundational principles behind the DGA Design System.",
        steps: [
          {
            heading: "Clarity",
            body: "Every interface should communicate its purpose instantly. Avoid ambiguity in labels, icons, and layouts. Users should never have to guess what an element does.",
          },
          {
            heading: "Efficiency",
            body: "Minimise the steps required to complete a task. Use smart defaults, inline validation, and progressive disclosure to reduce cognitive load.",
          },
          {
            heading: "Inclusivity",
            body: "Design for everyone — regardless of ability, language, or device. All components are tested with screen readers and keyboard navigation.",
          },
          {
            heading: "Trust",
            body: "Government services demand the highest level of trust. Use consistent visual language, clear error messages, and transparent processes to build user confidence.",
          },
        ],
      },
    ],
  },
  {
    id: "cat_002",
    title: "Components",
    description: "Detailed guides for every UI component",
    articles: [
      {
        id: "art_005",
        title: "Button Component",
        brief: "How to use buttons correctly with variants, sizes, and states.",
        steps: [
          {
            heading: "Variants",
            body: null,
            list: [
              "Primary — main actions (Submit, Save).",
              "Secondary — alternative actions (Cancel, Back).",
              "Danger — destructive actions (Delete, Remove).",
              "Ghost — low-emphasis actions (View, Details).",
            ],
          },
          {
            heading: "Sizes",
            body: null,
            list: [
              "Small (sm): 32px height — dense UIs.",
              "Medium (md): 40px height — default.",
              "Large (lg): 48px height — prominent CTAs.",
            ],
          },
          {
            heading: "Example usage",
            code: "<Button variant=\"primary\" size=\"md\" loading={isSubmitting}>\n  Submit Application\n</Button>",
          },
          {
            heading: "Best practices",
            body: "Use descriptive labels. Limit to 2 primary buttons per screen. Don't use buttons for navigation — use links instead.",
          },
        ],
      },
      {
        id: "art_006",
        title: "Form Inputs & Validation",
        brief: "Build accessible and validated forms using DGA components.",
        steps: [
          {
            heading: "Available inputs",
            body: null,
            list: [
              "TextInput — single-line text.",
              "Textarea — multi-line text.",
              "Select — dropdown selection.",
              "Checkbox & Radio — binary / grouped choices.",
              "DatePicker — calendar-based date selection.",
              "FileUpload — drag-and-drop file upload.",
            ],
          },
          {
            heading: "Validation approach",
            body: null,
            list: [
              "Show validation feedback inline, below the input field.",
              "Use #DC2626 for errors and #1B8354 for success states.",
              "Validate on blur (when user leaves the field), not on every keystroke.",
            ],
          },
          {
            heading: "Error message example",
            code: "<TextInput\n  label=\"National ID\"\n  error=\"Please enter a valid 10-digit national ID\"\n/>",
          },
          {
            heading: "Accessibility note",
            body: "All inputs include aria-describedby linking to their error message. Never rely on color alone to communicate errors — always include descriptive text.",
          },
        ],
      },
      {
        id: "art_007",
        title: "Modal & Dialog",
        brief: "Best practices for using modals and confirmation dialogs.",
        steps: [
          {
            heading: "When to use a modal",
            body: null,
            list: [
              "Confirming destructive actions (Delete, Archive).",
              "Collecting focused input without navigating away.",
              "Displaying critical warnings.",
            ],
          },
          {
            heading: "When NOT to use a modal",
            body: null,
            list: [
              "Displaying large amounts of content — use a page instead.",
              "Providing optional information — use a tooltip or inline text.",
              "Complex multi-step flows.",
            ],
          },
          {
            heading: "Code example",
            code: "<Modal isOpen={isOpen} onClose={handleClose} title=\"Confirm Deletion\">\n  <p>Are you sure you want to delete this record?</p>\n  <Modal.Footer>\n    <Button variant=\"secondary\" onClick={handleClose}>Cancel</Button>\n    <Button variant=\"danger\" onClick={handleDelete}>Delete</Button>\n  </Modal.Footer>\n</Modal>",
          },
        ],
      },
      {
        id: "art_008",
        title: "Navigation Components",
        brief: "Guide to sidebars, breadcrumbs, tabs, and top navigation.",
        steps: [
          {
            heading: "Top Navigation",
            body: "Used for global navigation across an application. Contains the DGA logo, primary nav links, and user actions (notifications, profile).",
          },
          {
            heading: "Sidebar Navigation",
            body: "Used in admin dashboards and multi-section portals. Supports nested menus up to 2 levels deep. Collapsible on mobile.",
          },
          {
            heading: "Tabs",
            body: "Switch between related views within the same page. Keep tab labels short (1–3 words). Maximum 6 tabs recommended.",
          },
          {
            heading: "Breadcrumbs",
            body: "Help users understand their location in the app hierarchy. Auto-generated based on the route structure. Always start with \"Home\".",
          },
          {
            heading: "Bottom Navigation (Mobile)",
            body: "For mobile apps with 3–5 main sections. Uses icons with labels. Active state uses the DGA green (#1B8354).",
          },
        ],
      },
    ],
  },
  {
    id: "cat_003",
    title: "Typography & Colors",
    description: "Fonts, color tokens, and visual language",
    articles: [
      {
        id: "art_009",
        title: "Typography Scale",
        brief: "Font families, sizes, weights, and line heights.",
        steps: [
          {
            heading: "Primary typefaces",
            body: "IBM Plex Sans is used for English content. IBM Plex Sans Arabic is used for Arabic content.",
          },
          {
            heading: "Type scale",
            body: null,
            list: [
              "Display: 40px / 700 weight — hero headings.",
              "H1: 32px / 700 — page titles.",
              "H2: 24px / 600 — section titles.",
              "H3: 20px / 600 — sub-section titles.",
              "Body Large: 16px / 400 — main reading text.",
              "Body: 14px / 400 — default body text.",
              "Caption: 12px / 400 — labels and hints.",
              "Overline: 11px / 600 / uppercase — category labels.",
            ],
          },
          {
            heading: "Arabic typography",
            body: "Use IBM Plex Sans Arabic at the same scale. Increase line-height to 1.8 for Arabic body text to improve legibility.",
          },
        ],
      },
      {
        id: "art_010",
        title: "Color Palette & Tokens",
        brief: "Complete guide to DGA color tokens and how to use them.",
        steps: [
          {
            heading: "Brand Colors",
            body: null,
            list: [
              "DGA Green (Primary): #1B8354",
              "DGA Green Light: #ECFDF3",
              "DGA Green Dark: #14573A",
            ],
          },
          {
            heading: "Neutral Scale",
            body: null,
            list: [
              "Gray 900: #111827 — primary text.",
              "Gray 700: #374151 — secondary text.",
              "Gray 500: #6B7280 — placeholder / hint text.",
              "Gray 300: #D1D5DB — borders.",
              "Gray 100: #F3F4F6 — backgrounds.",
            ],
          },
          {
            heading: "Semantic Colors",
            body: null,
            list: [
              "Success: #16A34A",
              "Warning: #D97706",
              "Error: #DC2626",
              "Info: #2563EB",
            ],
          },
          {
            heading: "Usage rules",
            body: "Never use raw hex values in code — always reference token names. Maintain a 4.5:1 contrast ratio for all text. Don't use brand green for error states.",
          },
        ],
      },
      {
        id: "art_011",
        title: "Dark Mode",
        brief: "How to implement and test dark mode with DGA tokens.",
        steps: [
          {
            heading: "Enabling dark mode",
            body: "Dark mode is enabled automatically when DGAProvider detects prefers-color-scheme: dark. To force it:",
            code: "<DGAProvider colorScheme=\"dark\">\n  <App />\n</DGAProvider>",
          },
          {
            heading: "Key dark-mode token mappings",
            body: null,
            list: [
              "Background: #111827 (Gray 900)",
              "Surface: #1F2937 (Gray 800)",
              "Border: #374151 (Gray 700)",
              "Text primary: #F9FAFB",
              "Brand accent: #34D399 (lighter green for dark bg)",
            ],
          },
          {
            heading: "Testing dark mode",
            body: null,
            list: [
              "Use Chrome DevTools → Rendering → Emulate CSS media → prefers-color-scheme: dark.",
              "Check all text meets 4.5:1 contrast on dark backgrounds.",
              "Verify interactive states (hover, focus) are visible.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "cat_004",
    title: "Layout & Grid",
    description: "Spacing, grid system, and responsive breakpoints",
    articles: [
      {
        id: "art_012",
        title: "Grid System Overview",
        brief: "How the DGA 12-column grid system works.",
        steps: [
          {
            heading: "Grid specification",
            body: null,
            list: [
              "Columns: 12",
              "Gutter: 24px (desktop), 16px (tablet), 12px (mobile)",
              "Margin: 32px (desktop), 24px (tablet), 16px (mobile)",
            ],
          },
          {
            heading: "Container max-widths",
            body: null,
            list: [
              "xs (< 640px): 100%",
              "sm (640px+): 600px",
              "md (768px+): 720px",
              "lg (1024px+): 960px",
              "xl (1280px+): 1200px",
            ],
          },
          {
            heading: "Common layouts",
            body: null,
            list: [
              "Full width: span={12}",
              "Two equal columns: span={6}",
              "Sidebar layout: span={8} + span={4}",
              "Three-up cards: span={4} × 3",
            ],
          },
        ],
      },
      {
        id: "art_013",
        title: "Spacing & Padding Guidelines",
        brief: "The DGA spacing scale and when to use each value.",
        steps: [
          {
            heading: "Spacing scale",
            body: null,
            list: [
              "space-1: 4px",
              "space-2: 8px",
              "space-3: 12px",
              "space-4: 16px",
              "space-6: 24px",
              "space-8: 32px",
              "space-12: 48px",
              "space-16: 64px",
            ],
          },
          {
            heading: "Guidelines",
            body: null,
            list: [
              "Use space-4 (16px) as the default internal padding for cards and panels.",
              "Use space-6 (24px) for section separations.",
              "Use space-8 (32px) for major layout divisions.",
              "Never use arbitrary values — always pick from the scale.",
            ],
          },
          {
            heading: "Component-specific recommendations",
            body: null,
            list: [
              "Button padding: space-3 vertical, space-5 horizontal.",
              "Form field gap: space-4 between fields.",
              "Card gap in a grid: space-6.",
            ],
          },
        ],
      },
      {
        id: "art_014",
        title: "Responsive Breakpoints",
        brief: "How to build responsive layouts using DGA breakpoints.",
        steps: [
          {
            heading: "Breakpoints",
            body: null,
            list: [
              "xs: 0px – 639px (mobile portrait)",
              "sm: 640px – 767px (mobile landscape)",
              "md: 768px – 1023px (tablet)",
              "lg: 1024px – 1279px (small desktop)",
              "xl: 1280px+ (large desktop)",
            ],
          },
          {
            heading: "Mobile-first approach",
            body: "Always design and build for mobile first, then add styles for larger screens using min-width queries.",
          },
          {
            heading: "Responsive column spans",
            code: "<Col span={{ xs: 12, md: 6, lg: 4 }}>\n  <Card>...</Card>\n</Col>",
          },
          {
            heading: "Note",
            body: "This renders full-width on mobile, half-width on tablet, and one-third on desktop.",
          },
        ],
      },
    ],
  },
  {
    id: "cat_005",
    title: "Icons & Assets",
    description: "Icon library, usage, and asset management",
    articles: [
      {
        id: "art_015",
        title: "Icon Library Overview",
        brief: "Browse and understand the DGA icon set and naming conventions.",
        steps: [
          {
            heading: "About the library",
            body: "The DGA icon library contains 300+ icons designed on a 24×24px grid, optimised for clarity at sizes from 16px to 48px.",
          },
          {
            heading: "Icon categories",
            body: null,
            list: [
              "Actions: edit, delete, download, upload, share",
              "Navigation: arrow, chevron, home, back, menu",
              "Status: check, warning, error, info, lock",
              "Communication: email, phone, chat, notification",
              "Government: ID, document, stamp, signature",
            ],
          },
          {
            heading: "Naming convention",
            body: "Icons are named using the pattern: category-descriptor-variant. Examples: action-edit-line, navigation-home-filled, status-check-circle.",
          },
          {
            heading: "Sizes",
            body: null,
            list: [
              "16px — inline text icons, table cells.",
              "20px — buttons, form fields.",
              "24px — default, navigation items.",
              "32px — feature icons.",
              "48px — empty state illustrations.",
            ],
          },
        ],
      },
      {
        id: "art_016",
        title: "Using Icons in Your Project",
        brief: "How to import and render DGA icons correctly.",
        steps: [
          {
            heading: "Method 1 — React components (recommended)",
            code: "import { EditIcon, DeleteIcon } from '@dga/icons';\n\n<EditIcon size={20} color=\"currentColor\" />",
          },
          {
            heading: "Method 2 — SVG sprite",
            code: "<svg><use href=\"/icons/sprite.svg#action-edit-line\" /></svg>",
          },
          {
            heading: "Accessibility",
            body: null,
            list: [
              "Decorative icons: aria-hidden=\"true\"",
              "Meaningful icons: role=\"img\" aria-label=\"Edit record\"",
            ],
          },
          {
            heading: "Styling icons",
            body: null,
            list: [
              "Always use currentColor so icons inherit text color.",
              "Never scale SVGs with CSS width/height — use the size prop.",
              "Minimum touch target for clickable icons: 44×44px.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "cat_006",
    title: "Accessibility",
    description: "WCAG guidelines, keyboard navigation, and screen reader support",
    articles: [
      {
        id: "art_017",
        title: "WCAG Compliance Guidelines",
        brief: "How the DGA Design System meets WCAG 2.1 AA standards.",
        steps: [
          {
            heading: "The four WCAG principles (POUR)",
            body: null,
            list: [
              "Perceivable — information must be presentable in ways users can perceive.",
              "Operable — UI components must be operable by all users.",
              "Understandable — information and UI operation must be understandable.",
              "Robust — content must be robust enough for assistive technologies.",
            ],
          },
          {
            heading: "Key compliance requirements",
            body: null,
            list: [
              "Color contrast: minimum 4.5:1 for normal text, 3:1 for large text.",
              "Focus indicators: visible focus ring on all interactive elements.",
              "Alt text: all informational images have descriptive alt attributes.",
              "Form labels: every input has an associated label element.",
              "Keyboard access: full functionality available without a mouse.",
              "Skip links: 'Skip to main content' link at page start.",
            ],
          },
          {
            heading: "Testing tools",
            body: null,
            list: [
              "axe DevTools (browser extension)",
              "WAVE Evaluation Tool",
              "Lighthouse accessibility audit",
            ],
          },
        ],
      },
      {
        id: "art_018",
        title: "Keyboard Navigation",
        brief: "Ensure your UI works fully with keyboard-only navigation.",
        steps: [
          {
            heading: "Standard keyboard interactions",
            body: null,
            list: [
              "Tab — move focus forward.",
              "Shift + Tab — move focus backward.",
              "Enter / Space — activate buttons and links.",
              "Arrow keys — navigate within menus, tabs, and radio groups.",
              "Escape — close modals, dropdowns, and popovers.",
            ],
          },
          {
            heading: "Focus management rules",
            body: null,
            list: [
              "When a modal opens, focus moves to the first interactive element inside it.",
              "When a modal closes, focus returns to the element that triggered it.",
              "Dropdown menus trap focus within the menu while open.",
              "Toast notifications don't steal focus.",
            ],
          },
          {
            heading: "Tab order",
            body: "Ensure the tab order follows the visual reading order (top-to-bottom, right-to-left for Arabic). Never use tabindex values greater than 0.",
          },
          {
            heading: "Focus ring style",
            body: "DGA uses a 2px offset outline in the brand color (#1B8354) for all focus states.",
          },
        ],
      },
      {
        id: "art_019",
        title: "Screen Reader Support",
        brief: "ARIA patterns and best practices for screen reader compatibility.",
        steps: [
          {
            heading: "Supported screen readers",
            body: null,
            list: [
              "NVDA + Firefox (Windows)",
              "JAWS + Chrome (Windows)",
              "VoiceOver + Safari (macOS / iOS)",
              "TalkBack (Android)",
            ],
          },
          {
            heading: "Key ARIA patterns",
            body: null,
            list: [
              "Live regions: role=\"status\" aria-live=\"polite\" for dynamic content.",
              "Dialogs: role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"modal-title\".",
              "Navigation: aria-label on <nav> and <main> landmarks.",
            ],
          },
          {
            heading: "Common mistakes to avoid",
            body: null,
            list: [
              "Don't add aria-label to every element — use it only when the native label isn't sufficient.",
              "Don't use aria-hidden on visible, interactive content.",
              "Don't use positive tabindex values.",
              "Don't auto-play audio or video with sound.",
            ],
          },
          {
            heading: "Testing recommendation",
            body: "Test with VoiceOver on Safari and NVDA on Firefox to cover the most common screen reader / browser combinations.",
          },
        ],
      },
    ],
  },
];

export default HelpData;
