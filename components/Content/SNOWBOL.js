//SNOWBOL COMPILER CONTENT
export default function SNOWBOL() {
  return (
    <>
      <logo>
        <img className="mb-6" 
            src="/assets/SNOWBOL.svg" 
            loading="lazy" 
            draggable="false" 
            width="250" 
            height="75" 
            alt="Snowbol Compiler Logo">
        </img>
      </logo>
      <content className="grid place-items-center">
        <p className="text-gray text-base text-center px-2">
          Information about the SNOWBOL compiler should be here
        </p>
        <p className="text-gray text-base text-center px-2 my-6">
          That includes repo, documentation and download links.
        </p>
        <p className="text-gray text-base text-center px-2 mt-12">
          Testing in production goes brrrrrr
        </p>
      </content>
    </>
  )
}