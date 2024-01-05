import React from "react";
import "./timelines.css";
import { useTranslation } from 'react-i18next';

const Timelines = ({page}) => {

  const { t } = useTranslation();

  return (
    <div className="container">
      <ul>
        <li>
          <span> {t(`${page}.timeline.stages1.title`)}</span>
          <b>{t(`${page}.timeline.stages1.year`)}</b>
          <p>{t(`${page}.timeline.stages1.description`)}</p>
        </li>
        <li>
        <span> {t(`${page}.timeline.stages2.title`)}</span>
          <b>{t(`${page}.timeline.stages2.year`)}</b>
          <p>{t(`${page}.timeline.stages2.description`)}</p>
        </li>
        <li>
        <span> {t(`${page}.timeline.stages3.title`)}</span>
          <b>{t(`${page}.timeline.stages3.year`)}</b>
          <p>{t(`${page}.timeline.stages3.description`)}</p>
        </li>
        <li>
        <span> {t(`${page}.timeline.stages4.title`)}</span>
          <b>{t(`${page}.timeline.stages4.year`)}</b>
          <p>{t(`${page}.timeline.stages4.description`)}</p>
        </li>
        <li>
        <span> {t(`${page}.timeline.stages5.title`)}</span>
          <b>{t(`${page}.timeline.stages5.year`)}</b>
          <p>{t(`${page}.timeline.stages5.description`)}</p>
        </li>
      </ul>
    </div>
  );
};

export default Timelines;
