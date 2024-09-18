import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
// import DeleteBtn from "../Actions/DeleteBtn";
// import EditBtn from "../Actions/EditBtn";
type ActionColumnProps = {
  row: any;
  title: string;
  editEndpoint: string;
  id: string | undefined;
};
export default function ActionColumn({
  row,
  title,
  editEndpoint,
  id,
}: ActionColumnProps) {
  const isActive = row.isActive;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          {/* <DeleteBtn title={title} id={id} /> */}
        </DropdownMenuItem>
        <DropdownMenuItem>
          {/* <EditBtn title={title} editEndpoint={editEndpoint} /> */}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}