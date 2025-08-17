import data from "./../data.json";
import JobItem from "./components/jobItem";

function App() {
  return (
    <div className="job-list w-full flex flex-col items-center gap-7">
      {data.map((job) => (
        <JobItem key={job.id} jobObj={job} />
      ))}
    </div>
  );
}

export default App;
