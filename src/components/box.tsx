import React from 'react';

type Props = {
  filter: any;
  weathersState: any[];
  region: string;
  city: string;
};

const BoxWeather = ({ filter, weathersState, region, city }: Props) => {
  return (
    <>
      <img
        src={filter(weathersState, city)[0]?.current.condition.icon}
        alt='logo meteo'
      />
      <div>Region: {region}</div>
      <div>ville: {city}</div>
      <div>
        condition: {filter(weathersState, city)[0]?.current.condition.text}{' '}
      </div>
      <div>
        humidity: {`\n${filter(weathersState, city)[0]?.current.humidity}%`}{' '}
      </div>

      <div>
        temperature: {`\n${filter(weathersState, city)[0]?.current.temp_c}°C`}
      </div>
      <div>
        temperature ressenti:
        {`\n${filter(weathersState, city)[0]?.current.feelslike_c}°C`}
      </div>
      <div>
        Qualite de l'air:{' '}
        {filter(weathersState, city)[0]?.current.air_quality['gb-defra-index'] <
        4
          ? 'Bon'
          : 'Mauvais'}
      </div>
    </>
  );
};

export default BoxWeather;
