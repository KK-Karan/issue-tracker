'use client'

import dynamic from "next/dynamic"; // This imports Next.js's dynamic import functionality, which allows loading a component only when it’s needed (instead of at page load)
import LoadingForm from "./loading";

const IssueForm = dynamic(() => import("@/app/issues/_components/IssueForm"), {
  ssr: false,
  loading : () => <LoadingForm /> // While it's loading, it shows a fallback UI: <LoadingForm />. This prevents the page from looking empty while the IssueForm component is loading.
});

export default function NewIssuePage() {
  return <IssueForm />;
}

// Dynamically importing the IssueForm ensures the browser only downloads the code for the IssueForm when it's actually needed.