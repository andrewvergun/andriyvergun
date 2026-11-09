import company from "../data/company";

export const metadata = {
  title: company.businessName,
  description: company.description,
  ...(company.googleSiteVerification && {
    verification: { google: company.googleSiteVerification },
  }),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
