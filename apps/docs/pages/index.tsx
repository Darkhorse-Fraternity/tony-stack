import { Button } from "@monad-stack/ui";
import { useIsomorphicLayoutEffect } from "@monad-stack/utils";

export default function Docs() {
  useIsomorphicLayoutEffect(() => {
    console.log("Acme docs page");
  }, []);

  return (
    <div>
      <h1>Docs</h1>
      <Button />
    </div>
  );
}
