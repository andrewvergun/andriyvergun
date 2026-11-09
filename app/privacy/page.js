import Link from "next/link";
import company from "../../data/company";

export const metadata = { title: `Privacy Policy – ${company.businessName}` };

export default function Privacy() {
  const a = company.address;
  return (
    <main>
      <h1>Privacy Policy</h1>
      <p>Last updated: {company.privacyPolicyUpdated}</p>

      <p>
        This policy applies to the apps published by {company.businessName},{" "}
        {a.street}, {a.postalCode} {a.city}, {a.country}, NIP {company.nip}
        (the &quot;Controller&quot;).
      </p>

      <h2>Data we process</h2>
      <p>
        Our apps process only the data needed for them to work. Specific data
        types and their purposes are described in each app&apos;s Data safety
        section on Google Play.
      </p>

      <h2>Third-party services</h2>
      <p>
        Apps may use third-party services (for example Google Firebase) that
        process data under their own privacy policies.
      </p>

      <h2>Your rights</h2>
      <p>
        Under the GDPR you have the right to access, correct and delete your
        data, to restrict or object to processing, and to lodge a complaint with
        the President of the Personal Data Protection Office (UODO).
      </p>

      <h2>Contact</h2>
      <p>
        <a href={`mailto:${company.email}`}>{company.email}</a>
      </p>

      <p>
        <Link href="/">Home</Link>
      </p>
    </main>
  );
}
