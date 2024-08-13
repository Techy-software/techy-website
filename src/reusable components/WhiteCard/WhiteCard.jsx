const WhiteCard = ({ title, children, style, titleStyle }) => (
  <div className={`bg-white rounded-lg p-5 border-2 ${style}`}>
    {title && <h2 className={`mb-3 text-xl ${titleStyle}`}>{title}</h2>}
    {title && <hr />}
    {children}
  </div>
);

export default WhiteCard;
