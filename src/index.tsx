import { PlaneTracker } from "./App";
import { ReProvider } from "./i18n";

export const Entry = () => {
  return (
    <ReProvider>
      <PlaneTracker />
    </ReProvider>
  );
};
