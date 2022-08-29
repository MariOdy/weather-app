import getWeatherIcon from "src/utils/getWeatherIcon";
import type { WeatherIcon as IWeatherIcon } from "src/utils/getWeatherIcon";
import { StyledWeatherIcon } from "./styles";

interface WeatherIconProps extends React.HTMLAttributes<HTMLImageElement> {
  icon: IWeatherIcon;
}

const WeatherIcon: React.FC<WeatherIconProps> = ({ icon, ...props }) => {
  const iconSrc = `./images/weatherIcons/${getWeatherIcon(icon)}`;

  return <StyledWeatherIcon src={iconSrc} alt="" {...props} />;
};

export default WeatherIcon;
