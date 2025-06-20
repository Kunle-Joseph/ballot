const SelectedNominees = ({ nominee }) => {
  return (
    <div >
      <div>
        <img src={nominee.photoUrL} alt={nominee.title} />
      </div>
      <h3>{nominee.title}</h3>
    </div>
  );
};

export default SelectedNominees;
