import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

function ScrollAreaDemo() {
  const [quantity, setQuantity] = React.useState(50);
  const tags = React.useMemo(
    () =>
      Array.from({ length: quantity }).map(
        (_, i, a) => `v1.2.0-beta.${a.length - i}`
      ),
    [quantity]
  );

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-2 items-center mb-2">
        <Input
          type="number"
          min={1}
          max={100}
          value={quantity}
          onChange={(e) =>
            setQuantity(Math.max(1, Math.min(100, Number(e.target.value))))
          }
          className="w-20 text-sm"
        />

        <Button
          variant="secondary"
          size="sm"
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
        >
          -
        </Button>
        <Button
          variant="default"
          size="sm"
          onClick={() => setQuantity((q) => Math.min(100, q + 1))}
        >
          +
        </Button>
      </div>
      <ScrollArea className="h-72 w-48 rounded-md border" type="always">
        <div className="p-4">
          <h4 className="mb-4 text-sm leading-none font-medium">Tags</h4>
          {tags.map((tag) => (
            <React.Fragment key={tag}>
              <div className="text-sm">{tag}</div>
              <Separator className="my-2" />
            </React.Fragment>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}

export { ScrollAreaDemo };
