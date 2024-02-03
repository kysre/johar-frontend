const CategoryElement = ({
  imageUrl,
  text,
}: {
  imageUrl: string
  text: string
}) => {
  const imageStyle = {
    width: '225px',
    height: '180px',
    borderRadius: '8px',
    filter: `brightness(75%)`,
  }

  return (
    <div
      style={{
        position: 'relative',
        display: 'inline-block',
        padding: '5px',
      }}
    >
      <img src={imageUrl} alt="Overlay" style={imageStyle} />
      <div
        style={{
          position: 'absolute',
          top: '45%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: 'white', // Customize text color
        }}
      >
        <p style={{ fontSize: '200%', fontWeight: 'bold' }}>{text}</p>
      </div>
    </div>
  )
}
export default CategoryElement
