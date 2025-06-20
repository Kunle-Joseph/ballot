const Nominee = ({
  nominee,
  setSelectedNominee,
  categoryId,
  selectedNominee,
}) => {

  const handleClick = () => {
    setSelectedNominee({
        ...selectedNominee,
        [categoryId]: {
            title: nominee.title,
            photoUrL: nominee.photoUrL,
        }
    });
  };

  return (
    <div
      className={`${
      selectedNominee[categoryId]?.title === nominee.title
          ? "nominee-card-selected"
          : "nominee-card"
      }`}
      onClick={handleClick}
    >
      <h3>{nominee.title}</h3>
      <img src={nominee.photoUrL} alt={nominee.title} />
      <div>
        <button className="select-button" onClick={handleClick}>
          Select
        </button>
      </div>
    </div>
  );
};
export default Nominee;
