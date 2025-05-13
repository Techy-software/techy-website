import { useNavigate } from "react-router-dom";

const PostTopBar = (props) => {
  const navigator = useNavigate();
  return (
    <div className="sticky top-0 z-10 flex justify-between items-center bg-white p-6 shadow pb-6">
      <div className="flex items-center">
        {!props.removeBack && (
          <button className="mr-2" onClick={() => navigator(-1)}>
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        )}
        <h1 className="text-2xl font-bold mr-4">{props.title}</h1>
        {props.status && (
          <span className="ml-2 px-2 py-1 text-sm text-gray-500 bg-green-200 rounded">
            {props.status}
          </span>
        )}
      </div>
      <div className="flex items-center">
        {props.saved && (
          <span className="text-gray-500 mr-4">{props.saved}</span>
        )}
        <button className="bg-blue-500 text-white px-10 py-2 rounded w-100 " onClick={props.onClick}>
          {props.buttonText}
        </button>
      </div>
    </div>
  );
};

export default PostTopBar;
