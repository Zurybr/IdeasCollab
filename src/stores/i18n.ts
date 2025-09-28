/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import en_us from "../i18n/en_us.json";
import es_mx from "../i18n/es_mx.json";

export type Locale = "en_us" | "es_mx";

const resources: Record<Locale, Record<string, any>> = {
  en_us: en_us as Record<string, any>,
  es_mx: es_mx as Record<string, any>,
};

function detectLocale(): Locale {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("locale");
    if (saved === "en_us" || saved === "es_mx") return saved;
    const nav = navigator.language?.toLowerCase() || "en";
    if (nav.startsWith("es")) return "es_mx";
  }
  return "en_us";
}

function getByPath(obj: any, path: string): any {
  return path
    .split(".")
    .reduce(
      (acc: any, p: string) => (acc && acc[p] != null ? acc[p] : undefined),
      obj
    );
}

function format(str: string, params?: Record<string, any>): string {
  if (!params) return str;
  return str.replace(/\{(\w+)\}/g, (_, k) =>
    params[k] != null ? String(params[k]) : ""
  );
}

interface I18nState {
  locale: Locale;
  t: (key: string, params?: Record<string, any>) => string;
  setLocale: (locale: Locale) => void;
}

export const useI18n = create<I18nState>((set, get) => ({
  locale: detectLocale(),
  t: (key, params) => {
    const { locale } = get();
    const value = getByPath(resources[locale], key);
    if (typeof value === "string") return format(value, params);
    return key; // fallback
  },
  setLocale: (locale) => {
    localStorage.setItem("locale", locale);
    set({ locale });
  },
}));
