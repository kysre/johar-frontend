const CategoryElement = ({ imageUrl, text }) => {
    const containerStyle = {
      position: 'relative',
      display: 'inline-block',
    };
  
    const imageStyle = {
      width: '225px',
      height: '180px',
      borderRadius: '8px',
      filter: `brightness(75%)`,
    };
  
    const overlayStyle = {
      position: 'absolute',
      top: '45%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      textAlign: 'center',
      color: 'white', // Customize text color
    };
  
    return (
      <div style={containerStyle}>
        <img src={imageUrl} alt="Overlay" style={imageStyle} />
        <div style={overlayStyle}>
          <p style={{fontSize: '200%', fontWeight: 'bold' }}>{text}</p>
        </div>
      </div>
    );
  };
  export default CategoryElement;