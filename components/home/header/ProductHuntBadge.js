import Link from "next/link";

const ProductHuntBadge = () => (
  <Link
    target="_blank"
    rel="noopener noreferrer"
    href="https://www.producthunt.com/products/deforge-open-beta/launches?embed=true&utm_source=badge-top-post-badge&utm_medium=badge&utm_source=badge-deforge"
  >
    <img
      width={220}
      height={48}
      alt="Deforge - Canva&#0032;for&#0032;AI&#0032;Agents | Product Hunt"
      src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=1007944&theme=dark&period=daily&t=1756041023938"
      className="select-none"
    />
  </Link>
);

export default ProductHuntBadge;
