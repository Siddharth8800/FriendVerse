import { FormFields } from "./formfields";

export default function NewForm() {
  const generateForm = () => {
    return Object.keys(FormFields).map((key) => (
      <div key={key} className="p-2">
        <label
          htmlFor={key}
          className="block text-gray-700 text-xl font-bold mb-2 "
        >
          {key}
        </label>
        <input
          type="text"
          id={key}
          name={key}
          className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
    ));
  };

  return (
    <div className="border">
      <form className="text-center p-5 justify-center text-center items-center">
        {generateForm()}
        <input
          type="submit"
          value="Submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        />
      </form>
    </div>
  );
}
