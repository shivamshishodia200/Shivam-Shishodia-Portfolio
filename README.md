# Shivam Shishodia Portfolio

React + TypeScript + Vite portfolio with an Express and MongoDB-backed local admin.

## Local setup

1. Install Node.js and MongoDB Community Server.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Copy `.env.example` to `.env` and set:
   - `MONGODB_URI`
   - `JWT_SECRET`
   - `ADMIN_EMAIL`
   - `ADMIN_PASSWORD`

4. Start the API:

   ```bash
   npm run server
   ```

5. In another terminal, start Vite:

   ```bash
   npm run dev
   ```

Open `http://localhost:3000`. The admin panel is available at `http://localhost:3000/admin`.

## Production

```bash
npm run build
npm start
```

The Express server serves the built portfolio and all `/api` routes on `PORT` (default `3001`).

## Content management

- Projects support `published`, `featured`, `order`, `externalUrl`, `ownContribution`, and confirmation lists.
- Add an `externalUrl` only when a project has a real public URL; the Live Project link is shown only when it exists.
- The four testimonial records are seeded as drafts. Set `approved: true` before a testimonial can appear publicly.
- Portfolio metrics can be independently hidden with `visible: false`.
- Enquiries are saved in MongoDB and visible in `/admin` under Enquiries.

## Project media and verification

- All nine projects use branded fallback covers until approved screenshots or admin uploads are available.
- Fallback covers and gallery previews are explicitly labelled as illustrative previews.
- Verified project URLs:
  - https://rpstoragesolution.com/
  - https://www.deliveryplus.tech/merchant/dispatcher/map
  - https://www.360crm.cloud/attendlok/
  - https://thebioglobal.in/
  - https://naflins.com/
- Demo Pending: 360CRM AI Assistant, ChatHarbor, DKB Ventures, and LabelStudio.
- No exact public GitHub repository URLs were supplied, so project-specific View Source links are not shown.
