const WhiteCard = ({ title, children, style, titleStyle, button }) => (
  <div className={`bg-white rounded-lg p-5 border-2 ${style}`}>
    {title && (
      <div className="flex items-center justify-between mb-3">
        <h2 className={`text-xl ${titleStyle}`}>{title}</h2>
        {button && <div>{button}</div>}
      </div>
    )}
    {title && <hr />}
    {children}
  </div>
);

export default WhiteCard;
