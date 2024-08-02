const WhiteCard = ({ title, children, style }) => (
  <div className={`bg-white rounded-lg p-5 border-2 ${style}`}>
    <h2 className="mb-3 text-xl">{title}</h2>
    <hr />
    {children}
  </div>
);

export default WhiteCard;
