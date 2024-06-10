import { Link } from "react-router-dom";
import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { LINKS } from "@/constants";

export default function SigninScreen() {
  // const t = useI18n();

  return (
    <div className="flex justify-between flex-1 h-lvh">
      <main className="flex flex-col justify-center flex-1 flex-shrink-0 h-full">
        <div className="absolute top-0 z-10 w-full p-5">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div>
                <img
                  src="/assets/brand/recy-logo.png"
                  width={64}
                  height={64}
                  alt="Recy Logo"
                />
              </div>

              <div className="flex justify-center p-5">
                <Suspense>
                  {/* <LocaleToggler /> */}
                  Toggle
                </Suspense>
              </div>
            </div>

            <Link to={LINKS.WITHEBOARD} target="_blank">
              <Button variant="secondary" className="uppercase" size="sm">
                whitepaper
              </Button>
            </Link>
          </nav>
        </div>

        <div className="flex flex-col justify-center flex-1 max-w-xl gap-5 p-5">
          <h1 className="text-6xl font-bold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos,
            laborum!
            <br />
            <span className="text-primary">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos,
              laborum!
            </span>
          </h1>
          <p className="text-base text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos,
            laborum!
          </p>
          <Link to={LINKS.AUTH.LOGIN}>
            <Button size="lg" className="w-full">
              Login
            </Button>
          </Link>
        </div>
      </main>
      <aside className="relative flex-col items-center justify-center flex-1 flex-shrink hidden h-lvh basis-1/4 xl:flex">
        <img
          className="object-cover w-full sm:h-72 md:h-96"
          src="/assets/bg/ocean.jpg"
          alt="Ocean"
        />
      </aside>
    </div>
  );
}
