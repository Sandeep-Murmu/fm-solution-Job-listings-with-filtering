import data from "./../data.json";
import JobItem from "./components/jobItem";

function App() {
  return (
    <div className="job-list w-full flex flex-col items-center sm:gap-7 gap-18 px-6 pt-15 sm:pt-0">
      {data.map((job) => (
        <JobItem key={job.id} jobObj={job} />
      ))}
    </div>
  );
}

export default App;
