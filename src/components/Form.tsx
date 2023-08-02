import {useState} from "react";

// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
function Form (props: { cardsearch: (arg0: any) => void}) {
  //State to hold the data of our form
  const [formData, setFormData] = useState({
    searchterm: "",
  });

  console.log(formData);
  //handleChange - updates formData when we type into form
  const handleChange = (event: { target: { name: any; value: any; }; }) => {
    //use the event object to detect key and value to update
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    //prevent page from refreshing on form submission
    event.preventDefault();
    //pass the search term to cardsearch prop, which is apps getcard function
    props.cardsearch(formData.searchterm);
  };

  //The component must return some JSX
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchterm"
          onChange={handleChange}
          value={formData.searchterm}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Form;