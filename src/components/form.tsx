import { FormFields } from "./formfields";

export default function NewForm() {
  const generateForm = () => {
    return Object.keys(FormFields).map((key) => (
      <div key={key} className="p-2 w-full">
        <label
          htmlFor={key}
          className="block text-white text-xl font-bold mb-2 w-full text-left"
        >
          {key}
        </label>
        <input
          type="text"
          id={key}
          name={key}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
    ));
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form className="inline-flex flex-col p-5 justify-center items-center bg-gray-700 rounded-xl w-1/2">
        {generateForm()}
        <input
          type="submit"
          value="Submit"
          className="p-5 bg-blue-500 hover:bg-gradient-to-r from-rose-400 to-orange-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        />
      </form>
    </div>
  );
}