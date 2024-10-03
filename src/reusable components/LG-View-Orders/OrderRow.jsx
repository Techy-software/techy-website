import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

const OrderRow = ({ order }) => {
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50">
      <td className="py-3 px-2 text-sm">{order.name}</td>
      <td className="py-3 px-2 text-center text-sm">{order.level}</td>
      <td className="py-3 px-2 text-center text-sm">{order.price}</td>
      <td className="py-3 px-2 text-center text-sm">{order.uploadedBy}</td>
      <td className="py-3 px-2 text-center text-sm">{order.lastUpdated}</td>
      <td className="py-3 px-4 text-center">
        <span
          className={`py-1 px-3 rounded-md text-sm ${
            order.status === "Active"
              ? "bg-green-100 text-green-600"
              : order.status === "Disabled"
              ? "bg-red-100 text-red-600"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          {order.status}
        </span>
      </td>
      <td className="py-3 px-4 text-center">
        <FontAwesomeIcon icon={faEllipsis} style={{ color: "#016BDD" }} />
      </td>
    </tr>
  );
};

export default OrderRow;
