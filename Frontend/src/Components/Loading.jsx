import Skeleton from "@mui/material/Skeleton";

function Loading() {
  return (
    <>
     <div className="flex h-screen bg-gray-100">
      {/* LEFT SIDEBAR */}
      <div className="w-[250px] bg-white p-6 space-y-6 shadow-md">
        <Skeleton className="ml-12" variant="circular" width={100} height={100} />

        <div className="text-center space-y-2">
          <Skeleton className="h-4 w-24 mx-auto" />
          <Skeleton className="h-4 w-32 mx-auto" />
          <Skeleton className="h-4 w-32 mx-auto" />
          <Skeleton className="h-4 w-32 mx-auto" />
          <Skeleton className="h-4 w-32 mx-auto" />

        </div>

        <div className="space-y-4">
          {[1, 2, 3, 4,5,6,7,8].map((_, i) => (
            <div key={i} className="flex items-center gap-3">
              <Skeleton className="w-6 h-6 rounded" />
              <Skeleton className="w-28 h-4" />
            </div>
          ))}
        </div>

        <Skeleton className="h-10 w-full rounded-xl" />
      </div>

      {/* RIGHT MAIN FORM */}
      <div className="flex-1 p-10">
        <div className="bg-white shadow-xl rounded-3xl p-10">

          {/* Header */}
          <Skeleton className="h-8 w-40 mb-6" />

          <div className="grid grid-cols-2 gap-6">
            {/* Left Column Inputs */}
            <div className="space-y-6">
              <div>
                <Skeleton className="h-4 w-32 mb-2" />
                <Skeleton className="h-10 w-full" />
              </div>

              <div>
                <Skeleton className="h-4 w-32 mb-2" />
                <Skeleton className="h-10 w-full" />
              </div>

              <div>
                <Skeleton className="h-4 w-32 mb-2" />
                <Skeleton className="h-10 w-full" />
              </div>

              <div>
                <Skeleton className="h-4 w-32 mb-2" />
                <Skeleton className="h-10 w-full" />
              </div>

               <div>
                <Skeleton className="h-4 w-32 mb-2" />
                <Skeleton className="h-10 w-full" />
              </div>
              
               <div>
                <Skeleton className="h-4 w-32 mb-2" />
                <Skeleton className="h-10 w-full" />
              </div>

               <div>
                <Skeleton className="h-4 w-32 mb-2" />
                <Skeleton className="h-10 w-full" />
              </div>

               <div>
                <Skeleton className="h-4 w-32 mb-2" />
                <Skeleton className="h-10 w-full" />
              </div>

               <div>
                <Skeleton className="h-4 w-32 mb-2" />
                <Skeleton className="h-10 w-full" />
              </div>
            </div>

            {/* Right Column Inputs + Profile Circle */}
            <div className="space-y-6">
              {/* Big Profile Image Skeletons */}
              <div className="flex justify-end">
        <Skeleton className="ml-12" variant="circular" width={100} height={100} />
              </div>

              <div>
                <Skeleton className="h-4 w-32 mb-2" />
                <Skeleton className="h-10 w-full" />
              </div>

              <div>
                <Skeleton className="h-4 w-32 mb-2" />
                <Skeleton className="h-10 w-full" />
              </div>

              <div>
                <Skeleton className="h-4 w-32 mb-2" />
                <Skeleton className="h-10 w-full" />
              </div>

               <div>
                <Skeleton className="h-4 w-32 mb-2" />
                <Skeleton className="h-10 w-full" />
              </div>

               <div>
                <Skeleton className="h-4 w-32 mb-2" />
                <Skeleton className="h-10 w-full" />
              </div>

               <div>
                <Skeleton className="h-4 w-32 mb-2" />
                <Skeleton className="h-10 w-full" />
              </div>

               <div>
                <Skeleton className="h-4 w-32 mb-2" />
                <Skeleton className="h-10 w-full" />
              </div>

               <div>
                <Skeleton className="h-4 w-32 mb-2" />
                <Skeleton className="h-10 w-full" />
              </div>
            </div>
          </div>

          {/* Bottom Full-width Input */}
          <div className="mt-6">
            <Skeleton className="h-4 w-40 mb-2" />
            <Skeleton className="h-10 w-full" />
          </div>

        </div>
      </div>
    </div>
    </>
  );
}

export default Loading;
