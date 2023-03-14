import React from "react";
import LoadingStyles from "./Loading.module.css";

const Loading: React.FC = () => {
  return (
    <div data-testid='loading-test' className={LoadingStyles.mainDiv}>
      <div className={LoadingStyles.loading_element}></div>
      <div className={LoadingStyles.loading_element}></div>
      <div className={LoadingStyles.loading_element}></div>
      <div className={LoadingStyles.loading_element}></div>
      <div className={LoadingStyles.loading_element}></div>
      <div className={LoadingStyles.loading_element}></div>
      <div className={LoadingStyles.loading_element}></div>
      <div className={LoadingStyles.loading_element}></div>
      <div className={LoadingStyles.loading_element}></div>
      <div className={LoadingStyles.loading_element}></div>
    </div>
  );
};

export default Loading;
