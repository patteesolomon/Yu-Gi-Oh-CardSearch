import { useState } from "react";

function NewCard(props: {
    cardSearch: any;
}) {
    const [data, setData] = useState(null);
    //Ternary operator will determine which functions JSX we will return
    setData(props.cardSearch);
    const loading = () => {
        return <h1>No card to Display</h1>;
    };
    //Ternary operator will determine which functions JSX we will return
    const loaded = () => {
        return (
            <>
                {data}
            </>
        );
    }
    return data ? loaded() : loading();
}

export default NewCard;