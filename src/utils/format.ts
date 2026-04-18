import { SITE } from "../consts";

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(date);
}

export function absoluteUrl(pathname: string): string {
  return new URL(withBase(pathname), SITE.url).toString();
}

export function withBase(pathname: string): string {
  const baseUrl = import.meta.env.BASE_URL;

  if (pathname === "/" || pathname.length === 0) {
    return baseUrl;
  }

  const normalizedPath = pathname.replace(/^\/+/, "");

  return `${baseUrl}${normalizedPath}`;
}
