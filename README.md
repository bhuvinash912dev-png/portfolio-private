# Portfolio

Next.js 14 + Tailwind + Framer Motion. Your profile photo and projects are managed in **Sanity**
(headless CMS) through the admin panel at **`/studio`**. Everything else (bio, experience, stack,
certifications, showcase, links) lives in `src/data/site.ts`.

In the Studio, **Profile** holds your photo: click the crop icon to crop it and drag the focus circle onto
your face, and the hero and navbar centre on that point. Without a photo there, `public/photo.png`
(set as `photo` in `src/data/site.ts`) is used, and without either, your initials.

## 1. Run locally

Install Node.js 20 LTS from https://nodejs.org, then:

```powershell
npm install
npm run dev        # http://localhost:3000
```

## 2. Set up the admin (Sanity, free)

1. Sign up at https://www.sanity.io/manage and click **Create project**, with dataset name `production`.
2. Copy the **Project ID** and create `.env.local`:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```
3. In the Sanity project, go to **API → CORS origins** and add these, ticking **Allow credentials** on each:
   - `http://localhost:3000`
   - `https://<your-site>.vercel.app` (after deploying), plus your custom domain if you have one
4. Open http://localhost:3000/studio, log in, and add, edit, reorder (with the `order` field) or delete
   projects. Each project takes a title, description, several screenshots (the first is the cover;
   each can be cropped and given a focus point), stack tags and a live URL.

Changes show up on the live site within about 60 seconds, with no redeploy needed.

## 3. Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Go to https://vercel.com/new, import the repo, and keep the framework preset as **Next.js**.
3. Under **Environment Variables**, add `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET`.
4. Deploy, then add the Vercel URL to Sanity's CORS origins (step 2.3).

Your admin panel is at `https://<your-site>.vercel.app/studio`. Only people you invite to the Sanity
project (Sanity → Members) can log in and edit.
