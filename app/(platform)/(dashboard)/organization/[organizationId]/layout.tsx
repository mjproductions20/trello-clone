import { auth } from "@clerk/nextjs";
import { OrgControl } from "./_components/org-control";

import { startCase } from "lodash";
import { ReactNode } from "react";

export async function generateMetadata() {
  const { orgSlug } = auth();

  return {
    title: startCase(orgSlug || "Organization"),
  };
}

const OrganizationIdLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <OrgControl />
      {children}
    </>
  );
};

export default OrganizationIdLayout;
