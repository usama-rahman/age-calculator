# Age Calculator App

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Age Calculator Component

The main feature of this app is the Age Calculator component, which allows users to calculate their exact age in years, months, and days based on their birthdate.

### Features

- Dual input methods: Calendar picker and manual date entry
- Precise age calculation in years, months, and days
- Decade navigation in the calendar view
- Responsive design for both desktop and mobile devices

### How to Use

1. Choose between Calendar or Manual Input.
2. For calendar input:
   - Click the date field to open the calendar.
   - Use decade navigation buttons to quickly move through time periods.
   - Select your birthdate.
3. For manual input:
   - Enter your birthdate in YYYY-MM-DD format.
4. Click "Calculate Age" to see your age in years, months, and days.

### Technical Details

- Built with React and TypeScript
- Uses `date-fns` for accurate date calculations
- Implements Shadcn UI components for the interface
- Utilizes React hooks for state management

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

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
