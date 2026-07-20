import { createStart, createMiddleware } from "@tanstack/react-start";

import { renderErrorPage } from "./lib/error-page";

const errorMiddleware = createMiddleware().server(async ({ next }) => {
  try {
    return await next();
  } catch (error) {
    if (error != null && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    console.error(error);
    return new Response(renderErrorPage(), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }
});

const ga4Middleware = createMiddleware().server(async ({ next }) => {
  const response = await next();
  
  // Only inject for HTML responses
  const contentType = response.headers.get("content-type") || "";
  if (!contentType.includes("text/html")) {
    return response;
  }

  const html = await response.text();
  const ga4Script = `
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-13XJT8M29C"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-13XJT8M29C');
    </script>
  `;

  // Inject after <head> tag
  const modifiedHtml = html.replace('<head>', `<head>${ga4Script}`);
  
  return new Response(modifiedHtml, {
    status: response.status,
    headers: response.headers,
  });
});

export const startInstance = createStart(() => ({
  requestMiddleware: [errorMiddleware, ga4Middleware],
}));
