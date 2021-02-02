

export const DynamicImport = ({url}) => {
  if (typeof document == 'undefined') return null
  const script = document.createElement("script");
  script.type = 'module'
  script.src = url;
  document.body.appendChild(script);
  return null
}