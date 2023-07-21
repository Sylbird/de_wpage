import ProcessLoader from "components/system/window/ProcessLoader";
import { ProcessProvider } from "contexts/process/processProvider";

export default function Home() {
  return (
    <ProcessProvider>
      <ProcessLoader/>
    </ProcessProvider>
  );
}