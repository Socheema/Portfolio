import { ScrollProgress } from "@/components/magicui/scroll-progress";

export function ProgressComponent() {
  return (
    <div className="z-10 rounded-lg p-4 md:mt-[-5rem]">
      <ScrollProgress className="top-[95px]" />
    </div>
  );
}
