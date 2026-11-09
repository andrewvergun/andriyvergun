import Link from "next/link";
import company from "../data/company";

export default function Home() {
  const a = company.address;
  return (
    <main>
      <h1>{company.businessName}</h1>
      <p>{company.description}</p>

      <h2>Company details</h2>
      <p>
        Owner: {company.ownerName}
        <br />
        NIP: {company.nip}
        <br />
        REGON: {company.regon}
        <br />
        Address: {a.street}, {a.postalCode} {a.city}, {a.country}
      </p>

      <h2>Contact</h2>
      <p>
        Email: <a href={`mailto:${company.email}`}>{company.email}</a>
        {company.phone && (
          <>
            <br />
            Phone: {company.phone}
          </>
        )}
      </p>

      {company.apps.length > 0 && (
        <>
          <h2>Apps</h2>
          <ul>
            {company.apps.map((app) => (
              <li key={app.name}>
                {app.url ? <a href={app.url}>{app.name}</a> : app.name}
              </li>
            ))}
          </ul>
        </>
      )}

      <p>
        <Link href="/privacy/">Privacy Policy</Link>
      </p>
    </main>
  );
}
