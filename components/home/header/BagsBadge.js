import Link from "next/link";

const BagsBadge = () => (
  <Link
    target="_blank"
    rel="noopener noreferrer"
    href="https://bags.fm/ozDZyTuz9EvxBc8s9Huc8kCzCPcrQ1tCwJaQXMbBAGS"
  >
    <img
      width={220}
      height={48}
      alt="Live on Bags.fm"
      src="https://bagsbadge.deforge.io/v1/badge.svg?address=ozDZyTuz9EvxBc8s9Huc8kCzCPcrQ1tCwJaQXMbBAGS&theme=dark"
      className="select-none"
    />
  </Link>
);

export default BagsBadge;
