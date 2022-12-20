function Bedroom({ bedNum }) {
  return (
    <>
      <div className="bedroom" id={`bed-${bedNum}`}>
        Bedroom {bedNum}
      </div>
    </>
  );
}

export default Bedroom;
