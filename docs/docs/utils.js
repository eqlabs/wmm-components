// import { showMedia } from "../../examples/audioAndVideo/client";

export const MediaImport = ({url, media}) => {
  if (typeof document == 'undefined') return null
  const script = document.createElement("script");
  script.type = 'module'
  script.src = url;
  document.body.appendChild(script);
  if (!media)
    throw Error("Define media to play after import")

  script.addEventListener('load', () => {
    showMedia(media)
  })
  

  return null
}

console.log('MediaImport', MediaImport)
