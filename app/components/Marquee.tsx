export default function Marquee({ text }: { text: string }) {
  const content = text.repeat(6);
  return (
    <div className="h-[22px] overflow-hidden whitespace-nowrap border-y border-[oklch(30%_0.01_260_/_0.5)] opacity-50">
      <div
        className="inline-block pt-[3px] text-[13px] tracking-[0.1em] text-[oklch(55%_0.01_260)]"
        style={{ animation: "marquee 22s linear infinite" }}
      >
        {content}
      </div>
    </div>
  );
}
