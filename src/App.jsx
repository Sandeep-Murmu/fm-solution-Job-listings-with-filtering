import data from "./../data.json";
import JobItem from "./components/jobItem";

function App() {
  return (
    <>
      {data.map((job) => (
        <JobItem key={job.id} jobObj={job} />
      ))}
    </>
  );
}

export default App;
