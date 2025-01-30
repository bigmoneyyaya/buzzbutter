import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to BuzzButter</h1>
      <p>Fuel Your Adventure!</p>
      <Link href="/checkout">Buy Now</Link>
    </div>
  );
}
