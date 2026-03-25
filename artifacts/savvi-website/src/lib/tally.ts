declare global {
  interface Window {
    Tally?: {
      openPopup: (formId: string, options?: Record<string, unknown>) => void;
    };
  }
}

export function openWaitlistForm() {
  if (window.Tally) {
    window.Tally.openPopup("wM9OoA", {
      layout: "modal",
      width: 700,
      emoji: { text: "👋", animation: "wave" },
    });
  } else {
    window.open("https://tally.so/r/wM9OoA", "_blank");
  }
}
