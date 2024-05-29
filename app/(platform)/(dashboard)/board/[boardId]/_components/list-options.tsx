"use client";

import { List } from "@prisma/client";
import { MoreHorizontal, X } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useAction } from "@/hooks/use-action";
import { deleteList } from "@/action/delete-list";
import { toast } from "sonner";
import { ElementRef, useRef } from "react";
import { copyList } from "@/action/copy-list";

interface ListOptionsProps {
  data: List;
  onAddCard: () => void;
}

export const ListOptions = ({ data, onAddCard }: ListOptionsProps) => {
  const closeRef = useRef<ElementRef<"button">>(null);

  const { execute: deleteExecute } = useAction(deleteList, {
    onSuccess(data) {
      toast.success(`List '${data.title}' deleted.`);
      closeRef.current?.click();
    },
    onError(error) {
      toast.error(error);
      closeRef.current?.click();
    },
  });

  const { execute: copyExecute } = useAction(copyList, {
    onSuccess(data) {
      toast.success(`List '${data.title}' copied.`);
      closeRef.current?.click();
    },
    onError(error) {
      toast.error(error);
      closeRef.current?.click();
    },
  });

  const handleDelete = () => {
    deleteExecute({ boardId: data.boardId, id: data.id });
  };

  const handleCopy = () => {
    copyExecute({ boardId: data.boardId, id: data.id });
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="size-auto p-2" variant={"ghost"}>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="px-0 py-3" side="bottom" align="start">
        <div className="text-sm font-medium text-center text-neutral-600 pb-4">
          List Actions
        </div>
        <PopoverClose ref={closeRef} asChild>
          <Button
            className="size-auto p-2 absolute top-2 right-2 text-neutral-600"
            variant={"ghost"}
          >
            <X className="size-4" />
          </Button>
        </PopoverClose>
        <Button
          onClick={onAddCard}
          className="rounded-none w-full h-auto p-2 px-5 justify-start font-normal text-sm"
          variant={"ghost"}
        >
          Add card...
        </Button>
        <Button
          onClick={handleCopy}
          className="rounded-none w-full h-auto p-2 px-5 justify-start font-normal text-sm"
          variant={"ghost"}
        >
          Copy list...
        </Button>
        <Separator />
        <Button
          onClick={handleDelete}
          className="rounded-none w-full h-auto p-2 px-5 justify-start font-normal text-sm"
          variant={"ghost"}
        >
          Delete this list...
        </Button>
      </PopoverContent>
    </Popover>
  );
};
