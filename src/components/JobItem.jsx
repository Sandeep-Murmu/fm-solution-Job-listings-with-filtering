function JobItem({ jobObj, tagUpdate }) {
  return (
    <div
      className={`job-item rounded-md shadow-[0_10px_15px_-3px_rgba(91,164,164,0.3)] flex items-center justify-between flex-wrap gap-8 sm:gap-4 p-6.5 w-full max-w-5xl pt-15 sm:pt-6.5 bg-white relative ${
        jobObj.featured && "border-l-5 border-l-(--Green-400)"
      }`}
    >
      <div className="job-logo absolute sm:static top-[0%] translate-y-[-50%] sm:translate-y-0">
        <img src={jobObj.logo} alt={jobObj.company} />
      </div>
      <div className="job-info mr-auto ">
        <div className="job-info__top flex flex-wrap items-center mb-1">
          <h3 className="company-name font-bold mr-4 text-(--Green-400)">
            {jobObj.company}
          </h3>
          <div className="job-tags flex  gap-1.5 text-xs font-bold *:px-2 *:py-1 *:leading-[21px] *:text-(--Green-50) *:rounded-full *:uppercase">
            {jobObj.new && <div className="job-new bg-(--Green-400)">new!</div>}
            {jobObj.featured && (
              <div className="job-featured bg-(--Green-900)">featured</div>
            )}
          </div>
        </div>
        <div className="job-info__main">
          <h2 className="job-position text-xl font-bold hover:text-(--Green-400) cursor-pointer transition-colors my-2">
            {jobObj.position}
          </h2>
          <ul className="job-detail flex flex-wrap list-disc text-(--Gray-400) gap-8 indent-2 ml-[-8px]">
            <li className="list-none">{jobObj.postedAt}</li>
            <li>{jobObj.contract}</li>
            <li>{jobObj.location}</li>
          </ul>
        </div>
      </div>
      <div className="job-holdings w-full sm:w-auto flex flex-wrap gap-4 text-(--Green-400) font-semibold *:bg-(--Green-50) *:px-2 *:py-1 text-sm *:rounded-sm *:cursor-pointer *:hover:bg-(--Green-400) *:hover:text-(--Green-50) transition-all relative before:absolute before:w-full before:h-0.5 before:bg-(--Gray-400) before:top-[-18px] sm:before:hidden">
        <button className="job-role" onClick={() => tagUpdate(jobObj.role)}>
          {jobObj.role}
        </button>
        <button className="job-level" onClick={() => tagUpdate(jobObj.level)}>
          {jobObj.level}
        </button>
        {jobObj.tools.map((tool, index) => {
          return (
            <button
              key={index}
              className="job-tool"
              onClick={() => tagUpdate(tool)}
            >
              {tool}
            </button>
          );
        })}
        {jobObj.languages.map((language, index) => {
          return (
            <button
              key={index}
              className="job-language"
              onClick={() => tagUpdate(language)}
            >
              {language}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default JobItem;
