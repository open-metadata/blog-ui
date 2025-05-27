import Link from "next/link";
import useQueryParams from "../hooks/useQueryParam";

interface ParamLinkProps {
  name?: string;
  href: string;
  target?: string;
  className?: string;
  children?: React.ReactNode;
}

const ParamLink = ({ name, href, target = "_self", className, children }: ParamLinkProps) => {
  const params = useQueryParams();

  return (
    <Link href={`${href}?${params}`} prefetch={false} legacyBehavior>
      <a
        target={target}
        rel="noopener noreferrer"
        aria-label={name}
        className={className}
      >
        {name ?? children}
      </a>
    </Link>
  );
};

export default ParamLink;
