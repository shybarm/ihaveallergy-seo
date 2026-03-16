15:58:11.523 Running build in Washington, D.C., USA (East) – iad1
15:58:11.524 Build machine configuration: 2 cores, 8 GB
15:58:11.675 Cloning github.com/shybarm/ihaveallergy-seo (Branch: main, Commit: 573ac07)
15:58:11.968 Cloning completed: 293.000ms
15:58:12.783 Restored build cache from previous deployment (BohA1ft4mXbMLooFAAyz3YcyAK6k)
15:58:13.051 Running "vercel build"
15:58:13.926 Vercel CLI 50.32.4
15:58:14.269 Installing dependencies...
15:58:15.507 
15:58:15.511 up to date in 943ms
15:58:15.511 
15:58:15.511 147 packages are looking for funding
15:58:15.511   run `npm fund` for details
15:58:15.534 Detected Next.js version: 16.1.6
15:58:15.538 Running "npm run build"
15:58:15.634 
15:58:15.634 > ihaveallergy-seo@0.1.0 build
15:58:15.635 > next build
15:58:15.635 
15:58:16.781 ▲ Next.js 16.1.6 (Turbopack)
15:58:16.783 
15:58:16.815   Creating an optimized production build ...
15:58:25.590 ✓ Compiled successfully in 8.2s
15:58:25.591   Running TypeScript ...
15:58:30.350 Failed to compile.
15:58:30.350 
15:58:30.351 ./components/blog/ArticleTemplate.tsx:104:43
15:58:30.351 Type error: Property 'updatedAt' does not exist on type 'BlogArticle'.
15:58:30.351 
15:58:30.351 [0m [90m 102 |[39m               [33m<[39m[33mspan[39m className[33m=[39m[32m"flex items-center gap-1.5"[39m[33m>[39m
15:58:30.351  [90m 103 |[39m                 [33m<[39m[33mCalendar[39m className[33m=[39m[32m"h-4 w-4"[39m [33m/[39m[33m>[39m
15:58:30.352 [31m[1m>[22m[39m[90m 104 |[39m                 {formatHebrewDate(article[33m.[39mupdatedAt)}
15:58:30.352  [90m     |[39m                                           [31m[1m^[22m[39m
15:58:30.352  [90m 105 |[39m               [33m<[39m[33m/[39m[33mspan[39m[33m>[39m
15:58:30.352  [90m 106 |[39m               [33m<[39m[33mspan[39m className[33m=[39m[32m"flex items-center gap-1.5"[39m[33m>[39m
15:58:30.352  [90m 107 |[39m                 [33m<[39m[33mClock[39m className[33m=[39m[32m"h-4 w-4"[39m [33m/[39m[33m>[39m[0m
15:58:30.383 Next.js build worker exited with code: 1 and signal: null
15:58:30.421 Error: Command "npm run build" exited with 1
