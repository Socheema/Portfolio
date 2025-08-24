import { ScrollProgress } from "@/components/magicui/scroll-progress";

export function ScrollProgressComponent() {
  return (
    <div className="z-10 rounded-lg p-4">
      <ScrollProgress className="top-[65px]" />
      <h2 className="pb-4 font-bold">
        Note: The scroll progress is shown below the navbar of the page.
      </h2>
    </div>
  );
}
