const Balloon = () => {
  const balloonWidth = 200;
  const balloonHeight = 200 * 1.17;
  const threadHeight = 50;

  return (
    <div className="balloon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${balloonWidth} ${balloonHeight + threadHeight}`}
      >
        ...
      </svg>
    </div>
  );
};