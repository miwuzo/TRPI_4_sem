import { ReportHandler } from 'web-vitals';

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry); // суммарное смещение макета
      getFID(onPerfEntry); //время первого взаимодействия
      getFCP(onPerfEntry); //время загрузки 
      getLCP(onPerfEntry); //время отображения основного содержимого на экране
      getTTFB(onPerfEntry); //врема до первого байта
    });
  }
};

export default reportWebVitals;
