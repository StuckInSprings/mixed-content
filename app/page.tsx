import { Card, Heading, Name, ReloadButton } from "@/components";
import { fetchUser } from "@/utilities";
import { Suspense } from "react";

const endpoint = "https://randomuser.me/api/";

export default async function Home() {
  const staticResult = await fetchUser({ url: endpoint, isCached: true });
  const randomResult = await fetchUser({ url: endpoint });

  return (
    <main className="flex flex-col min-h-screen items-center justify-center p-24">
      <div className="flex items-center justify-center space-x-10">
        <Card>
          <Heading>Static User</Heading>
          <Name>{staticResult}</Name>
        </Card>
        <Card>
          <Heading>Random User</Heading>
          <Suspense fallback={<div>Loading...</div>}>
            <Name>{randomResult}</Name>
          </Suspense>
        </Card>
      </div>
      <ReloadButton />
    </main>
  );
}
