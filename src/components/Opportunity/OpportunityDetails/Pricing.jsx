import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ComboAutocomplete from "../../../reusable components/AutoComplete/ComboAutoComplete";
import HorizontalSteps from "../../../reusable components/HorizontalSteps/HorizontalSteps";
import InputField from "../../../reusable components/InputField/InputField";
import PaymentMethod from "../../../reusable components/PaymentMethod/PaymentMethod";
import WhiteCard from "../../../reusable components/WhiteCard/WhiteCard";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import StayCurrentPortraitIcon from "@mui/icons-material/StayCurrentPortrait";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { AccountBalance, ReceiptLong } from "@mui/icons-material";

const Pricing = () => {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-3 m-3">
        <HorizontalSteps
          steps={[
            "Overview",
            "Speakers",
            "Pricing & Payment methods",
            "Publishing",
          ]}
          currentStep={2}
          title={"Publish Opportunity"}
        />
      </div>
      <div className="col-span-9">
        <WhiteCard title={"Price"}>
          <p className="m-5 ms-0 text-slate-400 text-xs">
            Please select the currency and the price tier for your course. if
            you'd like to offer your course for free
          </p>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-6">
              <InputField
                label="Price"
                type="number"
                placeholder={"150"}
                style={{ padding: 10, marginTop: 10 }}
              />
            </div>
            <div className="col-span-6">
              <label className="font-normal text-xs">Currency</label>
              <ComboAutocomplete options={[]} placeholder={"EGP"} />
            </div>
            <div className="col-span-6">
              <label className="font-normal text-xs">Discount</label>
              <ComboAutocomplete options={[]} placeholder={"10%"} />
            </div>
          </div>
        </WhiteCard>
        <WhiteCard title={"Payment Methods"} style={"mt-5"}>
          <p className="text-slate-400 m-5 ms-0 text-sm">
            phone orders, or check to receive payments outside of your store's
            online checkout.
          </p>
          <p className="text-slate-400 m-5 ms-0 text-sm">
            These are the payment methods that you have set up in your Course.
            If enabled, they are available for your customers to choose from at
            checkout.
          </p>
          <PaymentMethod
            title={"Pay by cash"}
            description={
              "if you are not ready to accept online payments yet? select cash only."
            }
            icon={<AttachMoneyIcon />}
          />
          <div className="mt-4">
            <PaymentMethod
              title={"Vodafone cash"}
              description={"Select if you have wallet on Vodafone cash"}
              icon={<StayCurrentPortraitIcon />}
            >
              <div className="m-4">
                <hr />
                <p className="my-4">Added numbers</p>
                <WhiteCard style={"flex justify-between items-center"}>
                  <div>
                    <p className="text-slate-400 text-sm">Wallet number</p>
                    <p className="font-bold">+20 1142857693</p>
                  </div>
                  <FontAwesomeIcon
                    icon={faEllipsis}
                    style={{ color: "#016BDD" }}
                  />
                </WhiteCard>
                <div className="mt-5">
                  <hr />
                  <p className="mt-3 text-blue-500 font-semibold cursor-pointer">
                    Add Wallet Number
                  </p>
                </div>
              </div>
            </PaymentMethod>
          </div>
          <div className="mt-4">
            <PaymentMethod
              title={"Bank Account"}
              description={"Select if you have Bank account"}
              icon={<AccountBalance />}
            >
              <div className="m-4">
                <hr />
                <p className="my-4">Added numbers</p>
                <WhiteCard style={"flex justify-between items-center"}>
                  <div>
                    <p className="text-slate-400 text-sm">Account number</p>
                    <p className="font-bold">10002894881824</p>
                  </div>
                  <FontAwesomeIcon
                    icon={faEllipsis}
                    style={{ color: "#016BDD" }}
                  />
                </WhiteCard>
                <div className="mt-5">
                  <hr />
                  <p className="mt-3 text-blue-500 font-semibold cursor-pointer">
                    Add Bank Account
                  </p>
                </div>
              </div>
            </PaymentMethod>
          </div>
          <div className="mt-4">
            <PaymentMethod
              title={"Fawry"}
              description={"Select if you have wallet on Fawry"}
              icon={<ReceiptLong />}
            />
          </div>
        </WhiteCard>
      </div>
    </div>
  );
};

export default Pricing;
