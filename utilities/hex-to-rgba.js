const hexToRGBA = (hexCode, alpha = 1.0) => {
    const r = parseInt(hexCode.slice(1, 3), 16),
          g = parseInt(hexCode.slice(3, 5), 16),
          b = parseInt(hexCode.slice(5, 7), 16);
    if (alpha) return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    else return `${r}, ${g}, ${b}`;
};

module.exports = hexToRGBA;