import React, { useContext } from "react";
import { MetadataContext } from "../metadata/metadataContext";
import Spinner from "./Spinner";
import link from "./assests/link.png";
import tag from "./assests/tag.png";
import facebook from "./assests/facebook.png";
import twiter from "./assests/twitter.png";
import check from "./assests/check.png";
import warning from "./assests/warning.png";
import Alert from "./Alert";
const Linkpreviewer = () => {
  const { metadata, isLoading, tagsInformation, error } =
    useContext(MetadataContext);
  const { image, description, title, siteName, hostname } = metadata;
  const { metaTagsInformation, ogInformation, twitterInformation } =
    tagsInformation;

  if (!isLoading) {
    if (Object.keys(metadata).length !== 0) {
      return (
        <>
          <div className="text-slate-100">
            <div class=" mx-auto card  bg-base-300 shadow-xl mb-2 shadow-gray-600  w-2/6  ">
              <figure>
                <img
                  className="h-80 object-scale-down"
                  src={image ? image : link}
                  alt={title}
                />
              </figure>
              <div class="card-body">
                <h2 class="card-title">{title ? title : hostname}</h2>
                <p>{description}</p>
                <div class="card-actions justify-start">
                  {siteName && (
                    <div class="badge badge-outline">{siteName}</div>
                  )}
                  <div class="badge badge-outline">{hostname}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="grid grid-rows-2">
            <div class=" stats   stats-vertical lg:stats-horizontal mx-auto   text-gray-50 shadow-gray-600 shadow-2xl mt-6">
              <div class="stat">
                <div class="stat-figure text-secondary">
                  <img src={tag} width="50px" />
                </div>
                <div class="stat-value">Meta Tags</div>
                {metaTagsInformation && (
                  <div className="grid grid-flow-row">
                    {Object.entries(metaTagsInformation).map(
                      ([key, value], i) => (
                        <div class="text-base font-medium inline" key={i}>
                          {key}:
                          <span>
                            <img
                              className="inline ml-2"
                              width="20px"
                              src={value ? check : warning}
                            />
                          </span>
                        </div>
                      )
                    )}
                  </div>
                )}
              </div>

              <div class="stat">
                <div class="stat-figure text-secondary">
                  <img src={facebook} width="50px" />
                </div>
                <div class="stat-value">OG Tags</div>
                <div className="grid grid-flow-row">
                  {ogInformation &&
                    Object.entries(ogInformation).map(([key, value], i) => (
                      <div class="text-base font-medium" key={i}>
                        {key}:
                        <img
                          className="inline ml-2"
                          width="20px"
                          src={value ? check : warning}
                        />
                      </div>
                    ))}
                </div>
              </div>

              <div class="stat mt">
                <div class="stat-figure text-secondary">
                  <img src={twiter} width="50px" />
                </div>
                <div class="stat-value">twitter Tags</div>
                <div className="grid grid-flow-row">
                  {twitterInformation &&
                    Object.entries(twitterInformation).map(
                      ([key, value], i) => (
                        <div class="text-base text-justify font-medium" key={i}>
                          {key}:
                          <img
                            className="inline ml-2 "
                            width="20px"
                            src={value ? check : warning}
                          />
                        </div>
                      )
                    )}
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
    if (error) {
      return (
        <div className="mx-auto my-auto md:text-8xl font-bold underline  decoration-rose-500	shadow-xl shadow-slate-800	">
          Url Not Found
        </div>
      );
    }
  } else {
    return <Spinner />;
  }
};

export default Linkpreviewer;
