export default function Marquee({ text }: { text: string }) {
  const content = text.repeat(6);
  return (
    <div className="-mx-6 -rotate-2 overflow-hidden whitespace-nowrap border-y-2 border-foreground bg-accent py-3 sm:-mx-10">
      <div
        className="inline-block font-serif text-3xl italic text-foreground motion-reduce:!animate-none sm:text-5xl"
        style={{ animation: "marquee 28s linear infinite" }}
      >
        {content}
      </div>
    </div>
  );
}
