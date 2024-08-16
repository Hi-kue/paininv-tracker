import Link from "next/link";

export function SiteBanner() {
  return (
    <div className="relative top-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-background py-3 md:py-0">
      <div className="container flex flex-col items-center justify-center gap-4 md:h-12 md:flex-row">
        <Link
          href="https://www.producthunt.com/posts/chat-collect?utm_source=banner-featured&utm_medium=banner&utm_souce=banner-chat&#0045;collect"
          target="_blank"
          className="text-center text-white text-sm leading-loose text-muted-background dark:text-secondary"
        >
          ✨
          <span className="font-bold"> Check out the tracker! - </span>{" "}
          See how it can help organize your daily ingredients and items. ✨
        </Link>
      </div>
    </div>
  );
}
