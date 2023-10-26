const SkillsCard = ({ id, img, alt, title, descr }) => {
  return (
    <div key={id} className="skills__card">
      <div className="skills__card-img">
        <img src={img} alt={alt} />
      </div>
      <h3 className="skills__card-title">{title}</h3>
      <p className="skills__card-descr">{descr}</p>
    </div>
  );
};

export default SkillsCard;
