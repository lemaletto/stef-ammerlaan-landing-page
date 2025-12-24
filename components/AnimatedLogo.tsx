import { motion } from 'framer-motion';
import { imgLogo } from '../mock/data';

type AnimatedLogoType = {
  animated: boolean;
};
export default function AnimatedLogo({ animated }: AnimatedLogoType) {
  // TODO handle animated logo
  const right = (
    <div className="right">
      <svg
        className="right__svg"
        width="49"
        height="144"
        viewBox="0 0 49 144"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.5991 137.859L1.52417 124.793C8.49072 117.841 14.0185 109.583 17.7915 100.493C21.5644 91.4024 23.5085 81.6575 23.5126 71.8153C23.5167 61.9731 21.5807 52.2266 17.8153 43.1331C14.0499 34.0397 8.52899 25.7776 1.56823 18.8194L19.1894 1.19824C28.4715 10.475 35.8349 21.4899 40.8587 33.6134C45.8824 45.7369 48.4682 58.7315 48.4682 71.8546C48.4682 84.9778 45.8824 97.9724 40.8587 110.096C35.8349 122.219 28.4715 133.234 19.1894 142.511L14.5991 137.859Z"
          fill="black"
          stroke="#1D1D1B"
          strokeMiterlimit={'10'}
        />
      </svg>
    </div>
  );

  const left = (
    <div className="left">
      <svg
        className="left__svg"
        width="49"
        height="144"
        viewBox="0 0 49 144"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M35.533 6.7665L47.6299 18.8634C33.5999 32.914 25.724 51.9611 25.734 71.8171C25.7439 91.673 33.6387 110.712 47.6827 124.749L29.9999 142.423C11.2832 123.691 0.769531 98.2948 0.769531 71.8149C0.769531 45.3351 11.2832 19.9386 29.9999 1.20703L35.533 6.7665Z"
          fill="black"
          stroke="#1D1D1B"
          strokeMiterlimit="10"
        />
      </svg>
    </div>
  );

  const top = (
    <div className="top">
      <svg
        className="top__svg"
        width="179"
        height="56"
        viewBox="0 0 179 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.62985 42.7401L1.34351 37.4538C24.7598 14.0562 56.5102 0.916792 89.6125 0.925053C122.715 0.933314 154.459 14.0886 177.863 37.4978L160.242 55.119C141.519 36.3856 116.122 25.856 89.6364 25.846C63.1507 25.8361 37.7457 36.3467 19.0087 55.0661L6.62985 42.7401Z"
          fill="black"
          stroke="#1D1D1B"
          strokeMiterlimit="10"
        />
      </svg>
    </div>
  );

  const bottom = (
    <div className="bottom">
      <svg
        className="bottom__svg"
        width="179"
        height="57"
        viewBox="0 0 179 57"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.9118 32.2687C40.968 49.4717 70.3498 57.5769 99.8237 55.1405C129.298 52.7041 156.95 39.8844 177.855 18.9648L160.233 1.34363C150.962 10.6274 139.952 17.9934 127.832 23.0207C115.713 28.048 102.722 30.6381 89.6012 30.643C76.4805 30.6479 63.4874 28.0675 51.3643 23.0493C39.2412 18.0311 28.2257 10.6733 18.9471 1.39649L1.32593 19.0176C6.15196 23.8515 11.3646 28.2832 16.9118 32.2687V32.2687Z"
          fill="black"
          stroke="#1D1D1B"
          strokeMiterlimit="10"
        />
      </svg>
    </div>
  );
  const file = (
    <div className="file">
      <svg
        className="file__svg"
        width="107"
        height="108"
        viewBox="0 0 107 108"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.630005 0.854614L106.56 106.793"
          stroke="#1D1D1B"
          strokeMiterlimit="10"
        />
      </svg>
    </div>
  );

  const logoArray = [right, left, top, bottom, file];

  const renderLogo = () => (
    <>
      {logoArray.map((item, key) => (
        <div className="logo__container__item" key={key}>
          {item}
        </div>
      ))}
    </>
  );

  return (
    <div>
      {animated ? (
        renderLogo()
      ) : (
        <motion.img
          layoutId="loading-img"
          src={imgLogo}
          alt="official stef ammerlaan logo"
        />
      )}
    </div>
  );
}
