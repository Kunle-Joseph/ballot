import "./App.css";
import { useState, useEffect } from "react";
import api from "./Api/Api";
import Category from "./Components/Category";

function App() {
  const [ballotData, setBallotData] = useState(null);
  const [error, setError] = useState(null);
  const [selectedNominee, setSelectedNominee] = useState({
    "Best Picture": [
      {
        title: null,
        photoUrL: null,
      },
    ],
    "Best Director": [
      {
        title: null,
        photoUrL: null,
      },
    ],
    "Best Actor": [
      {
        title: null,
        photoUrL: null,
      },
    ],
    "Best Actress": [
      {
        title: null,
        photoUrL: null,
      },
    ],
    "Best Supporting Actor": [
      {
        title: null,
        photoUrL: null,
      },
    ],
    "Best Supporting Actress": [
      {
        title: null,
        photoUrL: null,
      },
    ],
    "Best Visual Effects": [
      {
        title: null,
        photoUrL: null,
      },
    ],
  });
  const [showSelected, setShowSelected] = useState(false);

  //getting ballot data from the api
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await api.getBallotData();
        setBallotData(data.items);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching ballot data:", err);
      }
    };

    fetchData();
  }, []);

  //console log the ballot data outside of the other to see if it updates correctly
  /*
  useEffect(() => {
    console.log("Current ballot data:", ballotData);
  }, [ballotData]);*/

  const handleSubmit = () => {
    // making sure all categories have a nominee picked
    console.log("Selected Nominees:", selectedNominee);
    for (const category in selectedNominee) {
      if (selectedNominee[category].title == null) {
        alert(`Please select a nominee for ${category}`);
        return;
      }
    }
    setShowSelected(true);
  };

  if (error) return <div>Error: {error}</div>;
  if (!ballotData) return <div>Loading...</div>;
  //Fix the showcase of selected nominees
  if (showSelected)
    return (
      <div className="selected">
        <h1>Your Selected Nominees</h1>
        <ul>
          <div className="selected-nominees">
            {ballotData.map((category) => (
              <div className="selected-nominee">
                <h2>{category.title}</h2>
                <div>
                  <div>
                    <img
                      src={selectedNominee[category.title].photoUrL}
                      alt={selectedNominee[category.title].title}
                    />
                  </div>
                  <h3>{selectedNominee[category.title].title}</h3>
                </div>
              </div>
            ))}
          </div>
        </ul>
        <button onClick={() => setShowSelected(false)} className="back-button">
          Back to Ballot
        </button>
      </div>
    );

  return (
    <div className="App">
      <div className="ballot">
        {ballotData.map((category) => (
          <Category
            key={category.id}
            category={category}
            setSelectedNominee={setSelectedNominee}
            selectedNominee={selectedNominee}
          />
        ))}
      </div>
      <div>
        <button onClick={handleSubmit} className="submit">
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
