import Link from "next/link";

export const Logo = () => {
  return (
    <Link
      href="/dictionary"
      className="flex items-center text-black text-[22px] font-fixelBold leading-[1,45]"
    >
      <svg
        className="mr-[16px]"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="20" cy="20" r="20" fill="#85AA9F" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20.4431 19C26.3871 14.517 26.6495 11.8 20.4431 7C14.1184 11.9024 14.9336 14.501 20.4431 19ZM19 20.5569C14.517 14.613 11.8 14.3505 7 20.5569C11.9024 26.8816 14.501 26.0664 19 20.5569ZM34 20.5569C29.517 14.613 26.8 14.3505 22 20.5569C26.9024 26.8816 29.501 26.0664 34 20.5569ZM20.4431 34C26.3871 29.517 26.6495 26.8 20.4431 22C14.1184 26.9024 14.9336 29.501 20.4431 34Z"
          fill="#FCFCFC"
        />
      </svg>
      VocabBuilder
    </Link>
  );
};
