import { createContext, useState } from "react";

export const MetadataContext = createContext();

export const MetadataProvider = ({ children }) => {
  const [metadata, setMetadata] = useState({});
  const [tagsInformation, setTagsInformation] = useState({});
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMetaData = async (text) => {
    setIsLoading(true);
    setMetadata({});
    setError(false);
    const result = await fetch(
      `https://metatags-generator-backend.herokuapp.com/api/v1/meta?url=${text}`
    );
    const metadataRes = await result.json();

    if (metadataRes.metadata) {
      setMetadata(metadataRes.metadata);
      setTagsInformation(metadataRes.tagsInformation);
    } else {
      setError(true);
    }
    setIsLoading(false);
  };

  return (
    <MetadataContext.Provider
      value={{ fetchMetaData, metadata, isLoading, tagsInformation, error }}
    >
      {children}
    </MetadataContext.Provider>
  );
};
