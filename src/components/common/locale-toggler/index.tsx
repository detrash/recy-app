"use client";
import { LanguagesIcon } from "lucide-react";

import {
  DropdownMenu,
  // DropdownMenuContent,
  // DropdownMenuItem,
  // DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import { useChangeLocale, useCurrentLocale } from "@/locales/client";

import { Button } from "../../ui/button";

// const locales = [
//   {
//     icon: "🇺🇸",
//     name: "English",
//     value: "en",
//   },
//   {
//     icon: "🇪🇸",
//     name: "Español",
//     value: "es",
//   },
//   {
//     icon: "🇵🇹",
//     name: "Português",
//     value: "pt",
//   },
// ];

export default function LocaleToggler() {
  // const changeLocale = useChangeLocale({ preserveSearchParams: true });
  // const currentLocale = useCurrentLocale();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="px-0 w-9">
          <LanguagesIcon className="w-6 h-6" />
          <span className="sr-only">Change Locale</span>
        </Button>
      </DropdownMenuTrigger>
      {/* <DropdownMenuContent align="center">
        {locales.map((locale) => (
          <DropdownMenuItem
            key={locale.value}
            onClick={() => changeLocale(locale.value as typeof currentLocale)}
            disabled={locale.value === currentLocale}
          >
            <span className="cursor-pointer">
              {locale.name} {locale.icon}
            </span>
            {locale.value === currentLocale ? (
              <DropdownMenuShortcut>
                <CheckIcon className="w-4 h-4" />
              </DropdownMenuShortcut>
            ) : undefined}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent> */}
    </DropdownMenu>
  );
}
