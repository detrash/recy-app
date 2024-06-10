// import { Suspense } from "react";
// import Image from "next/image";
// import Link from "next/link";

// import LocaleToggler from "@/components/common/locale-toggler";
// import { Button } from "@/components/ui/button";
// import { LINKS } from "@/constants/";
// import { useI18n } from "@/locales/client";

export default function HomeScreen() {
  // const t = useI18n();

  return (
    <div className="flex justify-between flex-1 h-lvh">
      <main className="flex flex-col justify-center flex-1 flex-shrink-0 h-full">
        <div className="absolute top-0 z-10 w-full p-5">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* <div>
                <Image
                  src="/assets/brand/recy-logo.png"
                  width={64}
                  height={64}
                  alt="Recy Logo"
                />
              </div> */}

              <div className="flex justify-center p-5">
                {/* <Suspense>
                  <LocaleToggler />
                </Suspense> */}
              </div>
            </div>

            {/* <Link href={LINKS.WITHEBOARD} target="_blank">
              <Button variant="secondary" className="uppercase" size="sm">
                whitepaper
              </Button>
            </Link> */}
          </nav>
        </div>

        <div className="flex flex-col justify-center flex-1 max-w-xl gap-5 p-5">
          <h1 className="text-6xl font-bold">
            {/* {t("home.welcomeMessage1")} */}
            <br />{" "}
            {/* <span className="text-primary">{t("home.welcomeMessage2")}</span> */}
          </h1>
          {/* <p className="text-base text-gray-500">{t("home.description")}</p> */}
          {/* <Link href={LINKS.AUTH.LOGIN}>
            <Button size="lg" className="w-full">
              {t("home.login")}
            </Button>
          </Link> */}
        </div>
      </main>
      <aside className="relative flex-col items-center justify-center flex-1 flex-shrink hidden h-lvh basis-1/4 xl:flex">
        {/* <Image
          className="object-cover w-full sm:h-72 md:h-96"
          fill
          src="/assets/bg/ocean.jpg"
          alt="Ocean"
        /> */}
      </aside>
    </div>
  );
}
