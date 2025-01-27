'use client'

import dynamic from "next/dynamic";
import LoadingForm from "./loading";

const IssueForm = dynamic(() => import("@/app/issues/_components/IssueForm"), {
  ssr: false,
  loading : () => <LoadingForm />
});

export default function NewIssuePage() {
  return <IssueForm />;
}
