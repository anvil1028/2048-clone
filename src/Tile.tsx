type tileProps = {
  value: number | undefined;
};

const Tile = ({ value }: tileProps) => {
  const bgColorList = [
    '#EEE4DA',
    '#EEE1C9',
    '#F3B27A',
    '#F69664',
    '#F77C5F',
    '#F75F3B',
    '#EDD073',
  ];

  const createBgColor = (val: number | undefined) => {
    let bgColor: string | undefined = '#cdc1b4';

    switch (val) {
      case 2:
        bgColor = bgColorList[0];
        break;
      case 4:
        bgColor = bgColorList[1];
        break;
      case 8:
        bgColor = bgColorList[2];
        break;
      case 16:
        bgColor = bgColorList[3];
        break;
      case 32:
        bgColor = bgColorList[4];
        break;
      case 64:
        bgColor = bgColorList[5];
        break;
      case 128:
        bgColor = bgColorList[6];
        break;
    }
    return bgColor;
  };

  const createColor = (val: number | undefined) => {
    if (val === 2 || val === 4) {
      return '#776e65';
    } else {
      return 'white';
    }
  };

  return (
    <div
      className="box"
      style={{
        backgroundColor: createBgColor(value),
        color: createColor(value),
      }}
    >
      {value !== 0 ? value : ''}
    </div>
  );
};

export default Tile;
