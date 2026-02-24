import Profile from "@/components/Profile";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-white text-black">
      <h1>Amazing scientists</h1>
      <section className="flex gap-4">
        <Profile />
        <Profile />
        <Profile />
      </section>
    </div>
  );
}