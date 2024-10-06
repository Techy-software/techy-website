import { Switch } from "@mui/material";
import WhiteCard from "../WhiteCard/WhiteCard";

const PaymentMethod = ({ title, description, icon, children }) => {
  return (
    <WhiteCard>
      <div className="flex justify-between items-center">
        <div>
          <div className="flex gap-1">
            {icon}
            <p className="text-bold">{title}</p>
          </div>
          <p className="text-slate-400 text-sm font-normal ms-7">
            {description}
          </p>
        </div>
        <Switch defaultChecked color="success" />
      </div>
      {children}
    </WhiteCard>
  );
};

export default PaymentMethod;
