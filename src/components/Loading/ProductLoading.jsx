import { Skeleton } from "keep-react";

const ProductLoading = () => {
  return (
    <div className="max-w-7xl mx-auto p-8 flex flex-col gap-12">
      <Skeleton className="w-full space-y-2.5 ">
        <Skeleton.Line className="h-52 w-full" />
        <Skeleton.Line className="h-4 w-full" />
        <Skeleton.Line className="h-4 w-3/5" />
        <Skeleton.Line className="h-4 w-4/5" />
        <Skeleton.Line className="h-10 w-2/5" />
      </Skeleton>
      <Skeleton className="w-full space-y-2.5 ">
        <Skeleton.Line className="h-52 w-full" />
        <Skeleton.Line className="h-4 w-full" />
        <Skeleton.Line className="h-4 w-3/5" />
        <Skeleton.Line className="h-4 w-4/5" />
        <Skeleton.Line className="h-10 w-2/5" />
      </Skeleton>
    </div>
  );
};

export default ProductLoading;
