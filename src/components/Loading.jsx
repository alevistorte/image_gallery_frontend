function Loading() {
  return (
    <div className="w-56 h-56 flex flex-col items-center justify-center">
      <div className="flex justify-center items-center">
        <div className="flex ">
          <div className="h-8 mx-1 w-4 bg-blue-900 rounded-full animate-pulse opacity-100 delay-300" />
          <div className="h-8 mx-1 w-4 bg-blue-900 rounded-full animate-pulse opacity-100 delay-300" />
          <div className="h-8 mx-1 w-4 bg-blue-900 rounded-full animate-pulse opacity-100 delay-300" />
        </div>
      </div>
      <p id="textPreviewInfo">Loading information...</p>
    </div>
  );
}

export default Loading;
